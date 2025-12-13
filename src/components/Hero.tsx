import { ArrowDown, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <Shield className="h-4 w-4" />
            Bureau de Change Agréé au Sénégal
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Votre Partenaire de
            <span className="text-primary block">Change de Confiance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Échangez vos devises au meilleur taux à Dakar. Service rapide, 
            sécurisé et transparent pour particuliers et entreprises.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#convertisseur">
                Calculer mon change
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#contact">
                Nous Contacter
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">15+</span>
              <span className="text-muted-foreground">Devises disponibles</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border shadow-sm">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">10 min</span>
              <span className="text-muted-foreground">Traitement rapide</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border shadow-sm">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">100%</span>
              <span className="text-muted-foreground">Sécurisé</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#convertisseur" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
