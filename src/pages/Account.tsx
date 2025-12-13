import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useTransactions } from "@/hooks/useTransactions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Trophy, 
  History, 
  Star, 
  TrendingUp,
  Gift,
  Crown
} from "lucide-react";

const Account = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: transactions, isLoading: transactionsLoading } = useTransactions();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) return null;

  const loyaltyLevel = profile?.loyalty_points && profile.loyalty_points >= 1000 
    ? "VIP" 
    : profile?.loyalty_points && profile.loyalty_points >= 500 
      ? "Gold" 
      : "Standard";

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">
                Mon Espace Client
              </h1>
              <p className="text-muted-foreground">
                Bienvenue, {profile?.full_name || user.email}
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              Déconnexion
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Points Fidélité
                </CardTitle>
                <Trophy className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {profile?.loyalty_points || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  1 point = 100 XOF d'échange
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Niveau Fidélité
                </CardTitle>
                <Crown className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <Badge 
                  variant={loyaltyLevel === "VIP" ? "default" : "secondary"}
                  className="text-lg px-3 py-1"
                >
                  {loyaltyLevel === "VIP" && <Star className="h-4 w-4 mr-1" />}
                  {loyaltyLevel}
                </Badge>
                <p className="text-xs text-muted-foreground mt-2">
                  {loyaltyLevel === "VIP" 
                    ? "Taux préférentiels activés" 
                    : `${500 - (profile?.loyalty_points || 0)} points pour Gold`}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Transactions
                </CardTitle>
                <TrendingUp className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {transactions?.length || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  Opérations effectuées
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Loyalty Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                Programme de Fidélité
              </CardTitle>
              <CardDescription>
                Gagnez des points à chaque opération de change
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Standard</span>
                  <span>Gold (500 pts)</span>
                  <span>VIP (1000 pts)</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ 
                      width: `${Math.min((profile?.loyalty_points || 0) / 10, 100)}%` 
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">Standard</h4>
                    <p className="text-sm text-muted-foreground">Taux standards</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">Gold</h4>
                    <p className="text-sm text-muted-foreground">-0.2% sur les frais</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground">VIP</h4>
                    <p className="text-sm text-muted-foreground">-0.5% + priorité</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="transactions">
            <TabsList>
              <TabsTrigger value="transactions" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                Historique
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profil
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Historique des transactions</CardTitle>
                  <CardDescription>
                    Toutes vos opérations de change
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {transactionsLoading ? (
                    <p className="text-muted-foreground">Chargement...</p>
                  ) : transactions && transactions.length > 0 ? (
                    <div className="space-y-4">
                      {transactions.map((tx) => (
                        <div
                          key={tx.id}
                          className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-secondary/30 rounded-lg gap-4"
                        >
                          <div>
                            <p className="font-semibold text-foreground">
                              {formatNumber(tx.amount)} {tx.from_currency} → {formatNumber(tx.converted_amount)} {tx.to_currency}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Taux: {tx.exchange_rate} | Frais: {formatNumber(tx.fees)} XOF
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">
                              +{tx.points_earned} pts
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {formatDate(tx.created_at)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Aucune transaction pour le moment
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations du profil</CardTitle>
                  <CardDescription>
                    Vos informations personnelles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Nom complet</p>
                        <p className="font-medium text-foreground">
                          {profile?.full_name || "Non renseigné"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Téléphone</p>
                        <p className="font-medium text-foreground">
                          {profile?.phone || "Non renseigné"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Devise préférée</p>
                        <p className="font-medium text-foreground">
                          {profile?.preferred_currency || "EUR"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Membre depuis</p>
                        <p className="font-medium text-foreground">
                          {profile?.created_at 
                            ? new Date(profile.created_at).toLocaleDateString("fr-FR")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
