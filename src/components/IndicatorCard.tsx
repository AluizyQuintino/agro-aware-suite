import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IndicatorCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  status: "good" | "warning" | "alert";
  className?: string;
}

export const IndicatorCard = ({ icon: Icon, title, value, status, className }: IndicatorCardProps) => {
  const statusColors = {
    good: "text-success",
    warning: "text-warning",
    alert: "text-destructive",
  };

  return (
    <Card className={cn(
      "p-4 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in",
      className
    )}>
      <div className="flex items-start gap-3">
        <div className={cn(
          "p-3 rounded-lg bg-gradient-primary",
          "flex items-center justify-center"
        )}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className={cn("text-2xl font-bold mt-1", statusColors[status])}>{value}</p>
        </div>
      </div>
    </Card>
  );
};
