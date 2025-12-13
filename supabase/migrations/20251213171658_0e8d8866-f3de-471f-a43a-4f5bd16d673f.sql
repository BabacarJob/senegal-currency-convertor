-- Create profiles table for user accounts
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  loyalty_points INTEGER NOT NULL DEFAULT 0,
  vip_status BOOLEAN NOT NULL DEFAULT false,
  preferred_currency TEXT DEFAULT 'EUR',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create transactions history table
CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  from_currency TEXT NOT NULL,
  to_currency TEXT NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  converted_amount DECIMAL(15,2) NOT NULL,
  exchange_rate DECIMAL(15,6) NOT NULL,
  fees DECIMAL(15,2) NOT NULL DEFAULT 0,
  points_earned INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create exchange rates table for manual rates management
CREATE TABLE public.exchange_rates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  currency_code TEXT NOT NULL UNIQUE,
  currency_name TEXT NOT NULL,
  flag TEXT NOT NULL,
  buy_rate DECIMAL(15,6) NOT NULL,
  sell_rate DECIMAL(15,6) NOT NULL,
  margin_percent DECIMAL(5,2) NOT NULL DEFAULT 2.0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exchange_rates ENABLE ROW LEVEL SECURITY;

-- Profiles RLS policies
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Transactions RLS policies
CREATE POLICY "Users can view their own transactions" 
ON public.transactions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own transactions" 
ON public.transactions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Exchange rates are publicly readable
CREATE POLICY "Anyone can view exchange rates" 
ON public.exchange_rates 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_exchange_rates_updated_at
BEFORE UPDATE ON public.exchange_rates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data ->> 'full_name');
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert default exchange rates
INSERT INTO public.exchange_rates (currency_code, currency_name, flag, buy_rate, sell_rate, margin_percent) VALUES
('EUR', 'Euro', '🇪🇺', 655.957, 660.00, 0.6),
('USD', 'Dollar US', '🇺🇸', 600.00, 605.00, 0.8),
('GBP', 'Livre Sterling', '🇬🇧', 760.00, 768.00, 1.0),
('CHF', 'Franc Suisse', '🇨🇭', 680.00, 688.00, 1.2),
('CAD', 'Dollar Canadien', '🇨🇦', 440.00, 445.00, 1.1),
('MAD', 'Dirham Marocain', '🇲🇦', 60.00, 61.00, 1.7),
('NGN', 'Naira Nigérian', '🇳🇬', 0.40, 0.41, 2.5),
('GHS', 'Cedi Ghanéen', '🇬🇭', 48.00, 49.00, 2.0),
('CNY', 'Yuan Chinois', '🇨🇳', 83.00, 84.50, 1.8),
('JPY', 'Yen Japonais', '🇯🇵', 4.00, 4.10, 2.5),
('AED', 'Dirham des EAU', '🇦🇪', 163.00, 165.00, 1.2),
('SAR', 'Riyal Saoudien', '🇸🇦', 160.00, 162.00, 1.2),
('GNF', 'Franc Guinéen', '🇬🇳', 0.07, 0.072, 2.8),
('GMD', 'Dalasi Gambien', '🇬🇲', 8.50, 8.70, 2.3);