
import React, { useState } from 'react';
import { DataFlowVisualizer } from './components/DataFlowVisualizer';
import { LocalStorageDemo } from './components/LocalStorageDemo';
import { KeyConcepts } from './components/KeyConcepts';
import { PrivacyDeepDive } from './components/PrivacyDeepDive';
import { Glossary } from './components/Glossary';
import { ImplementationGuide } from './components/ImplementationGuide';
import { PrintableReport } from './components/PrintableReport';
import { ShieldCheck, Cloud, Database, Activity, Lock, Book, Briefcase, FileDown, Loader2, Printer, Scale } from 'lucide-react';

const App: React.FC = () => {
  // Default to 'visualizer' to show the architecture first
  const [activeTab, setActiveTab] = useState<'visualizer' | 'demo' | 'concepts' | 'privacy' | 'glossary' | 'protocol'>('visualizer');
  
  // State to toggle between the Main App and the Report Preview
  const [isReportMode, setIsReportMode] = useState(false);

  // If in Report Mode, show ONLY the report component
  if (isReportMode) {
    return <PrintableReport onBack={() => setIsReportMode(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* WRAPPER FOR NORMAL UI */}
      <div id="app-ui" className="flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-slate-800 rounded-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 hidden sm:block">Portal de Conformidade IA - Justiça</h1>
                <h1 className="text-lg font-bold text-slate-900 sm:hidden">Justiça IA Gov</h1>
                <p className="text-xs text-slate-500 hidden sm:block">Ministério da Justiça - Análise de Soberania de Dados</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <nav className="hidden lg:flex space-x-1 mr-4">
                <button
                  onClick={() => setActiveTab('visualizer')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'visualizer'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Cloud className="w-4 h-4 mr-2" />
                  Arquitetura
                </button>

                <button
                  onClick={() => setActiveTab('demo')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'demo'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Database className="w-4 h-4 mr-2" />
                  Simulação
                </button>

                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'privacy'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Segurança
                </button>

                <button
                  onClick={() => setActiveTab('protocol')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'protocol'
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Protocolo
                </button>

                <button
                  onClick={() => setActiveTab('glossary')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'glossary'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Book className="w-4 h-4 mr-2" />
                  Glossário
                </button>
              </nav>

              <button 
                onClick={() => setIsReportMode(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm bg-blue-700 hover:bg-blue-800 text-white"
                title="Pré-visualizar e Imprimir Relatório Oficial"
              >
                <FileDown className="w-4 h-4" />
                <span className="hidden md:inline">Relatório PDF</span>
                <span className="md:hidden">PDF</span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Nav */}
        <div className="md:hidden bg-white border-b border-slate-200 p-2 flex justify-around overflow-x-auto no-scrollbar">
          <button onClick={() => setActiveTab('visualizer')} className={`flex flex-col items-center p-2 min-w-[60px] rounded-md ${activeTab === 'visualizer' ? 'text-blue-600' : 'text-slate-500'}`}>
            <Cloud className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Fluxo</span>
          </button>
          <button onClick={() => setActiveTab('demo')} className={`flex flex-col items-center p-2 min-w-[60px] rounded-md ${activeTab === 'demo' ? 'text-blue-600' : 'text-slate-500'}`}>
            <Database className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Demo</span>
          </button>
          <button onClick={() => setActiveTab('privacy')} className={`flex flex-col items-center p-2 min-w-[60px] rounded-md ${activeTab === 'privacy' ? 'text-blue-600' : 'text-slate-500'}`}>
            <Lock className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Segurança</span>
          </button>
          <button onClick={() => setActiveTab('protocol')} className={`flex flex-col items-center p-2 min-w-[60px] rounded-md ${activeTab === 'protocol' ? 'text-blue-600' : 'text-slate-500'}`}>
            <Briefcase className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Protocolo</span>
          </button>
          <button onClick={() => setActiveTab('glossary')} className={`flex flex-col items-center p-2 min-w-[60px] rounded-md ${activeTab === 'glossary' ? 'text-blue-600' : 'text-slate-500'}`}>
            <Book className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Glossário</span>
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'visualizer' && <DataFlowVisualizer />}
          {activeTab === 'demo' && <LocalStorageDemo />}
          {activeTab === 'privacy' && <PrivacyDeepDive />}
          {activeTab === 'concepts' && <KeyConcepts />}
          {activeTab === 'protocol' && <ImplementationGuide />}
          {activeTab === 'glossary' && <Glossary />}
        </main>

        <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="mb-2 font-medium text-slate-300">Portal de Conformidade Tecnológica</p>
            <p className="text-xs max-w-2xl mx-auto leading-relaxed">
              Esta aplicação demonstra tecnicamente que o processamento em nuvem (API) é distinto do armazenamento de dados (Local).
              Em conformidade com os requisitos de Cloud Soberana e RGPD.
            </p>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default App;
