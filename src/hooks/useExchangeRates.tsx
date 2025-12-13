import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ExchangeRate {
  id: string;
  currency_code: string;
  currency_name: string;
  flag: string;
  buy_rate: number;
  sell_rate: number;
  margin_percent: number;
  is_active: boolean;
  updated_at: string;
}

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ["exchange-rates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("exchange_rates")
        .select("*")
        .eq("is_active", true)
        .order("currency_code");

      if (error) throw error;
      return data as ExchangeRate[];
    },
    staleTime: 60000, // 1 minute
  });
};
