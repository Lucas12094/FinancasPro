import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { TransactionList } from "@/components/dashboard/TransactionList";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { MonthlyChart } from "@/components/dashboard/MonthlyChart";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { Wallet, TrendingUp, TrendingDown, PiggyBank, Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Bem-vindo de volta! Aqui está seu resumo financeiro.</p>
            </div>
            <button className="relative p-2 hover:bg-muted rounded-xl transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Saldo Atual"
              value="R$ 12.450,00"
              change="+12% este mês"
              changeType="positive"
              icon={Wallet}
              iconBg="bg-primary/15"
            />
            <StatsCard
              title="Receitas"
              value="R$ 8.500,00"
              change="+8% vs mês anterior"
              changeType="positive"
              icon={TrendingUp}
              iconBg="bg-success/15"
            />
            <StatsCard
              title="Despesas"
              value="R$ 5.200,00"
              change="-5% vs mês anterior"
              changeType="positive"
              icon={TrendingDown}
              iconBg="bg-destructive/15"
            />
            <StatsCard
              title="Economia"
              value="R$ 3.300,00"
              change="Meta: R$ 4.000"
              changeType="neutral"
              icon={PiggyBank}
              iconBg="bg-warning/15"
            />
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <MonthlyChart />
            <SpendingChart />
          </div>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TransactionList />
            </div>
            <AlertsCard />
          </div>
        </div>
      </main>
    </div>
  );
}
