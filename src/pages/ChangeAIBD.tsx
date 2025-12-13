import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Plane, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ChangeAIBD = () => {
  return (
    <>
      <Helmet>
        <title>Bureau de Change Aéroport AIBD Diass | Change Express Sénégal</title>
        <meta 
          name="description" 
          content="Bureau de change à l'Aéroport International Blaise Diagne (AIBD). Service 24h/24, meilleurs taux pour voyageurs. Euro, Dollar, toutes devises. Réservez en ligne." 
        />
        <meta name="keywords" content="change aibd, bureau change aéroport dakar, change blaise diagne, euro cfa aéroport, dollar aéroport sénégal" />
        <link rel="canonical" href="https://change-express.sn/change-aibd" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    Aéroport AIBD
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                  Change de Devises à l'Aéroport AIBD
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Service de change disponible à l'Aéroport International Blaise Diagne (AIBD) 
                  à Diass. Ouvert pour tous les vols, arrivées et départs. 
                  Réservez votre change en ligne pour gagner du temps.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="#convertisseur">Calculer mon change</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.me/221760000000" target="_blank" rel="noopener noreferrer">
                      Réserver mon change
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Airport Info */}
          <section className="py-16 bg-background">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                    Notre Bureau à l'Aéroport AIBD
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Situé dans le hall principal de l'Aéroport International Blaise Diagne, 
                    notre bureau de change est facilement accessible dès votre arrivée ou 
                    avant votre départ. Service rapide et efficace adapté aux voyageurs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Localisation</p>
                        <p className="text-muted-foreground">Hall des arrivées, Zone publique - AIBD, Diass</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Horaires</p>
                        <p className="text-muted-foreground">Ouvert selon les horaires des vols (6h - 23h)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Contact direct</p>
                        <p className="text-muted-foreground">+221 76 XXX XX XX (WhatsApp disponible)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Conseils pour les Voyageurs
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Réservez votre change en ligne pour un taux garanti",
                        "Arrivez 15 minutes avant votre vol pour le change",
                        "Gardez votre passeport pour les grosses sommes",
                        "Comparez nos taux avec les banques locales",
                      ].map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Services for Travelers */}
          <section className="py-16 bg-secondary/30">
            <div className="container">
              <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
                Services Spéciaux Voyageurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Plane className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Réservation de Taux</h3>
                    <p className="text-sm text-muted-foreground">
                      Bloquez votre taux 24h avant votre arrivée via WhatsApp
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Sécurité Maximale</h3>
                    <p className="text-sm text-muted-foreground">
                      Bureau sécurisé dans la zone contrôlée de l'aéroport
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Service Express</h3>
                    <p className="text-sm text-muted-foreground">
                      Opérations en moins de 3 minutes pour les voyageurs pressés
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Converter Section */}
          <section id="convertisseur" className="py-16 bg-background">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Préparez Votre Change Avant le Vol
                </h2>
                <p className="text-muted-foreground">
                  Calculez le montant à changer et réservez votre taux à l'avance
                </p>
              </div>
              <CurrencyConverter />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary">
            <div className="container text-center">
              <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
                Voyagez l'Esprit Tranquille
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Réservez votre change avant votre arrivée et profitez de taux garantis
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth">Créer un compte</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="https://wa.me/221760000000?text=Bonjour, je souhaite réserver un change pour mon arrivée à AIBD" target="_blank" rel="noopener noreferrer">
                    Réserver sur WhatsApp
                  </a>
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

export default ChangeAIBD;
