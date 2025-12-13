import { Check, Award, Users, Clock, Shield } from "lucide-react";

const reasons = [
  "Taux de change compétitifs et transparents",
  "Aucun frais caché sur vos transactions",
  "Service client disponible 6j/7",
  "Transactions sécurisées et conformes",
  "Plus de 15 devises disponibles",
  "Traitement rapide de vos opérations",
];

const stats = [
  { icon: Users, value: "5000+", label: "Clients Satisfaits" },
  { icon: Award, value: "10+", label: "Années d'Expérience" },
  { icon: Clock, value: "24h", label: "Service Réactif" },
  { icon: Shield, value: "100%", label: "Transactions Sécurisées" },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Pourquoi Nous Choisir
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              L'Excellence du Service de Change au Sénégal
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Depuis plus de 10 ans, Change Express accompagne les particuliers 
              et les entreprises dans leurs opérations de change. Notre engagement : 
              vous offrir les meilleurs taux avec un service irréprochable.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
