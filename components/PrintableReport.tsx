import React from 'react';
import { terms } from '../data/glossaryTerms';
import { ArrowLeft, Printer } from 'lucide-react';

interface PrintableReportProps {
  onBack: () => void;
}

export const PrintableReport: React.FC<PrintableReportProps> = ({ onBack }) => {
  const currentDate = new Date().toLocaleDateString('pt-PT');

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  const emailSubject = "Solicitação de Reunião Técnica - Infraestrutura de Cloud Soberana e IA para o Setor da Justiça";
  const emailBody = `Exmos. Senhores,

No âmbito das iniciativas de modernização tecnológica do [Inserir Nome da Entidade: ex: Tribunal / Ministério da Justiça], vimos por este meio solicitar o agendamento de uma reunião de trabalho técnica com a equipa de Public Sector da Google Cloud e respetivos parceiros de integração (Sovereign Partners).

O objetivo desta reunião é avaliar a viabilidade da implementação de soluções de Inteligência Artificial Generativa (Gemini) sobre uma arquitetura de Cloud Soberana, em estrito cumprimento com os requisitos de segurança do IGFEJ, orientações do CNCS e normas de proteção de dados.

A agenda da reunião deverá focar-se obrigatoriamente nos seguintes pontos críticos de arquitetura:

1. Garantia de Soberania e Residência de Dados:
   Confirmação técnica de processamento e armazenamento de dados exclusivamente em regiões da União Europeia (Data Residency), sem trânsito para jurisdições terceiras.

2. Encriptação e Gestão de Chaves (CMEK + EKM):
   Demonstração de arquitetura onde as chaves de encriptação são geridas exclusivamente pela entidade judicial (Customer-Managed Encryption Keys) via External Key Manager (EKM).

3. Access Transparency e Access Approval:
   Mecanismos de auditoria de logs que garantam visibilidade total sobre qualquer interação administrativa com a infraestrutura e a capacidade de aprovação/rejeição manual de acessos de suporte.

4. Enquadramento de Contratação (eSPap):
   Identificação dos Acordos Quadro vigentes ou veículos contratuais adequados (via Integradores Premier) para a implementação de um projeto-piloto (PoC) em ambiente controlado.

Agradecemos a indicação de disponibilidade para agendamento nas próximas semanas.`;

  return (
    <div className="bg-slate-100 min-h-screen font-serif text-slate-900">
      
      {/* CONTROL BAR - HIDDEN ON PRINT */}
      <div className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md print:hidden flex justify-between items-center border-b border-slate-700">
        <button 
          type="button"
          onClick={onBack}
          className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md transition-colors border border-slate-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar à Aplicação</span>
        </button>

        <div className="flex items-center space-x-4">
           <span className="text-sm text-slate-300 hidden md:inline">
             Pré-visualização do Relatório Oficial.
           </span>
           <button 
            type="button"
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-md font-bold transition-colors shadow-lg border border-blue-400"
          >
            <Printer className="w-5 h-5" />
            <span>Imprimir / Guardar PDF</span>
          </button>
        </div>
      </div>

      {/* DOCUMENT PREVIEW AREA */}
      <div className="p-4 md:p-8 print:p-0">
        <div id="printable-report" className="bg-white text-black p-8 md:p-16 max-w-[210mm] mx-auto min-h-[297mm] shadow-2xl print:shadow-none print:max-w-none print:mx-0 print:p-0">
          
          {/* CAPA */}
          <div className="min-h-[290mm] flex flex-col justify-between page-break relative">
            <div className="mt-20">
              <div className="flex items-center space-x-4 mb-8">
                 <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl rounded">PT</div>
                 <div className="h-12 w-px bg-slate-300"></div>
                 <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Ministério da Justiça</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Implementação de IA Generativa e Soberania de Dados</h1>
              <h2 className="text-2xl md:text-3xl text-slate-600 font-light">Estudo de Viabilidade Técnica, Legal e Arquitetural</h2>
            </div>
            
            <div className="mb-20">
              <div className="border-t-4 border-slate-900 w-24 mb-6"></div>
              <p className="font-bold text-slate-900 text-lg">RELATÓRIO TÉCNICO OFICIAL</p>
              <p className="text-slate-600 mb-8">{currentDate}</p>
              
              <div className="inline-block border-l-4 border-red-600 pl-4 py-2 bg-red-50 pr-8">
                 <p className="text-xs font-bold text-red-700 uppercase tracking-wide">Classificação</p>
                 <p className="text-red-900 font-bold">CONFIDENCIAL / USO INTERNO</p>
              </div>
            </div>
          </div>

          {/* SUMÁRIO EXECUTIVO */}
          <div className="page-break pt-12">
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-6 uppercase tracking-wider">Sumário Executivo</h2>
            <p className="text-justify leading-relaxed mb-6 text-lg">
              O presente documento detalha a arquitetura técnica necessária para a implementação segura do modelo <strong>Google Gemini</strong> em ambiente judicial. O foco central reside na distinção inequívoca entre <strong>processamento de dados (Nuvem)</strong> e <strong>armazenamento (Local)</strong>, garantindo a soberania dos dados através de mecanismos de Cloud Soberana, encriptação avançada e conformidade estrita com o RGPD e orientações do CNCS.
            </p>
            <p className="text-justify leading-relaxed mb-6">
              É analisado o conceito de <strong>Processamento Volátil</strong>, onde os dados residem apenas em memória temporária (RAM/VRAM) durante a execução da inferência de IA, não sendo persistidos em disco nos servidores do fornecedor.
            </p>
            <p className="text-justify leading-relaxed mb-6">
              A arquitetura proposta inclui encriptação gerida pelo cliente (CMEK) via External Key Manager (EKM), assegurando que o fornecedor tecnológico nunca detém a capacidade de desencriptar os dados em repouso.
            </p>
          </div>

          {/* CAPITULO 1 - ARQUITETURA DETALHADA */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase">1. Arquitetura de Dados: Deep Dive Técnico</h3>
            <p className="mb-6 italic text-slate-600">Análise técnica detalhada do fluxo PC - Nuvem - PC.</p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-slate-200 pl-4 pb-4">
                 <h4 className="font-bold text-slate-900 text-lg">Estado de Repouso (Data at Rest)</h4>
                 <p className="text-justify text-sm text-slate-700 mt-1">
                   Os dados residem encriptados no disco local do cliente. A aplicação é carregada na memória do navegador, mas opera num ambiente virtualmente "Air-gapped" até à ação explícita do utilizador via HTTPS.
                 </p>
              </div>

              <div className="border-l-2 border-slate-200 pl-4 pb-4">
                 <h4 className="font-bold text-slate-900 text-lg">Passo 1: Transmissão Segura (TLS 1.3)</h4>
                 <p className="text-justify text-sm text-slate-700 mt-1">
                   Estabelecimento de Handshake TLS 1.3 com 'Perfect Forward Secrecy'. O payload é fragmentado em pacotes TCP/IP e autenticado via OAuth 2.0. Ocorre a 'Tokenização' (conversão de texto em embeddings vetoriais) antes da entrada no modelo.
                 </p>
              </div>

              <div className="border-l-2 border-slate-200 pl-4 pb-4">
                 <h4 className="font-bold text-slate-900 text-lg">Passo 2: Processamento Volátil (In-Memory)</h4>
                 <p className="text-justify text-sm text-slate-700 mt-1">
                   Os dados entram exclusivamente na VRAM das TPUs (Tensor Processing Units). A execução da inferência é 'Stateless'. O modelo não realiza operações de escrita (I/O) em armazenamento persistente para o payload do utilizador. Ocorre Garbage Collection imediato após a geração.
                 </p>
              </div>

              <div className="border-l-2 border-slate-200 pl-4 pb-4">
                 <h4 className="font-bold text-slate-900 text-lg">Passo 3: Persistência Local</h4>
                 <p className="text-justify text-sm text-slate-700 mt-1">
                   O JavaScript (Client-side) recebe o objeto JSON. Utiliza a API <code>window.URL.createObjectURL(blob)</code> para alocar memória no dispositivo. O ficheiro final é escrito diretamente no sistema de ficheiros local via API do navegador. A Google nunca teve acesso à versão final compilada.
                 </p>
              </div>
            </div>
          </div>

          {/* CAPITULO 2 - PRIVACIDADE DETALHADA */}
          <div className="mt-12 page-break">
            <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase pt-8">2. Engenharia de Segurança e Soberania</h3>
            <p className="mb-4">Mecanismos avançados de proteção de dados para conformidade com o setor da Justiça.</p>

            <div className="mb-8 border border-slate-300 rounded overflow-hidden">
              <div className="bg-slate-200 p-3 font-bold text-slate-900 text-center border-b border-slate-300 uppercase tracking-widest">
                Distinção Crítica: Níveis de Serviço
              </div>
              <div className="grid grid-cols-2 text-sm">
                <div className="p-4 border-r border-slate-300 bg-red-50">
                   <h4 className="font-bold text-red-900 text-center mb-2 uppercase">GRATUITO (Consumer)</h4>
                   <ul className="space-y-2 text-red-900">
                     <li>❌ <strong>Treino:</strong> Dados usados para treinar a IA.</li>
                     <li>❌ <strong>Humanos:</strong> Revisores podem ler amostras.</li>
                     <li>❌ <strong>Região:</strong> Processamento global.</li>
                   </ul>
                   <div className="mt-4 text-center font-bold text-red-700 border border-red-200 bg-white p-2 rounded text-xs uppercase">PROIBIDO NA JUSTIÇA</div>
                </div>
                <div className="p-4 bg-green-50">
                   <h4 className="font-bold text-green-900 text-center mb-2 uppercase">ENTERPRISE (Pago)</h4>
                   <ul className="space-y-2 text-green-900">
                     <li>✅ <strong>Zero Treino:</strong> Dados nunca usados para treino.</li>
                     <li>✅ <strong>Zero Humanos:</strong> Processamento 100% automático.</li>
                     <li>✅ <strong>Soberania:</strong> Dados restritos à UE.</li>
                   </ul>
                   <div className="mt-4 text-center font-bold text-green-700 border border-green-200 bg-white p-2 rounded text-xs uppercase">OBRIGATÓRIO</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="border border-slate-300 p-4 rounded">
                <h4 className="font-bold text-slate-900 mb-2">A. Residência de Dados (Sovereignty)</h4>
                <p className="text-sm text-justify text-slate-700">
                   Garantia física e jurídica de que os dados nunca abandonam o espaço económico europeu. É configurada através de "Organization Policies" (<code>constraints/gcp.resourceLocations: ['in:eu-locations']</code>), prevenindo o trânsito para jurisdições terceiras e mitigando riscos associados ao Cloud Act.
                </p>
              </div>

              <div className="border border-slate-300 p-4 rounded">
                <h4 className="font-bold text-slate-900 mb-2">B. Encriptação CMEK + EKM</h4>
                <p className="text-sm text-justify text-slate-700">
                   <strong>Customer-Managed Encryption Keys (CMEK):</strong> O Tribunal gera e detém a chave mestra.
                   <br/>
                   <strong>External Key Manager (EKM):</strong> A chave reside num Hardware Security Module (HSM) fora da infraestrutura da Google (ex: na Thales ou no datacenter da Justiça). A Google tem de pedir permissão via API para cada operação de desencriptação volátil.
                </p>
              </div>

              <div className="border border-slate-300 p-4 rounded">
                <h4 className="font-bold text-slate-900 mb-2">C. Access Transparency & Approval</h4>
                <p className="text-sm text-justify text-slate-700">
                   <strong>Transparency:</strong> Logs imutáveis e auditáveis de qualquer acesso administrativo por parte da Google.
                   <br/>
                   <strong>Approval:</strong> Bloqueio por defeito de qualquer acesso de suporte. Exige aprovação manual explícita por parte do administrador do Tribunal para desbloquear o acesso temporário.
                </p>
              </div>
            </div>

            <table className="w-full text-sm border-collapse border border-slate-300 mb-8">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-2 text-left w-1/3">Vetor de Ataque</th>
                  <th className="border border-slate-300 p-2 text-left w-2/3 font-bold text-blue-900">Mitigação (Nível Enterprise)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-2 font-semibold">Acesso por Admin da Google</td>
                  <td className="border border-slate-300 p-2">Bloqueado via Access Approval + Chaves EKM externas.</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 font-semibold">Ordem Judicial Estrangeira (EUA)</td>
                  <td className="border border-slate-300 p-2">Dados encriptados com chaves que a Google não possui (EKM).</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 font-semibold">Interceção de Rede</td>
                  <td className="border border-slate-300 p-2">TLS 1.3 End-to-End Encryption (PFS).</td>
                </tr>
                 <tr>
                  <td className="border border-slate-300 p-2 font-semibold">Persistência Acidental</td>
                  <td className="border border-slate-300 p-2">Processamento Volátil (RAM-only) nas TPUs.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CAPITULO 3 - PROTOCOLO DE IMPLEMENTAÇÃO */}
          <div className="page-break mt-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 uppercase pt-8">3. Protocolo de Implementação (Roadmap)</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">Fase 1: Preparação e Requisitos (CNCS/IGFEJ)</h4>
                <p className="text-sm text-justify text-slate-700 mb-2">
                  Execução obrigatória de uma <strong>DPIA (Data Protection Impact Assessment)</strong> documentando o tratamento de dados em larga escala. Validação de conformidade com o QNCS (Quadro Nacional de Referência para a Cibersegurança). O parecer do IGFEJ é vinculativo.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">Fase 2: Ecossistema de Parceiros</h4>
                <p className="text-sm text-justify text-slate-700 mb-2">
                  O contacto deve ser estabelecido com a <strong>Google Cloud Public Sector</strong> (Oeiras) e Integradores Premier (ex: IP Telecom, Claranet). O modelo de contratação deve privilegiar parceiros com certificação de segurança para o setor público.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">Fase 3: Contratação Pública (CCP)</h4>
                <p className="text-sm text-justify text-slate-700 mb-2">
                  Verificação de Acordos Quadro na eSPap para "Cloud Computing". Para procedimentos concursais, recomenda-se RFI prévio. Ajustes Diretos (Art. 24º CCP) carecem de justificação de exclusividade técnica robusta (ex: capacidades únicas do modelo Gemini 1.5 Pro) para evitar impugnação.
                </p>
              </div>
            </div>

            <h4 className="font-bold text-slate-900 mb-4 mt-8 bg-slate-100 p-2">Minuta de Comunicação Oficial</h4>
            <div className="bg-white border border-slate-300 p-6 font-mono text-xs text-justify leading-relaxed text-slate-800">
              {emailBody}
              <br/><br/>
              Com os melhores cumprimentos,<br/>
              [Assinatura Institucional]
            </div>
          </div>

          {/* CAPITULO 4 - GLOSSARIO */}
          <div className="page-break mt-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 uppercase pt-8">4. Glossário Técnico e Legal</h3>
            <div className="grid grid-cols-1 gap-4">
              {terms.map((term, index) => (
                <div key={index} className="border-b border-slate-100 pb-2 break-inside-avoid">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-slate-900 text-sm">{term.word}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide px-1.5 py-0.5 bg-slate-100 rounded">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5 text-justify leading-snug">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};