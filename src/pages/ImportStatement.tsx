import { useState, useCallback } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Upload, FileText, CheckCircle, AlertCircle, File, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function ImportStatement() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = ['application/pdf', 'text/csv', 'application/vnd.ms-excel'];
    if (!validTypes.includes(file.type) && !file.name.endsWith('.csv')) {
      toast.error("Formato não suportado. Use PDF ou CSV.");
      return;
    }
    setUploadedFile(file);
    setIsComplete(false);
  };

  const handleProcess = async () => {
    if (!uploadedFile) return;

    setIsProcessing(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setIsComplete(true);
    toast.success("Extrato processado! 24 transações importadas.");
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setIsComplete(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-64">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold">Importar Extrato</h1>
            <p className="text-muted-foreground">
              Faça upload do seu extrato bancário em PDF ou CSV para importar suas transações automaticamente.
            </p>
          </div>

          <div className="max-w-2xl">
            {/* Upload Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "relative border-2 border-dashed rounded-2xl p-12 transition-all duration-200 text-center",
                isDragging
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-border hover:border-primary/50 hover:bg-muted/30",
                uploadedFile && "bg-muted/30"
              )}
            >
              {!uploadedFile ? (
                <>
                  <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-mint-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Arraste seu extrato aqui
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    ou clique para selecionar um arquivo
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Formatos aceitos: PDF, CSV (máx. 10MB)
                  </p>
                  
                  <input
                    type="file"
                    accept=".pdf,.csv"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      isComplete ? "bg-success/15" : "bg-primary/15"
                    )}>
                      {isComplete ? (
                        <CheckCircle className="w-6 h-6 text-success" />
                      ) : (
                        <FileText className="w-6 h-6 text-mint-dark" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024).toFixed(1)} KB
                        {isComplete && " • 24 transações encontradas"}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleRemoveFile}
                    className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Action Button */}
            {uploadedFile && !isComplete && (
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full mt-6"
                onClick={handleProcess}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-snow/30 border-t-snow rounded-full animate-spin mr-2" />
                    Processando...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 mr-2" />
                    Processar Extrato
                  </>
                )}
              </Button>
            )}

            {isComplete && (
              <div className="mt-6 p-4 bg-success/10 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-success">Importação concluída!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      24 transações foram importadas e categorizadas automaticamente.
                      Você pode revisar e editar na página de Transações.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Supported Banks */}
            <div className="mt-12">
              <h3 className="font-display font-semibold mb-4">Bancos Suportados</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Nubank", "Itaú", "Bradesco", "Banco do Brasil", "Santander", "Caixa", "Inter", "C6 Bank"].map((bank) => (
                  <div
                    key={bank}
                    className="bg-card rounded-xl p-4 text-center shadow-soft"
                  >
                    <p className="text-sm font-medium">{bank}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Como exportar seu extrato?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Acesse o app ou site do seu banco, vá em "Extrato" ou "Histórico", 
                    e procure pela opção de exportar em PDF ou CSV. Cada banco tem um processo diferente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
