import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CE</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Change Express</h3>
                <p className="text-xs text-background/60">Sénégal</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Votre bureau de change de confiance au Sénégal. Taux compétitifs, 
              service rapide et sécurisé pour tous vos besoins en devises.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-background/70 hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#convertisseur" className="text-background/70 hover:text-primary transition-colors">
                  Convertisseur
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li className="text-background/70">Achat de devises</li>
              <li className="text-background/70">Vente de devises</li>
              <li className="text-background/70">Transferts internationaux</li>
              <li className="text-background/70">Service entreprises</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>Avenue Cheikh Anta Diop</li>
              <li>Dakar, Sénégal</li>
              <li>+221 77 123 45 67</li>
              <li>contact@changeexpress.sn</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>© {currentYear} Change Express Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
