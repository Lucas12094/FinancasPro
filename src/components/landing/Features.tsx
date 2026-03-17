import { Link } from "react-router-dom";
import { 
  Upload, 
  PenLine, 
  PieChart, 
  Bell, 
  Download, 
  Filter,
  Sparkles,
  Edit,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Inserção Manual",
    description: "Adicione receitas e despesas facilmente com categoria, valor, data e descrição.",
    href: "/features/manual-entry"
  },
  {
    icon: Upload,
    title: "Upload de Extrato",
    description: "Importe extratos bancários em PDF ou CSV e tenha seus dados processados automaticamente.",
    href: "/features/upload"
  },
  {
    icon: PieChart,
    title: "Dashboard Visual",
    description: "Visualize gráficos claros de gastos por categoria, saldo mensal e histórico completo.",
    href: "/features/dashboard"
  },
  {
    icon: Sparkles,
    title: "Categorização Automática",
    description: "Sugestões inteligentes de categorias baseadas no seu histórico e descrições.",
    href: "/features/categorization"
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Receba notificações sobre gastos excessivos e metas não cumpridas.",
    href: "/features/alerts"
  },
  {
    icon: Edit,
    title: "Edição Flexível",
    description: "Edite ou exclua transações a qualquer momento com facilidade.",
    href: "/features/editing"
  },
  {
    icon: Download,
    title: "Exportar Relatórios",
    description: "Exporte seus dados financeiros em PDF ou CSV quando precisar.",
    href: "/features/export"
  },
  {
    icon: Filter,
    title: "Filtros Avançados",
    description: "Filtre transações por período, categoria ou tipo de transação.",
    href: "/features/filters"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/15 rounded-full text-sm font-medium">
            Funcionalidades
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Tudo que você precisa para{" "}
            <span className="text-gradient">controlar suas finanças</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas poderosas e intuitivas para você ter o controle total da sua vida financeira.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              to={feature.href}
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <feature.icon className="w-6 h-6 text-mint-dark" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground group-hover:gap-2 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
