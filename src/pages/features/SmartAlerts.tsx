import { Link } from "react-router-dom";
import { Bell, ArrowLeft, AlertTriangle, Target, TrendingDown, Clock, CheckCircle } from "lucide-react";

export default function SmartAlerts() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link to="/#features" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar às funcionalidades
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center">
              <Bell className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">Alertas Inteligentes</h1>
              <p className="text-muted-foreground">Notificações sobre gastos excessivos e metas</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Como funciona</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O sistema monitora seus gastos e compara com seus limites e metas definidas. 
              Quando detecta um padrão preocupante ou um limite ultrapassado, você recebe um alerta visual no dashboard.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: AlertTriangle, title: "Gastos Excessivos", desc: "Aviso quando uma categoria ultrapassa o limite definido." },
                { icon: Target, title: "Metas de Economia", desc: "Acompanhe o progresso e receba alertas sobre suas metas." },
                { icon: TrendingDown, title: "Padrões Negativos", desc: "Detecção de tendências de aumento de gastos." },
                { icon: Clock, title: "Lembretes", desc: "Alertas para contas a pagar e compromissos financeiros." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                  <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <h2 className="font-display text-xl font-semibold mb-4">Tipos de Alertas</h2>
            <ul className="space-y-3">
              {[
                "Gasto acima da média em categorias específicas",
                "Meta de economia mensal não atingida",
                "Aumento percentual em relação ao mês anterior",
                "Contas próximas do vencimento",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
