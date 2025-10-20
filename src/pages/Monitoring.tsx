import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Radio, Upload } from "lucide-react";
import monitoringGraphs from "@/assets/monitoring-graphs.jpg";
import monitoringMap from "@/assets/monitoring-map.jpg";

const Monitoring = () => {
  return (
    <div className="min-h-screen bg-gradient-eco pb-20">
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">Monitoramento Ambiental</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-fade-in">
        <Card className="p-6 shadow-soft overflow-hidden">
          <img 
            src={monitoringGraphs} 
            alt="Gráficos de monitoramento em tempo real" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-primary hover:opacity-90">
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar Dados
            </Button>
            <Button variant="outline">
              <Radio className="h-4 w-4 mr-2" />
              Ver Sensores
            </Button>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Importar Dados
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-soft overflow-hidden">
          <img 
            src={monitoringMap} 
            alt="Mapa detalhado com zoom e áreas críticas marcadas" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Monitoring;
