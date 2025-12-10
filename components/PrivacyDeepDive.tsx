import React, { useState } from 'react';
import { Lock, Eye, Server, ShieldCheck, ShieldAlert, FileText, CheckCircle, XCircle, Globe, Flag, Key, FileSearch, UserCheck, AlertTriangle, CreditCard, Ban, Scale } from 'lucide-react';

export const PrivacyDeepDive: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'tiers' | 'sovereignty' | 'encryption' | 'audit'>('tiers');

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Engenharia de Privacidade e Segurança</h2>
        <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
          Análise aprofundada das camadas de proteção e a distinção crítica entre contas de consumo e contas empresariais para uso judicial.
        </p>
      </div>

      {/* Navigation Tabs for Deep Dive */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveSection('tiers')}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all ${
            activeSection === 'tiers'
              ? 'bg-red-600 text-white shadow-md scale-105'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          0. Gratuito vs Enterprise
        </button>
        <button
          onClick={() => setActiveSection('sovereignty')}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all ${
            activeSection === 'sovereignty'
              ? 'bg-blue-600 text-white shadow-md scale-105'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Flag className="w-4 h-4 mr-2" />
          1. Soberania e Residência
        </button>
        <button
          onClick={() => setActiveSection('encryption')}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all ${
            activeSection === 'encryption'
              ? 'bg-purple-600 text-white shadow-md scale-105'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Key className="w-4 h-4 mr-2" />
          2. Encriptação (CMEK)
        </button>
        <button
          onClick={() => setActiveSection('audit')}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all ${
            activeSection === 'audit'
              ? 'bg-amber-600 text-white shadow-md scale-105'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FileSearch className="w-4 h-4 mr-2" />
          3. Auditoria (Logs)
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
        
        {/* SECTION 0: TIERS (FREE VS PAID) */}
        {activeSection === 'tiers' && (
          <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-start space-x-4 mb-6 border-b border-slate-100 pb-6">
              <div className="p-3 bg-red-100 rounded-xl text-red-600">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Níveis de Serviço: O Perigo do Gratuito</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  A distinção mais importante para o Ministério da Justiça. Ferramentas gratuitas (Gemini "Consumer") têm termos de serviço radicalmente diferentes das ferramentas profissionais (Gemini "Enterprise" via Google Cloud/Workspace).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              
              {/* Coluna Gratuita */}
              <div className="bg-slate-50 p-6 border-b md:border-b-0 md:border-r border-slate-200 relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-500"></div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">Conta Pessoal</h4>
                    <p className="text-xs text-slate-500">Gemini (Versão Web Gratuita)</p>
                  </div>
                  <span className="bg-slate-200 text-slate-600 text-[10px] px-2 py-1 rounded font-bold">@GMAIL.COM</span>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-0.5">
                      <XCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <strong>Os seus dados treinam a IA.</strong><br/>
                      <span className="text-slate-500 text-xs">A Google retém o direito de usar inputs para refinar o modelo global.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-0.5">
                      <Eye className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <strong>Revisão Humana.</strong><br/>
                      <span className="text-slate-500 text-xs">Revisores contratados podem ler amostras das conversas (anonimizadas) para controlo de qualidade.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-0.5">
                      <Ban className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <strong>Sem Garantia de Região.</strong><br/>
                      <span className="text-slate-500 text-xs">Os dados podem ser processados em datacenters globais (EUA, Ásia).</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 bg-red-50 text-red-800 text-xs font-bold p-3 rounded text-center border border-red-200 uppercase tracking-wide">
                  PROIBIDO PARA DADOS JUDICIAIS
                </div>
              </div>

              {/* Coluna Paga */}
              <div className="bg-white p-6 relative">
                 <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-500"></div>
                 <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">Conta Enterprise</h4>
                    <p className="text-xs text-slate-500">Google Cloud / Workspace</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-1 rounded font-bold">INSTITUCIONAL</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <strong>Zero Treino (Garantia Contratual).</strong><br/>
                      <span className="text-slate-500 text-xs">Os Termos de Serviço Enterprise proíbem explicitamente o uso de dados do cliente para treino.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <strong>Sem Acesso Humano.</strong><br/>
                      <span className="text-slate-500 text-xs">O processamento é estritamente automático e encriptado.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                      <Globe className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <strong>Controlo de Região (UE).</strong><br/>
                      <span className="text-slate-500 text-xs">Possibilidade de restringir o processamento exclusivamente à Europa.</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 bg-green-50 text-green-800 text-xs font-bold p-3 rounded text-center border border-green-200 uppercase tracking-wide">
                  REQUISITO MÍNIMO OBRIGATÓRIO
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 1: SOVEREIGNTY */}
        {activeSection === 'sovereignty' && (
          <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start space-x-4 mb-6 border-b border-slate-100 pb-6">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Residência de Dados e Cloud Soberana</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Garantia física e jurídica de que os dados nunca abandonam o espaço económico europeu, prevenindo conflitos jurisdicionais (ex: Cloud Act dos EUA).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Política de Regiões (Organization Policy)
                </h4>
                <p className="text-sm text-slate-600 text-justify mb-3">
                  É possível configurar, ao nível da "Organização Google Cloud", uma restrição técnica (constraint) que impede qualquer funcionário de criar recursos fora das regiões designadas.
                </p>
                <div className="bg-white p-3 rounded border border-slate-200 text-xs font-mono text-slate-700 shadow-inner">
                  constraints/gcp.resourceLocations:<br/>
                  allowedValues: <span className="text-blue-600">['in:eu-locations']</span><br/>
                  <span className="text-slate-400"># Impede deployment nos EUA</span>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <ShieldCheck className="w-4 h-4 text-purple-500 mr-2" />
                  Sovereign Controls with Partners
                </h4>
                <p className="text-sm text-slate-600 text-justify">
                  Para o nível máximo de exigência, a Google opera em parceria com entidades europeias (ex: T-Systems na Alemanha). Nesta modalidade, as chaves de acesso administrativo são detidas pelo parceiro europeu, criando uma "bolha de ar" entre a Google (EUA) e os dados (UE).
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start space-x-3">
              <Flag className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div className="text-sm text-blue-800">
                <strong>Nota para a Justiça:</strong> Recomenda-se a exigência contratual de que o suporte técnico seja fornecido exclusivamente por "EU Persons" (Pessoal localizado na UE), uma cláusula disponível no suporte "Assured Workloads".
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: ENCRYPTION */}
        {activeSection === 'encryption' && (
          <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start space-x-4 mb-6 border-b border-slate-100 pb-6">
              <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Cifragem Avançada (CMEK & EKM)</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  O padrão "Gold Standard" para confidencialidade. Mesmo que a Google tenha os discos, não tem a chave para ler o conteúdo.
                </p>
              </div>
            </div>

            <div className="space-y-8 pl-4">
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                   <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm">1</div>
                   <div className="h-full w-0.5 bg-slate-200 my-2"></div>
                </div>
                <div className="pb-6">
                   <h4 className="font-bold text-slate-800">Encriptação por Omissão (Google-Managed Keys)</h4>
                   <p className="text-sm text-slate-600 mt-1 mb-2">
                     A Google gera e gere as chaves. Os dados são seguros contra hackers externos, mas tecnicamente a Google possui a capacidade de os desencriptar se obrigada por lei.
                   </p>
                   <span className="text-[10px] bg-red-100 text-red-700 px-2 py-1 rounded border border-red-200 font-bold uppercase">Insuficiente para Tribunais</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                   <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-600 text-sm">2</div>
                   <div className="h-full w-0.5 bg-slate-200 my-2"></div>
                </div>
                <div className="pb-6">
                   <h4 className="font-bold text-slate-800">CMEK (Customer-Managed Encryption Keys)</h4>
                   <p className="text-sm text-slate-600 mt-1 mb-2">
                     O Ministério da Justiça gera a chave mestra (KEK) no Cloud KMS. A Google usa esta chave para proteger os dados, mas o Ministério mantém o controlo total. Se o Ministério revogar a chave, os dados tornam-se "lixo criptográfico" instantaneamente.
                   </p>
                   <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded border border-green-200 font-bold uppercase">Recomendado</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                   <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center font-bold text-amber-600 text-sm">3</div>
                </div>
                <div>
                   <h4 className="font-bold text-slate-800">EKM (External Key Manager)</h4>
                   <p className="text-sm text-slate-600 mt-1 mb-2">
                     Nível máximo. A chave reside num Hardware Security Module (HSM) fora da infraestrutura da Google (ex: na Thales ou no datacenter da Justiça). A Google tem de fazer um pedido de API externo para usar a chave em cada operação.
                   </p>
                   <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200 font-bold uppercase">Nível Máximo de Soberania</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 3: AUDIT */}
        {activeSection === 'audit' && (
          <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start space-x-4 mb-6 border-b border-slate-100 pb-6">
              <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                <FileSearch className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Transparência e Access Approval</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  "Trust but Verify". Estas ferramentas garantem que "ninguém toca sem registo" e dão poder de veto ao cliente sobre ações de suporte.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              
              <div className="border border-slate-200 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                 <div className="flex justify-between items-start">
                   <div>
                     <h4 className="font-bold text-slate-900 flex items-center">
                       <Eye className="w-4 h-4 mr-2 text-blue-500" /> Access Transparency (AxT)
                     </h4>
                     <p className="text-sm text-slate-600 mt-2 max-w-xl text-justify">
                       Gera logs imutáveis sempre que um engenheiro da Google acede ao seu conteúdo (ex: durante um ticket de suporte que você abriu). O log inclui: "Quem (email do engenheiro)", "Quando", "Motivo (Número do Ticket)" e "O que foi acedido".
                     </p>
                   </div>
                   <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded border border-green-200">NEAR REAL-TIME</span>
                 </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                 <div className="flex justify-between items-start">
                   <div>
                     <h4 className="font-bold text-slate-900 flex items-center">
                       <UserCheck className="w-4 h-4 mr-2 text-purple-500" /> Access Approval
                     </h4>
                     <p className="text-sm text-slate-600 mt-2 max-w-xl text-justify">
                       Leva a segurança um passo à frente. Em vez de apenas registar o acesso, o sistema <strong>bloqueia</strong> o acesso do suporte da Google até que você (Administrador do Tribunal) clique num botão a aprovar explicitamente esse acesso específico.
                     </p>
                   </div>
                   <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-1 rounded border border-purple-200">BLOQUEIO ATIVO</span>
                 </div>
              </div>

              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center">
                <AlertTriangle className="w-8 h-8 text-amber-600 mr-3" />
                <p className="text-xs text-amber-900 leading-snug">
                  <strong>Requisito Forense:</strong> Todos estes logs podem ser exportados automaticamente para o SIEM (Security Information and Event Management) do Ministério da Justiça para correlação de eventos de segurança.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};