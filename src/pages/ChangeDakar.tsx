import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ChangeDakar = () => {
  return (
    <>
      <Helmet>
        <title>Bureau de Change à Dakar | Meilleurs Taux EUR XOF USD | Change Express</title>
        <meta 
          name="description" 
          content="Bureau de change à Dakar. Meilleurs taux pour Euro, Dollar, CFA. Service rapide au Plateau, Almadies, Medina. Ouvert Lun-Sam 8h-19h. Taux préférentiels." 
        />
        <meta name="keywords" content="change dakar, bureau change dakar, euro cfa dakar, dollar dakar, taux change dakar" />
        <link rel="canonical" href="https://change-express.sn/change-dakar" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Bureau de Change à Dakar
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                  Change de Devises à Dakar
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Change Express vous propose les meilleurs taux de change à Dakar. 
                  Euro, Dollar, Livre Sterling, Dirham et plus de 15 devises disponibles 
                  dans nos agences du Plateau, des Almadies et de la Médina.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="#convertisseur">Calculer mon change</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.me/221760000000" target="_blank" rel="noopener noreferrer">
                      Contacter sur WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Agencies Section */}
          <section className="py-16 bg-background">
            <div className="container">
              <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
                Nos Agences à Dakar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Plateau</h3>
                        <p className="text-sm text-muted-foreground">Agence principale</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        Avenue Léopold Sédar Senghor
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Lun - Sam: 8h - 19h
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        +221 33 XXX XX XX
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Almadies</h3>
                        <p className="text-sm text-muted-foreground">Zone résidentielle</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        Route des Almadies
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Lun - Sam: 9h - 18h
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        +221 33 XXX XX XX
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Médina</h3>
                        <p className="text-sm text-muted-foreground">Centre commercial</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        Marché Sandaga
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Lun - Sam: 8h - 18h
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        +221 33 XXX XX XX
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Converter Section */}
          <section id="convertisseur" className="py-16 bg-secondary/30">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Calculez Votre Change à Dakar
                </h2>
                <p className="text-muted-foreground">
                  Obtenez une estimation instantanée de votre opération de change
                </p>
              </div>
              <CurrencyConverter />
            </div>
          </section>

          {/* Why Dakar Section */}
          <section className="py-16 bg-background">
            <div className="container">
              <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
                Pourquoi Choisir Change Express à Dakar ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: CheckCircle, title: "Meilleurs Taux", desc: "Taux compétitifs actualisés quotidiennement" },
                  { icon: Clock, title: "Service Rapide", desc: "Opérations effectuées en moins de 5 minutes" },
                  { icon: Users, title: "Équipe Experte", desc: "Conseillers multilingues à votre service" },
                  { icon: MapPin, title: "3 Agences", desc: "Emplacements stratégiques dans Dakar" },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary">
            <div className="container text-center">
              <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
                Prêt à Changer Vos Devises à Dakar ?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Visitez l'une de nos agences ou contactez-nous pour obtenir les meilleurs taux
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth">Créer un compte</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+221760000000">Appeler maintenant</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ChangeDakar;
