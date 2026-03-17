import { Link } from "react-router-dom";
import { Filter, ArrowLeft, Calendar, Tag, ArrowUpDown, Search, CheckCircle } from "lucide-react";

export default function AdvancedFilters() {
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
              <Filter className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">Filtros Avançados</h1>
              <p className="text-muted-foreground">Encontre qualquer transação com filtros precisos</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Como funciona</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utilize filtros combinados para encontrar exatamente o que procura. 
              Filtre por período, categoria, tipo de transação ou busque por palavras-chave na descrição.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Calendar, title: "Filtro por Período", desc: "Selecione datas específicas ou intervalos predefinidos." },
                { icon: Tag, title: "Filtro por Categoria", desc: "Isole transações de categorias específicas." },
                { icon: ArrowUpDown, title: "Tipo de Transação", desc: "Veja apenas receitas, apenas despesas ou ambas." },
                { icon: Search, title: "Busca por Texto", desc: "Pesquise na descrição das transações por palavras-chave." },
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
            <h2 className="font-display text-xl font-semibold mb-4">Recursos</h2>
            <ul className="space-y-3">
              {[
                "Filtros combináveis para buscas precisas",
                "Resultados atualizados em tempo real",
                "Ordenação por data, valor ou categoria",
                "Exportar resultados filtrados diretamente",
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
