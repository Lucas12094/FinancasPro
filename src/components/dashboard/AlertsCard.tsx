import { AlertTriangle, TrendingUp, Target, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "warning" | "info" | "success";
  title: string;
  description: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    title: "Gastos elevados em Alimentação",
    description: "Você já gastou 85% do orçamento mensal nesta categoria."
  },
  {
    id: "2",
    type: "info",
    title: "Meta de economia",
    description: "Faltam R$ 500 para atingir sua meta de poupança."
  },
  {
    id: "3",
    type: "success",
    title: "Receita acima da média",
    description: "Suas receitas estão 15% acima do mês anterior."
  }
];

const alertConfig = {
  warning: {
    icon: AlertTriangle,
    bg: "bg-warning/10",
    iconColor: "text-warning"
  },
  info: {
    icon: Target,
    bg: "bg-primary/10",
    iconColor: "text-mint-dark"
  },
  success: {
    icon: TrendingUp,
    bg: "bg-success/10",
    iconColor: "text-success"
  }
};

export function AlertsCard() {
  return (
    <div className="bg-card rounded-2xl shadow-soft p-6">
      <h3 className="font-display font-semibold text-lg mb-4">Alertas</h3>
      
      <div className="space-y-3">
        {alerts.map((alert) => {
          const config = alertConfig[alert.type];
          const Icon = config.icon;
          
          return (
            <div 
              key={alert.id}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl",
                config.bg
              )}
            >
              <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", config.iconColor)} />
              <div>
                <p className="text-sm font-medium">{alert.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{alert.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
