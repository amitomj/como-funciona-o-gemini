
// A funcionalidade de geração de PDF foi migrada para usar o motor de impressão nativo do browser (window.print).
// Isto garante maior compatibilidade com redes governamentais/restritas.
// Consulte App.tsx e components/PrintableReport.tsx.

export const generateReport = async (): Promise<boolean> => {
  return true; 
};
