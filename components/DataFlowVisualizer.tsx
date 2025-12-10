import React, { useState, useEffect } from 'react';
import { Monitor, Cloud, Server, ArrowRight, FileJson, Cpu, Lock, ShieldCheck, Binary, Network, Database } from 'lucide-react';

export const DataFlowVisualizer: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(true);

  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setTimeout(() => {
        if (step < 4) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 5000); // Increased time for reading technical details
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const reset = () => {
    setStep(0);
    setIsPlaying(true);
  };

  const stepsInfo = [
    {
      title: "Estado de Repouso (Data at Rest)",
      simple: "Os seus ficheiros e dados residem no seu computador local. Nada foi enviado ainda.",
      technical: "Os dados estão encriptados no disco local do cliente (Client-side Encryption). A aplicação React foi carregada na memória do navegador, mas nenhuma conexão de socket externa foi iniciada. O estado é 'Air-gapped' virtualmente até à ação explícita do utilizador via HTTPS."
    },
    {
      title: "Passo 1: Transmissão Segura (Data in Transit)",
      simple: "A app cria um túnel seguro e envia o pedido para a Google.",
      technical: "1. Handshake TLS 1.3 (Transport Layer Security) estabelecido com 'Perfect Forward Secrecy'.\n2. O payload (texto/audio) é fragmentado em pacotes TCP/IP.\n3. Autenticação via OAuth 2.0 com token de curta duração.\n4. 'Tokenização': O texto é convertido em vetores numéricos (embeddings) antes da entrada no modelo."
    },
    {
      title: "Passo 2: Processamento Volátil (In-Memory Processing)",
      simple: "A IA processa o pedido na memória RAM. Não guarda no disco.",
      technical: "1. Os dados entram exclusivamente na VRAM (Memória de Vídeo/Tensor) das TPUs v4/v5.\n2. Execução de inferência estatística (Stateless).\n3. O modelo Gemini não realiza operações de escrita (I/O) em armazenamento persistente para o payload do utilizador.\n4. Garbage Collection imediato após geração dos tokens de saída."
    },
    {
      title: "Passo 3: Receção e Desserialização",
      simple: "O resultado regressa ao seu PC.",
      technical: "1. 'Detokenization': Os vetores de saída são reconvertidos em strings de texto legível.\n2. O payload JSON de resposta é transmitido pelo túnel TLS 1.3 estabelecido.\n3. A conexão é encerrada ou mantida em 'keep-alive', mas o contexto da sessão de inferência na nuvem é destruído."
    },
    {
      title: "Passo 4: Persistência Local (Local Storage)",
      simple: "O seu navegador cria o ficheiro final.",
      technical: "1. O JavaScript (Client-side) recebe o objeto JSON.\n2. Utilização da API `window.URL.createObjectURL(blob)` para alocar um buffer de memória no dispositivo.\n3. O ficheiro final é escrito no sistema de ficheiros local (NTFS/APFS) via API do navegador.\n4. A Google nunca teve acesso à versão final compilada do ficheiro."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Arquitetura de Dados: Deep Dive Técnico</h2>
          <p className="text-slate-500 text-sm mt-1">Análise forense do fluxo de dados PC - Nuvem - PC.</p>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={showTechnicalDetails} 
              onChange={(e) => setShowTechnicalDetails(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500" 
            />
            <span>Modo Engenharia</span>
          </label>
          <button
            onClick={reset}
            disabled={isPlaying && step > 0}
            className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${
              isPlaying 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
            }`}
          >
            {step === 4 ? 'Reiniciar Análise' : 'Iniciar Tráfego'}
          </button>
        </div>
      </div>

      <div className="p-8 lg:p-12 bg-white min-h-[450px] relative">
        
        {/* Connection Lines (Background) */}
        <div className="absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

        <div className="relative z-10 flex justify-between items-center h-full">
          
          {/* STEP 1: Local Device */}
          <div className={`flex flex-col items-center transition-all duration-500 z-10 ${step >= 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
            <div className={`w-36 h-36 rounded-2xl flex flex-col items-center justify-center border-2 bg-white transition-all duration-500 relative ${step === 0 || step === 4 ? 'border-blue-600 shadow-xl ring-4 ring-blue-50' : 'border-slate-200'}`}>
              <Monitor className={`w-10 h-10 mb-2 ${step === 0 || step === 4 ? 'text-blue-600' : 'text-slate-400'}`} />
              <span className="font-bold text-sm text-slate-900">Endpoint (Cliente)</span>
              <span className="text-[10px] text-slate-500 font-mono">127.0.0.1</span>
              
              {/* Document Packet */}
              {(step === 1 || step === 3) && (
                <div className={`absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white shadow-lg animate-pulse z-20`}>
                  <Binary className="w-5 h-5" />
                </div>
              )}
            </div>
          </div>

          {/* Animated Packet Moving Right */}
          <div className="flex-1 relative h-24 mx-4 flex flex-col justify-center">
             {step === 1 && (
               <>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-400 -translate-y-1/2 overflow-hidden rounded-full">
                  <div className="w-full h-full animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                </div>
                <div className="absolute left-[50%] top-[-10px] -translate-x-1/2 flex flex-col items-center">
                   <div className="text-[10px] font-mono font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded border border-amber-200 mb-1 flex items-center shadow-sm whitespace-nowrap">
                     <Lock className="w-3 h-3 mr-1" /> TLS 1.3 (AES-256)
                   </div>
                   <div className="text-[9px] text-slate-400">Port 443 / HTTPS</div>
                </div>
               </>
             )}

             {/* Animated Packet Moving Left */}
             {step === 3 && (
               <>
               <div className="absolute top-1/2 left-0 w-full h-1 bg-green-400 -translate-y-1/2 overflow-hidden rounded-full">
                  <div className="w-full h-full animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
               </div>
               <div className="absolute left-[50%] top-[-10px] -translate-x-1/2 flex flex-col items-center">
                 <div className="text-[10px] font-mono font-bold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200 mb-1 flex items-center shadow-sm whitespace-nowrap">
                   <Network className="w-3 h-3 mr-1" /> JSON Stream
                 </div>
                 <div className="text-[9px] text-slate-400">Response 200 OK</div>
               </div>
               </>
             )}
          </div>

          {/* STEP 2: The Cloud */}
          <div className={`flex flex-col items-center transition-all duration-500 z-10 ${step >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-36 h-36 rounded-full flex flex-col items-center justify-center border-2 bg-white transition-all duration-500 ${step === 2 ? 'border-purple-500 shadow-xl ring-4 ring-purple-50 bg-purple-50' : 'border-slate-200'}`}>
              {step === 2 ? (
                <Cpu className="w-12 h-12 text-purple-600 animate-spin-slow" />
              ) : (
                <Server className="w-12 h-12 text-slate-400" />
              )}
              <span className="font-bold text-sm text-slate-900 mt-1">Google Cloud</span>
              <span className="text-[10px] text-slate-500 font-mono">Region: europe-west1</span>
            </div>
          </div>

        </div>

        {/* Step Description Box */}
        <div className="mt-12 bg-slate-50 rounded-xl p-0 border border-slate-200 shadow-sm min-h-[180px] overflow-hidden flex flex-col md:flex-row">
          <div className="bg-slate-100 p-6 flex items-center justify-center border-r border-slate-200 md:w-32 shrink-0">
            {step === 0 && <Monitor className="w-10 h-10 text-slate-500" />}
            {step === 1 && <ArrowRight className="w-10 h-10 text-amber-500" />}
            {step === 2 && <Cpu className="w-10 h-10 text-purple-600" />}
            {step === 3 && <ArrowRight className="w-10 h-10 text-green-500" />}
            {step === 4 && <ShieldCheck className="w-10 h-10 text-blue-600" />}
          </div>
          <div className="p-6 flex-1">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center">
              {stepsInfo[step].title}
              {step === 2 && <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full border border-red-200 uppercase font-bold tracking-wider">Volatile Memory Only</span>}
            </h3>
            
            <div className="space-y-4">
              <p className="text-slate-700 font-medium">
                {stepsInfo[step].simple}
              </p>
              
              {showTechnicalDetails && (
                <div className="bg-slate-900 text-slate-300 p-4 rounded-lg border border-slate-700 text-xs font-mono leading-relaxed relative shadow-inner">
                  <div className="absolute top-2 right-2 text-[9px] font-bold text-slate-500 uppercase border border-slate-700 px-1 rounded">System Log</div>
                  <pre className="whitespace-pre-wrap font-mono">
                    {stepsInfo[step].technical}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};