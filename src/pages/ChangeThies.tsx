import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle, Building2, Train } from "lucide-react";
import { Link } from "react-router-dom";

const ChangeThies = () => {
  return (
    <>
      <Helmet>
        <title>Bureau de Change à Thiès | Meilleurs Taux XOF EUR USD | Change Express</title>
        <meta 
          name="description" 
          content="Bureau de change à Thiès. Meilleurs taux pour Euro, Dollar, CFA. Service rapide au centre-ville. Près de la gare TER. Ouvert Lun-Sam. Taux compétitifs." 
        />
        <meta name="keywords" content="change thiès, bureau change thiès, euro cfa thiès, dollar thiès, taux change thiès, ter thiès" />
        <link rel="canonical" href="https://change-express.sn/change-thies" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Train className="h-6 w-6 text-primary" />
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    Thiès - Capitale du Rail
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                  Change de Devises à Thiès
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Change Express vous accueille à Thiès avec les meilleurs taux de la région. 
                  Situé près de la gare TER, notre bureau est facilement accessible 
                  depuis Dakar et toutes les villes de la région.
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

          {/* Location Info */}
          <section className="py-16 bg-background">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Agence de Thiès</h3>
                        <p className="text-muted-foreground">Centre-ville</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Adresse</p>
                          <p className="text-muted-foreground">Avenue Général de Gaulle, Centre-ville</p>
                          <p className="text-sm text-muted-foreground">À 5 minutes de la gare TER</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Horaires d'ouverture</p>
                          <p className="text-muted-foreground">Lundi - Vendredi: 8h30 - 18h</p>
                          <p className="text-muted-foreground">Samedi: 9h - 14h</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Contact</p>
                          <p className="text-muted-foreground">+221 33 XXX XX XX</p>
                          <p className="text-muted-foreground">+221 76 XXX XX XX (WhatsApp)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                    Pourquoi Venir à Thiès ?
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Accès facile par le TER",
                        desc: "À seulement 45 minutes de Dakar en train express",
                      },
                      {
                        title: "Taux avantageux",
                        desc: "Profitez de taux compétitifs identiques à Dakar",
                      },
                      {
                        title: "Moins d'attente",
                        desc: "Service rapide sans les files d'attente de la capitale",
                      },
                      {
                        title: "Stationnement gratuit",
                        desc: "Parking disponible devant notre agence",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Converter Section */}
          <section id="convertisseur" className="py-16 bg-secondary/30">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Calculez Votre Change à Thiès
                </h2>
                <p className="text-muted-foreground">
                  Mêmes taux compétitifs qu'à Dakar, service personnalisé en plus
                </p>
              </div>
              <CurrencyConverter />
            </div>
          </section>

          {/* Regional Coverage */}
          <section className="py-16 bg-background">
            <div className="container">
              <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
                Nous Desservons Toute la Région
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Thiès", "Mbour", "Saly", "Joal", "Tivaouane", "Khombole", "Pout", "Kayar"].map((city) => (
                  <Card key={city}>
                    <CardContent className="p-4 text-center">
                      <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="font-medium text-foreground">{city}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                Livraison possible pour les montants supérieurs à 5 000 000 XOF
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary">
            <div className="container text-center">
              <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
                Visitez Notre Agence à Thiès
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Service personnalisé et taux compétitifs pour tous les habitants de la région
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

export default ChangeThies;
