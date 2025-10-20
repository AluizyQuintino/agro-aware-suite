import { Navigation } from "@/components/Navigation";
import { IndicatorCard } from "@/components/IndicatorCard";
import { Leaf, Droplets, Flame, CloudRain } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-eco pb-20">
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-gradient-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary">AgroAware</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="animate-fade-in">
          <h2 className="text-xl font-semibold text-foreground mb-4">Dashboard</h2>
          
          <Card className="p-6 mb-6 shadow-soft bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50">
              <p className="text-muted-foreground">Mapa Interativo</p>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <IndicatorCard
              icon={Leaf}
              title="Uso do Solo"
              value="78%"
              status="good"
            />
            <IndicatorCard
              icon={Droplets}
              title="Qualidade da Água"
              value="85%"
              status="good"
            />
            <IndicatorCard
              icon={Flame}
              title="Risco de Queimadas"
              value="Médio"
              status="warning"
            />
            <IndicatorCard
              icon={CloudRain}
              title="Emissões CO₂"
              value="450kg"
              status="alert"
            />
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Dashboard;
