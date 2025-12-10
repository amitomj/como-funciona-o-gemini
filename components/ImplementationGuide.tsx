
import React, { useState } from 'react';
import { Building2, FileSignature, MapPin, Users, Phone, ShieldAlert, CheckCircle2, Mail, Copy, Check, FileCheck, Scale, ArrowDown, BookOpen } from 'lucide-react';

export const ImplementationGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>('prep');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const emailSubject = "Solicitação de Reunião Técnica - Infraestrutura de Cloud Soberana e IA para o Setor da Justiça";
  const emailBody = `Exmos. Senhores,

No âmbito das iniciativas de modernização tecnológica do [Inserir Nome da Entidade: ex: Tribunal / Ministério da Justiça], vimos por este meio solicitar o agendamento de uma reunião de trabalho técnica com a equipa de Public Sector da Google Cloud e respetivos parceiros de integração (Sovereign Partners).

O objetivo desta reunião é avaliar a viabilidade da implementação de soluções de Inteligência Artificial Generativa (Gemini) sobre uma arquitetura de Cloud Soberana, em estrito cumprimento com os requisitos de segurança do IGFEJ, orientações do CNCS e normas de proteção de dados (RGPD).

A agenda da reunião deverá focar-se obrigatoriamente nos seguintes pontos críticos de arquitetura:

1. Garantia de Soberania e Residência de Dados:
   Confirmação técnica de processamento e armazenamento de dados exclusivamente em regiões da União Europeia (Data Residency), sem trânsito para jurisdições terceiras, através de Organization Policies (constraints/gcp.resourceLocations).

2. Encriptação e Gestão de Chaves (CMEK + EKM):
   Demonstração de arquitetura onde as chaves de encriptação são geridas exclusivamente pela entidade judicial (Customer-Managed Encryption Keys) via External Key Manager (EKM), garantindo a impossibilidade técnica de acesso aos dados "em repouso" ou "em uso" por parte do fornecedor.

3. Access Transparency e Access Approval:
   Demonstração de mecanismos de auditoria de logs que garantam visibilidade total sobre qualquer interação administrativa com a infraestrutura e a capacidade de aprovação/rejeição manual de acessos de suporte.

4. Enquadramento de Contratação (eSPap e CCP):
   Identificação dos Acordos Quadro vigentes ou veículos contratuais adequados (via Integradores Premier) para a implementação de um projeto-piloto (PoC) em ambiente controlado, respeitando o Código dos Contratos Públicos (CCP).

Agradecemos a indicação de disponibilidade para agendamento nas próximas semanas.

Com os melhores cumprimentos,

[O Seu Nome]
[O Seu Cargo]
[Entidade - ex: Ministério da Justiça / DGAJ]
[Contacto Telefónico Institucional]`;

  const copyToClipboard = () => {
    const fullText = `Assunto: ${emailSubject}\n\n${emailBody}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">Protocolo Institucional de Implementação</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Guia detalhado de conformidade com o Quadro Nacional de Interoperabilidade Digital e procedimentos do Código dos Contratos Públicos (CCP).
        </p>
      </div>

      {/* Accordion Style Steps */}
      <div className="space-y-4">
        
        {/* STEP 1: PREPARATION */}
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <button 
            onClick={() => toggleSection('prep')}
            className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Preparação e Requisitos Legais (CNCS & IGFEJ)</h3>
                <p className="text-sm text-slate-500">Documentação prévia obrigatória (DPIA, QNCS).</p>
              </div>
            </div>
            <ArrowDown className={`w-5 h-5 text-slate-400 transition-transform ${openSection === 'prep' ? 'rotate-180' : ''}`} />
          </button>
          
          {openSection === 'prep' && (
            <div className="p-6 md:p-8 border-t border-slate-200 space-y-6 animate-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 flex items-center"><FileCheck className="w-4 h-4 mr-2 text-blue-600"/> Avaliação de Impacto (DPIA)</h4>
                  <p className="text-sm text-slate-600 text-justify leading-relaxed">
                    Antes de qualquer contacto, deve iniciar uma <strong>DPIA (Data Protection Impact Assessment)</strong>. Como a IA envolve tratamento de dados em larga escala, o RGPD torna este documento obrigatório. Deve documentar que os dados são processados de forma "volátil" e não persistente.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 flex items-center"><ShieldAlert className="w-4 h-4 mr-2 text-blue-600"/> Enquadramento CNCS</h4>
                  <p className="text-sm text-slate-600 text-justify leading-relaxed">
                     Verifique a conformidade com o <strong>Quadro Nacional de Referência para a Cibersegurança (QNCS)</strong>. A solução deve garantir que a classificação da informação (ex: "Reservado", "Confidencial") é mapeada para as chaves de encriptação corretas (CMEK) e controlos de acesso (IAM).
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-sm text-amber-900 flex items-start">
                <Scale className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
                <div>
                  <strong>Nota Vinculativa:</strong> O parecer do IGFEJ (Instituto de Gestão Financeira e Equipamentos da Justiça) é obrigatório para projetos de interoperabilidade. A arquitetura de rede (Peering) deve ser validada pela equipa de infraestrutura do IGFEJ antes do piloto.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* STEP 2: CONTACT */}
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <button 
            onClick={() => toggleSection('contact')}
            className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Canais Oficiais e Ecossistema</h3>
                <p className="text-sm text-slate-500">Google Public Sector e Integradores Qualificados.</p>
              </div>
            </div>
            <ArrowDown className={`w-5 h-5 text-slate-400 transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`} />
          </button>
          
          {openSection === 'contact' && (
            <div className="p-6 md:p-8 border-t border-slate-200 space-y-6 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                   <h4 className="font-bold text-slate-900 mb-3 flex items-center"><Building2 className="w-4 h-4 mr-2 text-blue-500"/> Google Cloud Public Sector</h4>
                   <p className="text-sm text-slate-600 mb-3 text-justify leading-relaxed">
                     A Google tem uma divisão segregada para tratar com Governos. Não utilize os formulários web genéricos de "Sales". A abordagem deve ser formal, dirigida à direção de setor público em Portugal.
                   </p>
                   <div className="bg-slate-50 p-3 rounded border border-slate-200 text-sm">
                     <div className="font-semibold text-slate-800">Google Portugal</div>
                     <div className="text-slate-500 text-xs mt-1">Lagoas Park, Edifício 8<br/>2740-244 Oeiras, Portugal</div>
                   </div>
                </div>
                <div className="flex-1">
                   <h4 className="font-bold text-slate-900 mb-3 flex items-center"><Users className="w-4 h-4 mr-2 text-purple-500"/> O Papel dos Integradores</h4>
                   <p className="text-sm text-slate-600 mb-3 text-justify leading-relaxed">
                     O Estado contrata "Serviços de Implementação" a integradores que já detêm acordos quadro e clearances de segurança.
                   </p>
                   <ul className="text-sm text-slate-700 space-y-2 border-l-2 border-slate-200 pl-3">
                     <li><strong>IP Telecom:</strong> Parceiro estratégico para conectividade soberana e Datacenters nacionais.</li>
                     <li><strong>Claranet / Deloitte / Accenture:</strong> Parceiros frequentes em grandes projetos de modernização administrativa.</li>
                   </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* STEP 3: PROCUREMENT (CCP) */}
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <button 
            onClick={() => toggleSection('procurement')}
            className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Contratação Pública (CCP & eSPap)</h3>
                <p className="text-sm text-slate-500">Procedimentos de aquisição válidos (Art. 24º vs Concurso).</p>
              </div>
            </div>
            <ArrowDown className={`w-5 h-5 text-slate-400 transition-transform ${openSection === 'procurement' ? 'rotate-180' : ''}`} />
          </button>
          
          {openSection === 'procurement' && (
            <div className="p-6 md:p-8 border-t border-slate-200 space-y-6 animate-in slide-in-from-top-2 duration-300">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="border rounded-lg p-4 bg-slate-50">
                   <h4 className="font-bold text-slate-900 mb-2 text-sm">Acordos Quadro (AQ)</h4>
                   <p className="text-xs text-slate-600 text-justify leading-relaxed">
                     Verifique na <strong>eSPap</strong> se existe AQ para "Licenciamento de Software" ou "Serviços Cloud" onde a Google ou os seus parceiros estejam qualificados. É a via mais rápida e segura juridicamente.
                   </p>
                 </div>
                 <div className="border rounded-lg p-4 bg-slate-50">
                   <h4 className="font-bold text-slate-900 mb-2 text-sm">Concurso Público</h4>
                   <p className="text-xs text-slate-600 text-justify leading-relaxed">
                     Para projetos estruturantes (&gt;750k€). Recomenda-se uma fase prévia de <strong>RFI (Request for Information)</strong> para afinar os requisitos técnicos de soberania antes de lançar o caderno de encargos final.
                   </p>
                 </div>
                 <div className="border rounded-lg p-4 bg-slate-50">
                   <h4 className="font-bold text-slate-900 mb-2 text-sm">Ajuste Direto (Art. 24º CCP)</h4>
                   <p className="text-xs text-slate-600 text-justify leading-relaxed">
                     Apenas aplicável se demonstrar tecnicamente que <strong>só um fornecedor</strong> consegue cumprir os requisitos (ex: "Único modelo com janela de contexto de 2M tokens"). Requer justificação robusta para evitar impugnação.
                   </p>
                 </div>
               </div>
            </div>
          )}
        </div>

      </div>

      {/* EMAIL TEMPLATE */}
      <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-lg mt-8">
        <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center">
            <Mail className="text-blue-400 w-6 h-6 mr-3" />
            <h3 className="font-bold text-lg text-white">Minuta Oficial (Copy & Paste)</h3>
          </div>
          <button 
            onClick={copyToClipboard}
            className={`flex items-center px-3 py-1.5 rounded text-xs font-bold transition-colors ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
          >
            {copied ? <Check className="w-4 h-4 mr-1"/> : <Copy className="w-4 h-4 mr-1"/>}
            {copied ? 'Copiado!' : 'Copiar Texto'}
          </button>
        </div>
        <div className="p-6 md:p-8 space-y-4">
          <div className="space-y-2">
            <div className="text-slate-400 text-xs font-mono uppercase tracking-wide">Assunto:</div>
            <div className="text-white font-mono text-sm bg-slate-800 p-2 rounded border border-slate-700">{emailSubject}</div>
          </div>
          <div className="space-y-2">
            <div className="text-slate-400 text-xs font-mono uppercase tracking-wide">Corpo da Mensagem:</div>
            <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap bg-slate-800 p-4 rounded border border-slate-700 leading-relaxed overflow-x-auto">
              {emailBody}
            </pre>
          </div>
        </div>
      </div>

    </div>
  );
};
