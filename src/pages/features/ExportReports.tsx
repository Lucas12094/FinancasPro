import { Link } from "react-router-dom";
import { Download, ArrowLeft, FileText, FileSpreadsheet, Printer, Share2, CheckCircle } from "lucide-react";

export default function ExportReports() {
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
              <Download className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">Exportar Relatórios</h1>
              <p className="text-muted-foreground">Exporte seus dados financeiros em PDF ou CSV</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Como funciona</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gere relatórios detalhados das suas finanças e exporte-os nos formatos PDF ou CSV. 
              Ideal para compartilhar com seu contador, analisar em planilhas ou manter backups dos seus dados.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, title: "Relatório PDF", desc: "Documento formatado e pronto para impressão ou compartilhamento." },
                { icon: FileSpreadsheet, title: "Planilha CSV", desc: "Dados estruturados para análise em Excel ou Google Sheets." },
                { icon: Printer, title: "Pronto para Imprimir", desc: "Layout otimizado para impressão com cabeçalho e resumos." },
                { icon: Share2, title: "Compartilhável", desc: "Envie relatórios por e-mail ou salve em nuvem." },
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
            <h2 className="font-display text-xl font-semibold mb-4">O que inclui</h2>
            <ul className="space-y-3">
              {[
                "Resumo de receitas e despesas por período",
                "Detalhamento por categoria com percentuais",
                "Gráficos incluídos no relatório PDF",
                "Filtros aplicáveis antes da exportação",
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
