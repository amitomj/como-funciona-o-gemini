import React from 'react';
import { Shield, Server, Wifi, HardDrive, Flag, Zap, AlertTriangle, Scale } from 'lucide-react';

export const KeyConcepts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes: Os Seus Receios</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Esclarecendo a diferença entre "Transmissão" e "Armazenamento", e os riscos críticos das contas gratuitas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <Wifi className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            "Fazer upload" significa enviar, certo?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-amber-600">SIM.</strong> <br/>
            Está 100% correto. Para processar o áudio/texto, este tem de ser enviado para os servidores da Google via túnel TLS encriptado. O processamento não ocorre no seu PC.
          </p>
        </div>

        {/* Card 2 - UPDATED: Privacy & Access */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-red-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-1 bg-red-500 text-white text-[10px] font-bold px-2 rounded-bl">CRÍTICO</div>
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Quem vê os meus dados? (Gratuito vs Pago)
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong className="text-red-600 block mb-1">CONTAS GRATUITAS (Gmail):</strong>
            Revisores humanos PODEM ler amostras para treinar a IA. Os seus dados são usados para melhorar o produto. <strong>Inaceitável para a Justiça.</strong>
            <br/><br/>
            <strong className="text-green-600 block mb-1">CONTAS PAGAS (Enterprise):</strong>
            O contrato garante que <strong>NINGUÉM</strong> (nem humanos nem máquinas) usa os seus dados para treino. A privacidade é absoluta.
          </p>
        </div>

        {/* Card 3 - NEW: GDPR */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Flag className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
             E quanto à "Cloud Soberana"?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-blue-600">Funcionalidade Enterprise.</strong> <br/>
            Permite garantir tecnicamente que os dados nunca saem da União Europeia. Pode incluir parceiros locais (ex: T-Systems) que detêm as chaves de acesso, impedindo acesso extraterritorial.
          </p>
        </div>

        {/* Card NEW - Processamento Volátil */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            O que é "Processamento Volátil"?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-purple-600">RAM vs Disco.</strong> <br/>
            Os dados são carregados apenas na memória temporária (RAM/VRAM) para o cálculo matemático da IA. Assim que a resposta é gerada, os dados desaparecem. Nunca são gravados no disco rígido do servidor.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <HardDrive className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
             Onde fica a base de dados final?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-green-600">No seu PC.</strong> <br/>
            O resultado (texto) regressa ao seu navegador. O seu navegador compila o ficheiro final no seu disco. A Google não guarda uma cópia do ficheiro final gerado.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
            <Server className="w-6 h-6 text-slate-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Pode ser intercetado por hackers?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Risco Mínimo.</strong> <br/>
            Uso de TLS 1.3 (padrão bancário). Mesmo que intercetem os cabos, os dados são ilegíveis sem as chaves de desencriptação que mudam a cada sessão (Perfect Forward Secrecy).
          </p>
        </div>
      </div>
    </div>
  );
};