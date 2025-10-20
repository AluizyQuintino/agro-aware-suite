import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  { 
    level: "severe", 
    icon: AlertTriangle, 
    title: "Nível Crítico de Água", 
    description: "Reservatório abaixo de 20%",
    time: "Há 15 minutos"
  },
  { 
    level: "warning", 
    icon: Info, 
    title: "Manutenção Preventiva", 
    description: "Sensor de solo requer calibração",
    time: "Há 2 horas"
  },
  { 
    level: "info", 
    icon: CheckCircle2, 
    title: "Análise Concluída", 
    description: "Relatório mensal disponível",
    time: "Há 1 dia"
  },
];

const Alerts = () => {
  return (
    <div className="min-h-screen bg-gradient-eco pb-20">
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">Alertas</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-4 animate-fade-in">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          const levelStyles = {
            severe: "border-destructive bg-destructive/5",
            warning: "border-warning bg-warning/5",
            info: "border-info bg-info/5",
          };
          
          return (
            <Card 
              key={index}
              className={cn(
                "p-4 shadow-soft border-l-4 transition-all",
                levelStyles[alert.level as keyof typeof levelStyles]
              )}
            >
              <div className="flex gap-4">
                <Icon className={cn(
                  "h-6 w-6 mt-1",
                  alert.level === "severe" && "text-destructive",
                  alert.level === "warning" && "text-warning",
                  alert.level === "info" && "text-info"
                )} />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{alert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                    <Button size="sm" variant="ghost">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Resolver
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </main>

      <Navigation />
    </div>
  );
};

export default Alerts;
