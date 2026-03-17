import { Link } from "react-router-dom";
import { PieChart, ArrowLeft, BarChart3, TrendingUp, Wallet, Eye, CheckCircle } from "lucide-react";

export default function VisualDashboard() {
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
              <PieChart className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">Dashboard Visual</h1>
              <p className="text-muted-foreground">Visualize sua saúde financeira com gráficos claros e interativos</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Como funciona</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O dashboard apresenta uma visão consolidada das suas finanças com gráficos de pizza, barras e linhas. 
              Acompanhe gastos por categoria, evolução mensal de receitas e despesas, e tenha uma visão clara do seu saldo atual.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: PieChart, title: "Gastos por Categoria", desc: "Gráfico de pizza mostrando a distribuição dos seus gastos." },
                { icon: BarChart3, title: "Evolução Mensal", desc: "Compare receitas e despesas mês a mês com gráficos de barras." },
                { icon: TrendingUp, title: "Tendências", desc: "Identifique padrões de consumo ao longo do tempo." },
                { icon: Wallet, title: "Saldo em Destaque", desc: "Veja seu saldo atual e a variação em relação ao mês anterior." },
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
            <h2 className="font-display text-xl font-semibold mb-4">Recursos Visuais</h2>
            <ul className="space-y-3">
              {[
                "Gráficos interativos com detalhes ao passar o mouse",
                "Cards de resumo com variação percentual",
                "Lista de transações recentes integrada",
                "Alertas visuais para gastos acima da média",
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
