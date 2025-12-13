import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurrencyConverter from "@/components/CurrencyConverter";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Converter Section */}
        <section id="convertisseur" className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Calculatrice de Change
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                Convertissez Vos Devises Instantanément
              </h2>
              <p className="text-muted-foreground">
                Utilisez notre convertisseur pour estimer vos opérations de change. 
                Pour les taux exacts et les grosses transactions, contactez-nous directement.
              </p>
            </div>
            <CurrencyConverter />
          </div>
        </section>
        
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
