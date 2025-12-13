import { useState, useEffect } from "react";
import { ArrowRightLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const currencies = [
  { code: "XOF", name: "Franc CFA (BCEAO)", flag: "🇸🇳" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "USD", name: "Dollar US", flag: "🇺🇸" },
  { code: "GBP", name: "Livre Sterling", flag: "🇬🇧" },
  { code: "CHF", name: "Franc Suisse", flag: "🇨🇭" },
  { code: "CAD", name: "Dollar Canadien", flag: "🇨🇦" },
  { code: "MAD", name: "Dirham Marocain", flag: "🇲🇦" },
  { code: "NGN", name: "Naira Nigérian", flag: "🇳🇬" },
  { code: "GHS", name: "Cedi Ghanéen", flag: "🇬🇭" },
  { code: "CNY", name: "Yuan Chinois", flag: "🇨🇳" },
  { code: "JPY", name: "Yen Japonais", flag: "🇯🇵" },
  { code: "AED", name: "Dirham des EAU", flag: "🇦🇪" },
  { code: "SAR", name: "Riyal Saoudien", flag: "🇸🇦" },
  { code: "GNF", name: "Franc Guinéen", flag: "🇬🇳" },
  { code: "GMD", name: "Dalasi Gambien", flag: "🇬🇲" },
];

// Taux de change approximatifs par rapport au XOF
const exchangeRates: Record<string, number> = {
  XOF: 1,
  EUR: 655.957,
  USD: 600,
  GBP: 760,
  CHF: 680,
  CAD: 440,
  MAD: 60,
  NGN: 0.40,
  GHS: 48,
  CNY: 83,
  JPY: 4,
  AED: 163,
  SAR: 160,
  GNF: 0.07,
  GMD: 8.5,
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("XOF");
  const [result, setResult] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateConversion();
  }, [amount, fromCurrency, toCurrency]);

  const calculateConversion = () => {
    setIsCalculating(true);
    const numAmount = parseFloat(amount) || 0;
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    
    // Convertir d'abord en XOF puis vers la devise cible
    const inXOF = numAmount * fromRate;
    const converted = inXOF / toRate;
    
    setTimeout(() => {
      setResult(converted);
      setIsCalculating(false);
    }, 200);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const getCurrency = (code: string) => currencies.find(c => c.code === code);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-lg shadow-xl p-6 md:p-8 border border-border">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
          Convertisseur de Devises
        </h2>
        
        <div className="space-y-6">
          {/* Montant */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Montant
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Entrez le montant"
              className="text-lg font-mono h-14 text-foreground bg-background"
            />
          </div>

          {/* Devises */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                De
              </label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="h-14 text-foreground bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <span className="flex items-center gap-2">
                        <span>{currency.flag}</span>
                        <span>{currency.code}</span>
                        <span className="text-muted-foreground text-sm hidden md:inline">
                          - {currency.name}
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={swapCurrencies}
              className="mt-6 rounded-full h-12 w-12 shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowRightLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 w-full space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Vers
              </label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="h-14 text-foreground bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <span className="flex items-center gap-2">
                        <span>{currency.flag}</span>
                        <span>{currency.code}</span>
                        <span className="text-muted-foreground text-sm hidden md:inline">
                          - {currency.name}
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Résultat */}
          <div className="bg-primary/10 rounded-lg p-6 text-center border border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">Résultat</p>
            <div className="flex items-center justify-center gap-2">
              {isCalculating && (
                <RefreshCw className="h-5 w-5 animate-spin text-primary" />
              )}
              <p className="text-3xl md:text-4xl font-bold font-mono text-primary">
                {formatNumber(result)}
              </p>
              <span className="text-xl font-semibold text-primary">
                {toCurrency}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              {getCurrency(fromCurrency)?.flag} {formatNumber(parseFloat(amount) || 0)} {fromCurrency} = {getCurrency(toCurrency)?.flag} {formatNumber(result)} {toCurrency}
            </p>
          </div>

          {/* Taux de change */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              1 {fromCurrency} = {formatNumber(exchangeRates[fromCurrency] / exchangeRates[toCurrency])} {toCurrency}
            </p>
            <p className="mt-1 text-xs">
              Taux indicatifs - Contactez-nous pour les taux en temps réel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
