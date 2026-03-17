import { Users, Target, Lightbulb, ShieldCheck, GraduationCap, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Nosso Objetivo",
    description:
      "Auxiliar usuários na organização, monitoramento e compreensão de sua vida financeira por meio de um dashboard interativo e informativo.",
  },
  {
    icon: Users,
    title: "Para Quem",
    description:
      "Jovens adultos e profissionais de 18 a 55 anos que buscam organizar melhor sua vida financeira, controlar gastos e planejar economias.",
  },
  {
    icon: Lightbulb,
    title: "Interface Intuitiva",
    description:
      "Dashboards visuais claros combinados com fluxos de inserção de dados simples, sem sobrecarregar o usuário com excesso de informações.",
  },
  {
    icon: ShieldCheck,
    title: "Calma e Segurança",
    description:
      "Nossa paleta verde-menta e neve transmite estabilidade, prosperidade e transparência — reduzindo a ansiedade comum em produtos financeiros.",
  },
  {
    icon: GraduationCap,
    title: "Base Acadêmica",
    description:
      "Projeto desenvolvido no Instituto Federal Fluminense como parte do curso de Engenharia da Computação, fundamentado nos princípios de Interação Humano-Computador.",
  },
  {
    icon: Heart,
    title: "Centrado no Usuário",
    description:
      "Cada etapa — dos requisitos à avaliação de usabilidade — foi construída com a participação de potenciais usuários para garantir uma solução eficiente e acessível.",
  },
];

export function About() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full">
            <span className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm font-medium text-foreground/80">
              Sobre o projeto
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Por que criamos o{" "}
            <span className="text-gradient">FinançasPro</span>?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Muitos indivíduos enfrentam dificuldades para gerenciar suas
            finanças pessoais — seja por falta de organização, desconhecimento
            sobre hábitos de consumo ou ausência de ferramentas adequadas. O{" "}
            <strong className="text-foreground">FinançasPro</strong> nasceu para
            transformar dados financeiros em um dashboard claro e objetivo,
            permitindo visualizar sua situação financeira de forma rápida e
            compreensível.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote / Mission */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <blockquote className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
            <p className="text-foreground font-medium italic leading-relaxed text-lg">
              "O nome FinançasPro deixa explícito o domínio financeiro e
              comunica eficiência e controle. O sufixo 'Pro' coloca o usuário no
              papel de protagonista, sugere evolução financeira e reforça a ideia
              de que o sistema ajuda a tomar decisões melhores."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Relatório de IHC, Instituto Federal Fluminense, 2025
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
