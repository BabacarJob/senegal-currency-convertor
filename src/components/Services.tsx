import { Banknote, Building2, Plane, CreditCard, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Achat & Vente de Devises",
    description: "Échangez vos devises au comptoir avec les meilleurs taux du marché. Euro, Dollar, Livre et plus encore.",
  },
  {
    icon: Building2,
    title: "Transferts Internationaux",
    description: "Envoyez de l'argent partout dans le monde de manière sécurisée et rapide vers vos proches.",
  },
  {
    icon: Plane,
    title: "Services Voyageurs",
    description: "Préparez votre voyage avec notre service de change adapté aux touristes et voyageurs d'affaires.",
  },
  {
    icon: CreditCard,
    title: "Paiements Internationaux",
    description: "Facilitez vos paiements à l'étranger pour vos importations et transactions commerciales.",
  },
  {
    icon: Users,
    title: "Service Entreprises",
    description: "Solutions sur mesure pour les entreprises avec des taux préférentiels et un service dédié.",
  },
  {
    icon: Briefcase,
    title: "Conseil Financier",
    description: "Bénéficiez de nos conseils experts pour optimiser vos opérations de change.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
            Des Solutions Complètes pour Vos Besoins en Devises
          </h2>
          <p className="text-muted-foreground">
            Change Express vous propose une gamme complète de services de change 
            adaptés aux particuliers comme aux professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
