import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Sprout, Droplet, Leaf, Sun } from "lucide-react";

const practices = [
  { icon: Sprout, title: "Rotação de Culturas", status: "Recomendado" },
  { icon: Droplet, title: "Irrigação Eficiente", status: "Em Andamento" },
  { icon: Leaf, title: "Compostagem Orgânica", status: "Novo" },
  { icon: Sun, title: "Energia Solar", status: "Avaliação" },
];

const Practices = () => {
  return (
    <div className="min-h-screen bg-gradient-eco pb-20">
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">Práticas Sustentáveis</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-4 animate-fade-in">
        {practices.map((practice, index) => (
          <Card 
            key={index}
            className="p-4 shadow-soft hover:shadow-hover transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <practice.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.status}</p>
              </div>
              <div className="text-primary">›</div>
            </div>
          </Card>
        ))}

        <Card className="p-6 shadow-soft mt-6">
          <h3 className="font-semibold text-foreground mb-2">Biblioteca de Práticas</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Pesquise e filtre recomendações por tipo de cultivo
          </p>
          <input 
            type="text" 
            placeholder="Buscar práticas..."
            className="w-full px-4 py-2 rounded-md border border-input bg-background"
          />
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Practices;
