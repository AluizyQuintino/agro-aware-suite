import { useNavigate, useLocation } from "react-router-dom";
import { Activity, FileText, Sprout, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Activity, label: "Monitorar", path: "/monitoring" },
  { icon: FileText, label: "Relatórios", path: "/reports" },
  { icon: Sprout, label: "Práticas", path: "/practices" },
  { icon: Bell, label: "Alertas", path: "/alerts" },
  { icon: Settings, label: "Config", path: "/settings" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center py-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Button
                key={path}
                variant="ghost"
                onClick={() => navigate(path)}
                className={cn(
                  "flex flex-col items-center gap-1 h-auto py-2 px-3 transition-all",
                  isActive && "text-primary"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "animate-scale-in")} />
                <span className="text-xs font-medium">{label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
