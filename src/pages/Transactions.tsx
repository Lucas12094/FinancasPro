import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowDownLeft, 
  ArrowUpRight, 
  MoreVertical,
  X,
  Calendar,
  Tag,
  DollarSign,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

const categories = [
  "Alimentação",
  "Transporte",
  "Moradia",
  "Saúde",
  "Educação",
  "Lazer",
  "Assinaturas",
  "Contas",
  "Renda",
  "Renda Extra",
  "Outros"
];

const initialTransactions: Transaction[] = [
  { id: "1", description: "Salário", category: "Renda", amount: 5000, type: "income", date: "2024-01-15" },
  { id: "2", description: "Supermercado Extra", category: "Alimentação", amount: 450.50, type: "expense", date: "2024-01-14" },
  { id: "3", description: "Netflix", category: "Assinaturas", amount: 39.90, type: "expense", date: "2024-01-13" },
  { id: "4", description: "Freelance Design", category: "Renda Extra", amount: 1200, type: "income", date: "2024-01-12" },
  { id: "5", description: "Uber", category: "Transporte", amount: 85.00, type: "expense", date: "2024-01-11" },
  { id: "6", description: "Conta de Luz", category: "Contas", amount: 180.00, type: "expense", date: "2024-01-10" },
  { id: "7", description: "Academia", category: "Saúde", amount: 120.00, type: "expense", date: "2024-01-09" },
  { id: "8", description: "Aluguel", category: "Moradia", amount: 1500.00, type: "expense", date: "2024-01-05" },
];

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [isAddOpen, setIsAddOpen] = useState(false);
  
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    category: "",
    amount: "",
    type: "expense" as "income" | "expense",
    date: new Date().toISOString().split("T")[0]
  });

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || t.category === filterCategory;
    const matchesType = filterType === "all" || t.type === filterType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const handleAddTransaction = () => {
    if (!newTransaction.description || !newTransaction.category || !newTransaction.amount) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      description: newTransaction.description,
      category: newTransaction.category,
      amount: parseFloat(newTransaction.amount),
      type: newTransaction.type,
      date: newTransaction.date
    };

    setTransactions([transaction, ...transactions]);
    setNewTransaction({
      description: "",
      category: "",
      amount: "",
      type: "expense",
      date: new Date().toISOString().split("T")[0]
    });
    setIsAddOpen(false);
    toast.success("Transação adicionada com sucesso!");
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
    toast.success("Transação excluída.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl font-bold">Transações</h1>
              <p className="text-muted-foreground">Gerencie suas receitas e despesas.</p>
            </div>
            
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button variant="hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Transação
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">Adicionar Transação</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  {/* Type Toggle */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setNewTransaction(prev => ({ ...prev, type: "expense" }))}
                      className={cn(
                        "flex-1 py-3 rounded-xl font-medium text-sm transition-all",
                        newTransaction.type === "expense"
                          ? "bg-destructive/15 text-destructive border-2 border-destructive"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      Despesa
                    </button>
                    <button
                      onClick={() => setNewTransaction(prev => ({ ...prev, type: "income" }))}
                      className={cn(
                        "flex-1 py-3 rounded-xl font-medium text-sm transition-all",
                        newTransaction.type === "income"
                          ? "bg-success/15 text-success border-2 border-success"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      Receita
                    </button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="description"
                        placeholder="Ex: Supermercado"
                        className="pl-10"
                        value={newTransaction.description}
                        onChange={(e) => setNewTransaction(prev => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Valor</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0,00"
                        className="pl-10"
                        value={newTransaction.amount}
                        onChange={(e) => setNewTransaction(prev => ({ ...prev, amount: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select
                      value={newTransaction.category}
                      onValueChange={(value) => setNewTransaction(prev => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Data</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        className="pl-10"
                        value={newTransaction.date}
                        onChange={(e) => setNewTransaction(prev => ({ ...prev, date: e.target.value }))}
                      />
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full mt-4"
                    onClick={handleAddTransaction}
                  >
                    Adicionar Transação
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar transações..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[180px]">
                <Tag className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas categorias</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[150px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="income">Receitas</SelectItem>
                <SelectItem value="expense">Despesas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Transactions Table */}
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium text-muted-foreground text-sm">Descrição</th>
                    <th className="text-left p-4 font-medium text-muted-foreground text-sm">Categoria</th>
                    <th className="text-left p-4 font-medium text-muted-foreground text-sm">Data</th>
                    <th className="text-right p-4 font-medium text-muted-foreground text-sm">Valor</th>
                    <th className="text-right p-4 font-medium text-muted-foreground text-sm">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr 
                      key={transaction.id}
                      className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            transaction.type === "income" 
                              ? "bg-success/15" 
                              : "bg-destructive/15"
                          )}>
                            {transaction.type === "income" ? (
                              <ArrowDownLeft className="w-4 h-4 text-success" />
                            ) : (
                              <ArrowUpRight className="w-4 h-4 text-destructive" />
                            )}
                          </div>
                          <span className="font-medium text-sm">{transaction.description}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex px-3 py-1 bg-muted rounded-full text-xs font-medium">
                          {transaction.category}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {formatDate(transaction.date)}
                      </td>
                      <td className="p-4 text-right">
                        <span className={cn(
                          "font-semibold",
                          transaction.type === "income" ? "text-success" : "text-destructive"
                        )}>
                          {transaction.type === "income" ? "+" : "-"}{formatCurrency(transaction.amount)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDeleteTransaction(transaction.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-muted-foreground">Nenhuma transação encontrada.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
