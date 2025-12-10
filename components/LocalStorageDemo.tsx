import React, { useState } from 'react';
import { Download, FileJson, Database, Save, Loader2, Search, Code, HardDrive, Cpu, Terminal, Wifi, Activity } from 'lucide-react';

export const LocalStorageDemo: React.FC = () => {
  const [inputText, setInputText] = useState("Exmo. Sr. Juiz de Direito,\n\nServe o presente para requerer a junção aos autos do parecer técnico nº 45/2024 referente à análise forense digital...");
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedJson, setGeneratedJson] = useState<string | null>(null);
  const [inspectorLog, setInspectorLog] = useState<string[]>([]);
  const [memoryUsage, setMemoryUsage] = useState(0);

  const addToLog = (msg: string) => {
    setInspectorLog(prev => [...prev, `[${new Date().toLocaleTimeString().split(' ')[0]}] ${msg}`]);
  };

  const handleSimulateProcess = () => {
    setIsProcessing(true);
    setGeneratedJson(null);
    setInspectorLog([]);
    setMemoryUsage(0);
    
    addToLog("INIT: HTTPS POST Request initiated");
    addToLog("HOST: generativelanguage.googleapis.com");
    addToLog("HEADER: Authorization: Bearer [REDACTED]");
    addToLog("HEADER: Content-Type: application/json");
    addToLog("PAYLOAD: Encrypting text stream (AES-GCM)...");

    // Simulate API delay sequence
    setTimeout(() => {
      addToLog("STATUS: TLS 1.3 Handshake Complete");
      addToLog("UPLOADING: 4.2KB transmitted to europe-west1");
    }, 600);

    setTimeout(() => {
      addToLog("SERVER: Processing in TPU v4 Pod (Volatile RAM)");
      addToLog("SERVER: Generating response tokens...");
    }, 1200);

    setTimeout(() => {
      addToLog("STATUS: 200 OK. Receiving response stream...");
      addToLog("DOWNLOAD: 1.8KB received");
    }, 2000);

    setTimeout(() => {
      addToLog("NETWORK: Connection Closed (FIN_ACK)");
      addToLog("CLIENT: Deserializing JSON object...");
      
      const data = {
        meta: {
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString(),
          sistema_origem: "Tribunal_Client_V1",
          classificacao: "Confidencial",
          processamento: "Volátil/RAM",
          conformidade: "RGPD/EU_Residency"
        },
        conteudo: {
          texto_original: inputText.substring(0, 50) + "...",
          analise_ia: "Análise processual simulada concluída. O documento refere-se a um requerimento de junção de prova pericial. Identificadas referências temporais e entidades legais."
        },
        auditoria: {
          hash_transacao: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
          regiao_processamento: "europe-west1"
        }
      };
      
      const jsonString = JSON.stringify(data, null, 2);
      setGeneratedJson(jsonString);
      setMemoryUsage(new Blob([jsonString]).size);
      addToLog(`MEMORY: Allocating Blob ${new Blob([jsonString]).size} bytes at blob:http://localhost...`);
      addToLog("READY: File prepared in Browser Memory.");
      setIsProcessing(false);
    }, 2800);
  };

  const downloadFile = () => {
    if (!generatedJson) return;
    
    addToLog("USER ACTION: Save to Disk");
    addToLog("SYSTEM: Transferring buffer from RAM to FileSystem...");
    
    const blob = new Blob([generatedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `processo_judicial_${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    addToLog("SUCCESS: File saved to local disk.");
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Laboratório de Simulação Forense</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Demonstração técnica em tempo real da criação local de ficheiros. Verifique os logs de rede para confirmar que a base de dados nunca é descarregada da nuvem, mas sim construída pelo seu navegador.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px]">
        
        {/* Painel 1: Entrada */}
        <div className="lg:col-span-1 flex flex-col">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg"><Code className="w-5 h-5 text-blue-600" /></div>
              <h3 className="font-bold text-slate-900">1. Input Seguro</h3>
            </div>
            <p className="text-xs text-slate-500 mb-3">Simule o texto de um documento judicial confidencial.</p>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full flex-1 p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none font-mono bg-slate-50 min-h-[200px]"
              placeholder="Insira texto processual..."
            />
            <button
              onClick={handleSimulateProcess}
              disabled={isProcessing}
              className="w-full mt-4 flex items-center justify-center space-x-2 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-70 font-medium text-sm shadow-md"
            >
              {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wifi className="w-4 h-4" />}
              <span>Iniciar Transação Segura</span>
            </button>
          </div>
        </div>

        {/* Painel 2: Inspetor Técnico (O "Hacker" View) */}
        <div className="lg:col-span-1 flex flex-col">
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-xl flex-1 flex flex-col relative overflow-hidden">
            {/* Glossy effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 blur-[80px] opacity-10 rounded-full pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700"><Terminal className="w-5 h-5 text-green-400" /></div>
                <h3 className="font-bold text-white tracking-wide">Network Inspector</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`}></div>
                <div className="text-[10px] text-slate-400 font-mono">LIVE</div>
              </div>
            </div>
            
            <div className="flex-1 bg-black/50 rounded-lg p-3 overflow-y-auto font-mono text-[11px] text-green-500 space-y-1.5 border border-slate-800 shadow-inner z-10 custom-scrollbar">
              {inspectorLog.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-slate-700 space-y-2">
                  <Activity className="w-8 h-8 opacity-20" />
                  <span>Aguardando tráfego de rede...</span>
                </div>
              )}
              {inspectorLog.map((log, i) => (
                <div key={i} className="break-all border-l-2 border-green-900/50 pl-2 hover:bg-white/5 transition-colors">
                  <span className="opacity-40 mr-2 select-none">{'>'}</span>{log}
                </div>
              ))}
              {isProcessing && <div className="animate-pulse pl-2">_</div>}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-xs z-10">
              <span className="text-slate-400">RAM Allocation:</span>
              <div className="flex items-center space-x-2">
                <div className="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 transition-all duration-500" style={{width: memoryUsage > 0 ? '60%' : '0%'}}></div>
                </div>
                <span className={`font-mono font-bold ${memoryUsage > 0 ? 'text-green-400' : 'text-slate-600'}`}>
                  {memoryUsage} B
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Painel 3: Resultado Local */}
        <div className="lg:col-span-1 flex flex-col">
          <div className={`bg-white p-5 rounded-xl border transition-all duration-500 flex-1 flex flex-col ${generatedJson ? 'border-green-300 shadow-lg ring-2 ring-green-50' : 'border-slate-200 opacity-80'}`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className={`p-2 rounded-lg ${generatedJson ? 'bg-green-100' : 'bg-slate-100'}`}>
                <HardDrive className={`w-5 h-5 ${generatedJson ? 'text-green-600' : 'text-slate-400'}`} />
              </div>
              <h3 className="font-bold text-slate-900">3. Persistência Local</h3>
            </div>
            
            <div className="flex-1 relative bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col">
               <div className="bg-slate-200 px-3 py-1.5 text-[10px] font-mono text-slate-600 flex justify-between border-b border-slate-300">
                 <span className="flex items-center"><FileJson className="w-3 h-3 mr-1"/> output_buffer.json</span>
                 <span>UTF-8</span>
               </div>
               <pre className="p-3 text-[10px] font-mono text-slate-700 overflow-auto flex-1">
                 {generatedJson || <span className="text-slate-400 italic">// O ficheiro ainda não existe no disco.\n// Aguardando conclusão do processamento...</span>}
               </pre>
            </div>

            <button
              onClick={downloadFile}
              disabled={!generatedJson}
              className={`w-full mt-4 flex items-center justify-center space-x-2 py-3 rounded-lg border font-bold text-sm transition-all shadow-sm ${
                generatedJson 
                  ? 'border-green-500 bg-green-600 text-white hover:bg-green-700 hover:shadow-md' 
                  : 'border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
            >
              <Save className="w-4 h-4" />
              <span>Gravar no Disco (C:)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};