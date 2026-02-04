import { ArrowDownLeft, ArrowUpRight, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

const mockTransactions: Transaction[] = [
  { id: "1", description: "Salário", category: "Renda", amount: 5000, type: "income", date: "2024-01-15" },
  { id: "2", description: "Supermercado Extra", category: "Alimentação", amount: 450.50, type: "expense", date: "2024-01-14" },
  { id: "3", description: "Netflix", category: "Assinaturas", amount: 39.90, type: "expense", date: "2024-01-13" },
  { id: "4", description: "Freelance Design", category: "Renda Extra", amount: 1200, type: "income", date: "2024-01-12" },
  { id: "5", description: "Uber", category: "Transporte", amount: 85.00, type: "expense", date: "2024-01-11" },
  { id: "6", description: "Conta de Luz", category: "Contas", amount: 180.00, type: "expense", date: "2024-01-10" },
];

export function TransactionList() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg">Transações Recentes</h3>
          <button className="text-sm text-mint-dark font-medium hover:underline">
            Ver todas
          </button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {mockTransactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                transaction.type === "income" 
                  ? "bg-success/15" 
                  : "bg-destructive/15"
              )}>
                {transaction.type === "income" ? (
                  <ArrowDownLeft className="w-5 h-5 text-success" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-destructive" />
                )}
              </div>
              <div>
                <p className="font-medium text-sm">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">{transaction.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className={cn(
                  "font-semibold text-sm",
                  transaction.type === "income" ? "text-success" : "text-destructive"
                )}>
                  {transaction.type === "income" ? "+" : "-"}{formatCurrency(transaction.amount)}
                </p>
                <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
              </div>
              <button className="p-1 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
