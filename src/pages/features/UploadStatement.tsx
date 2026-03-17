import { Link } from "react-router-dom";
import { Upload, ArrowLeft, FileUp, FileSpreadsheet, Zap, ShieldCheck, CheckCircle } from "lucide-react";

export default function UploadStatement() {
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
              <Upload className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">Upload de Extrato</h1>
              <p className="text-muted-foreground">Importe extratos bancários em PDF ou CSV automaticamente</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Como funciona</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Basta enviar o extrato do seu banco no formato PDF ou CSV. O sistema processa automaticamente todas as transações, 
              identificando valores, datas e descrições para agilizar sua organização financeira.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: FileUp, title: "Arraste e Solte", desc: "Envie seus arquivos arrastando-os diretamente para a área de upload." },
                { icon: FileSpreadsheet, title: "PDF e CSV", desc: "Compatível com os formatos mais comuns de extratos bancários." },
                { icon: Zap, title: "Processamento Rápido", desc: "Transações são identificadas e categorizadas em segundos." },
                { icon: ShieldCheck, title: "Dados Seguros", desc: "Seus arquivos são processados com segurança e privacidade." },
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
            <h2 className="font-display text-xl font-semibold mb-4">Bancos Suportados</h2>
            <ul className="space-y-3">
              {[
                "Nubank, Itaú, Bradesco, Banco do Brasil e outros",
                "Extratos em formato OFX, CSV e PDF",
                "Identificação automática do layout do banco",
                "Validação de dados antes da importação",
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
