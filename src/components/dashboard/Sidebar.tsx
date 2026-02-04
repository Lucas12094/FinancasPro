import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Receipt, 
  Upload, 
  PieChart, 
  Bell, 
  Settings,
  LogOut,
  Wallet,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Receipt, label: "Transações", href: "/dashboard/transactions" },
  { icon: Upload, label: "Importar Extrato", href: "/dashboard/import" },
  { icon: PieChart, label: "Relatórios", href: "/dashboard/reports" },
  { icon: Bell, label: "Alertas", href: "/dashboard/alerts" },
  { icon: Settings, label: "Configurações", href: "/dashboard/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-mint-dark to-success rounded-xl flex items-center justify-center shadow-soft">
            <Wallet className="w-5 h-5 text-snow" />
          </div>
          <span className="font-display font-bold text-xl">FinançasPro</span>
        </Link>
      </div>

      {/* Quick Action */}
      <div className="p-4">
        <Button variant="hero" className="w-full" asChild>
          <Link to="/dashboard/transactions?add=true">
            <Plus className="w-4 h-4 mr-2" />
            Nova Transação
          </Link>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/15 text-mint-dark"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", isActive && "text-mint-dark")} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </div>
    </aside>
  );
}
