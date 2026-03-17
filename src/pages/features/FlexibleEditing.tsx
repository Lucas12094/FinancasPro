import { Link } from "react-router-dom";
import { Edit, ArrowLeft, Pencil, Trash2, RotateCcw, Lock, CheckCircle } from "lucide-react";

export default function FlexibleEditing() {
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
              <Edit className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">Edição Flexível</h1>
              <p className="text-muted-foreground">Edite ou exclua transações a qualquer momento</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Como funciona</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Todas as transações podem ser editadas ou excluídas a qualquer momento. 
              Cometeu um erro ao registrar? Sem problemas — altere o valor, categoria, data ou descrição com facilidade.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Pencil, title: "Editar Campos", desc: "Altere qualquer campo da transação: valor, data, categoria ou descrição." },
                { icon: Trash2, title: "Excluir com Segurança", desc: "Confirme antes de excluir para evitar remoções acidentais." },
                { icon: RotateCcw, title: "Histórico de Alterações", desc: "Saiba quando uma transação foi editada pela última vez." },
                { icon: Lock, title: "Permissões", desc: "Apenas o proprietário pode editar suas próprias transações." },
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
            <h2 className="font-display text-xl font-semibold mb-4">Benefícios</h2>
            <ul className="space-y-3">
              {[
                "Correção de erros sem complicação",
                "Interface intuitiva com edição inline",
                "Confirmação visual antes de excluir",
                "Dados sempre atualizados e consistentes",
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
