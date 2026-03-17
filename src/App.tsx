import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ImportStatement from "./pages/ImportStatement";
import NotFound from "./pages/NotFound";
import ManualEntry from "./pages/features/ManualEntry";
import UploadStatement from "./pages/features/UploadStatement";
import VisualDashboard from "./pages/features/VisualDashboard";
import AutoCategorization from "./pages/features/AutoCategorization";
import SmartAlerts from "./pages/features/SmartAlerts";
import FlexibleEditing from "./pages/features/FlexibleEditing";
import ExportReports from "./pages/features/ExportReports";
import AdvancedFilters from "./pages/features/AdvancedFilters";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/import" element={<ImportStatement />} />
          <Route path="/features/manual-entry" element={<ManualEntry />} />
          <Route path="/features/upload" element={<UploadStatement />} />
          <Route path="/features/dashboard" element={<VisualDashboard />} />
          <Route path="/features/categorization" element={<AutoCategorization />} />
          <Route path="/features/alerts" element={<SmartAlerts />} />
          <Route path="/features/editing" element={<FlexibleEditing />} />
          <Route path="/features/export" element={<ExportReports />} />
          <Route path="/features/filters" element={<AdvancedFilters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
