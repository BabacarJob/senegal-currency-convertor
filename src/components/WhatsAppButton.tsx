import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  fromCurrency?: string;
  toCurrency?: string;
  amount?: string;
  result?: number;
}

const WhatsAppButton = ({
  phoneNumber = "221760000000",
  message,
  fromCurrency,
  toCurrency,
  amount,
  result,
}: WhatsAppButtonProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const generateMessage = () => {
    if (message) return encodeURIComponent(message);
    
    if (fromCurrency && toCurrency && amount && result) {
      const text = `Bonjour Change Express,

Je souhaite effectuer un change:
- Montant: ${amount} ${fromCurrency}
- Devise souhaitée: ${toCurrency}
- Estimation: ${formatNumber(result)} ${toCurrency}

Merci de me confirmer le taux exact.`;
      return encodeURIComponent(text);
    }

    return encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services de change.");
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateMessage()}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contacter sur WhatsApp">
        <MessageCircle className="h-7 w-7" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
