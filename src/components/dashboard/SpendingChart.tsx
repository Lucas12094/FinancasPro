import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Alimentação", value: 1200, color: "hsl(128, 58%, 75%)" },
  { name: "Transporte", value: 450, color: "hsl(145, 55%, 65%)" },
  { name: "Assinaturas", value: 250, color: "hsl(160, 50%, 55%)" },
  { name: "Contas", value: 600, color: "hsl(175, 45%, 50%)" },
  { name: "Lazer", value: 380, color: "hsl(190, 40%, 60%)" },
  { name: "Outros", value: 320, color: "hsl(200, 35%, 70%)" },
];

export function SpendingChart() {
  return (
    <div className="bg-card rounded-2xl shadow-soft p-6">
      <h3 className="font-display font-semibold text-lg mb-6">Gastos por Categoria</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
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
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
