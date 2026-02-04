import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, LogIn } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-mint-dark to-success rounded-xl flex items-center justify-center shadow-soft">
            <Wallet className="w-5 h-5 text-snow" />
          </div>
          <span className="font-display font-bold text-xl">FinançasPro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/auth">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
            </Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/auth?mode=signup">
              Criar Conta
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
