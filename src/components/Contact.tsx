import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Avenue Cheikh Anta Diop, Dakar, Sénégal",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+221 77 123 45 67",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@changeexpress.sn",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Sam: 8h00 - 19h00",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contactez-Nous
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
            Nous Sommes à Votre Écoute
          </h2>
          <p className="text-muted-foreground">
            Une question ? Besoin d'un devis personnalisé ? Notre équipe est 
            disponible pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">
                    Contactez-nous sur WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Réponse rapide et personnalisée
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4" size="lg">
                Démarrer une conversation
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-background rounded-lg border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Envoyez-nous un message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nom complet
                  </label>
                  <Input placeholder="Votre nom" className="bg-card" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Téléphone
                  </label>
                  <Input placeholder="+221 7X XXX XX XX" className="bg-card" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input type="email" placeholder="votre@email.com" className="bg-card" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Comment pouvons-nous vous aider ?"
                  rows={5}
                  className="bg-card resize-none"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
