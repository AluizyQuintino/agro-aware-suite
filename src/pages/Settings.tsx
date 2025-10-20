import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Moon, Globe, Cloud } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-eco pb-20">
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">Configurações</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-fade-in">
        <Card className="p-6 shadow-soft space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <User className="h-5 w-5" />
            Perfil Profissional
          </h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Nome</label>
              <input type="text" placeholder="Seu nome completo" className="w-full px-3 py-2 rounded-md border border-input bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Registro CREA</label>
              <input type="text" placeholder="Número do registro" className="w-full px-3 py-2 rounded-md border border-input bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Empresa</label>
              <input type="text" placeholder="Nome da empresa" className="w-full px-3 py-2 rounded-md border border-input bg-background" />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-soft space-y-4">
          <h3 className="font-semibold text-foreground">Preferências</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Tema Escuro</span>
            </div>
            <Button variant="outline" size="sm">Toggle</Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Idioma</span>
            </div>
            <select className="px-3 py-1 text-sm rounded-md border border-input bg-background">
              <option>Português</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Sincronização</span>
            </div>
            <Button variant="outline" size="sm">Ativada</Button>
          </div>
        </Card>

        <Button className="w-full bg-gradient-primary hover:opacity-90">
          Salvar Configurações
        </Button>
      </main>

      <Navigation />
    </div>
  );
};

export default Settings;
