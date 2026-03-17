import { ArrowRight, PieChart, Upload, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-light via-background to-secondary/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-mint/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Controle financeiro simplificado
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Suas finanças em{" "}
              <span className="text-gradient">um só lugar</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Importe seus extratos ou insira manualmente suas transações. 
              Visualize dashboards claros e tome o controle da sua vida financeira.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/auth?mode=signup">
                  Começar Grátis
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/auth">
                  Já tenho conta
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold font-display text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Gratuito</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-foreground">Seguro</p>
                <p className="text-sm text-muted-foreground">Seus dados protegidos</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-foreground">Fácil</p>
                <p className="text-sm text-muted-foreground">Interface intuitiva</p>
              </div>
            </div>
          </div>

          {/* Visual Cards */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-mint to-mint-light rounded-3xl rotate-6 opacity-50" />
            
            {/* Main Card */}
            <div className="relative bg-card rounded-3xl shadow-elevated p-6 space-y-6 animate-scale-in">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg">Resumo Financeiro</h3>
                <span className="text-sm text-muted-foreground">Janeiro 2024</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-success/10 rounded-2xl p-4">
                  <TrendingUp className="w-6 h-6 text-success mb-2" />
                  <p className="text-sm text-muted-foreground">Receitas</p>
                  <p className="text-xl font-bold font-display text-success">R$ 8.500</p>
                </div>
                <div className="bg-destructive/10 rounded-2xl p-4">
                  <TrendingUp className="w-6 h-6 text-destructive mb-2 rotate-180" />
                  <p className="text-sm text-muted-foreground">Despesas</p>
                  <p className="text-xl font-bold font-display text-destructive">R$ 5.200</p>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-muted rounded-2xl p-4 flex items-center justify-center h-32">
                <PieChart className="w-16 h-16 text-primary/50" />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-card p-4 animate-float" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Upload className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Extrato importado</p>
                  <p className="text-xs text-muted-foreground">32 transações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
