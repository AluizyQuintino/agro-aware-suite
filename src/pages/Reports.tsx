import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, FileText } from "lucide-react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-eco pb-20">
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">Relatórios</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-fade-in">
        <Card className="p-6 shadow-soft space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Período</label>
              <div className="flex gap-3">
                <input type="date" className="flex-1 px-3 py-2 rounded-md border border-input bg-background" />
                <input type="date" className="flex-1 px-3 py-2 rounded-md border border-input bg-background" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Área</label>
              <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                <option>Selecione uma área</option>
                <option>Área Norte</option>
                <option>Área Sul</option>
                <option>Área Leste</option>
              </select>
            </div>

            <Button className="w-full bg-gradient-primary hover:opacity-90">
              <FileText className="h-4 w-4 mr-2" />
              Gerar Relatório
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-center h-96 rounded-lg bg-muted/50 mb-4">
            <p className="text-muted-foreground">Prévia do Relatório</p>
          </div>
          <Button variant="outline" className="w-full">
            <FileDown className="h-4 w-4 mr-2" />
            Baixar PDF
          </Button>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Reports;
