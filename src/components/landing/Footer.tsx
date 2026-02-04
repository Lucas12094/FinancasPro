import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-mint-dark to-success rounded-lg flex items-center justify-center">
              <Wallet className="w-4 h-4 text-snow" />
            </div>
            <span className="font-display font-bold text-lg">FinançasPro</span>
          </Link>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FinançasPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
