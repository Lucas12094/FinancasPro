import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", receitas: 4500, despesas: 3200 },
  { month: "Fev", receitas: 5200, despesas: 3800 },
  { month: "Mar", receitas: 4800, despesas: 4100 },
  { month: "Abr", receitas: 5500, despesas: 3600 },
  { month: "Mai", receitas: 6000, despesas: 4200 },
  { month: "Jun", receitas: 5800, despesas: 3900 },
];

export function MonthlyChart() {
  return (
    <div className="bg-card rounded-2xl shadow-soft p-6">
      <h3 className="font-display font-semibold text-lg mb-6">Evolução Mensal</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(145, 65%, 42%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(145, 65%, 42%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `R$${value / 1000}k`}
            />
            <Tooltip 
              formatter={(value: number) => 
                new Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(value)
              }
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-soft)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="receitas" 
              stroke="hsl(145, 65%, 42%)" 
              fillOpacity={1}
              fill="url(#colorReceitas)"
              strokeWidth={2}
              name="Receitas"
            />
            <Area 
              type="monotone" 
              dataKey="despesas" 
              stroke="hsl(0, 72%, 55%)" 
              fillOpacity={1}
              fill="url(#colorDespesas)"
              strokeWidth={2}
              name="Despesas"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">Receitas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Despesas</span>
        </div>
      </div>
    </div>
  );
}
