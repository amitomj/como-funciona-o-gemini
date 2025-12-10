
export interface Term {
  word: string;
  category: 'técnico' | 'legal' | 'dados' | 'gov';
  definition: string;
}

export const terms: Term[] = [
  {
    word: "Access Transparency",
    category: "técnico",
    definition: "Recurso de segurança que gera logs quase em tempo real quando o pessoal de suporte da Google acede ao seu conteúdo (ex: para resolver um ticket de suporte). Permite auditar exatamente quem, quando e porquê a Google tocou na infraestrutura."
  },
  {
    word: "Acordo Quadro",
    category: "gov",
    definition: "Contrato celebrado entre uma ou mais entidades (como a eSPap) e fornecedores, que estabelece as condições para contratos futuros. Na Justiça, é a forma padrão de comprar tecnologia sem concursos públicos individuais."
  },
  {
    word: "API (Interface de Programação de Aplicações)",
    category: "técnico",
    definition: "É como um 'mensageiro' ou uma ponte. A API permite que a sua aplicação (no seu PC) fale com o cérebro da Google (na nuvem). Sem a API, o seu computador não conseguiria enviar o pedido de transcrição."
  },
  {
    word: "CMEK (Customer-Managed Encryption Keys)",
    category: "técnico",
    definition: "Chaves de Encriptação Geridas pelo Cliente. Uma funcionalidade crítica para a Justiça. Significa que, embora os dados estejam na Google, a 'chave do cofre' fica com o Tribunal. A Google não consegue tecnicamente ler os dados porque não tem a chave."
  },
  {
    word: "Cloud (Nuvem)",
    category: "técnico",
    definition: "Não é algo abstrato. São centros de dados físicos (salas cheias de servidores potentes) propriedade da Google. É para lá que os dados vão para serem processados porque o seu computador doméstico não tem potência suficiente para correr a IA."
  },
  {
    word: "Cloud Soberana (Sovereign Cloud)",
    category: "legal",
    definition: "Um nível de segurança ultra-elevado, geralmente para governos ou bancos. Garante que os centros de dados estão fisicamente na Europa e são operados/supervisionados por empresas europeias (como a T-Systems), impedindo o acesso legal por parte de governos estrangeiros (como os EUA)."
  },
  {
    word: "EKM (External Key Manager)",
    category: "técnico",
    definition: "Gestor de Chaves Externo. Permite guardar as chaves de encriptação fora da infraestrutura da Google (ex: num parceiro de segurança independente), garantindo que a Google nunca tem posse nem das chaves, nem dos dados."
  },
  {
    word: "eSPap",
    category: "gov",
    definition: "Entidade de Serviços Partilhados da Administração Pública. É a 'central de compras' do Estado. Para a Justiça adquirir serviços Google, normalmente deve verificar se existe acordo através da eSPap."
  },
  {
    word: "Encriptação em Trânsito (HTTPS/TLS)",
    category: "técnico",
    definition: "É como colocar a sua carta num cofre de aço antes de a enviar pelo correio. Quando os seus dados viajam do seu PC para a Google, eles vão codificados. Mesmo que um hacker intercete a comunicação, só verá 'lixo' ilegível."
  },
  {
    word: "IGFEJ",
    category: "gov",
    definition: "Instituto de Gestão Financeira e Equipamentos da Justiça. É a entidade técnica que normalmente valida a segurança e arquitetura informática nos tribunais e ministério."
  },
  {
    word: "Integrador",
    category: "gov",
    definition: "Empresa parceira (ex: Claranet, Deloitte, IP Telecom) que implementa a tecnologia da Google. A Google vende a 'tecnologia', o Integrador vende o 'projeto e a segurança'. O Estado contrata o Integrador."
  },
  {
    word: "JSON (JavaScript Object Notation)",
    category: "dados",
    definition: "É o formato de texto que o seu computador usa para organizar dados. Quando a Google responde com texto, o seu navegador organiza esse texto neste formato para criar a 'base de dados' no seu disco. É leve e fácil de ler por máquinas."
  },
  {
    word: "Local (Cliente/Browser)",
    category: "técnico",
    definition: "Refere-se ao seu ambiente: o seu computador, o seu navegador (Chrome/Edge) e o seu disco rígido. Quando dizemos 'a base de dados é local', significa que o ficheiro final existe apenas aqui e não na Google."
  },
  {
    word: "Modelo (LLM)",
    category: "técnico",
    definition: "O 'cérebro' da Inteligência Artificial (ex: Gemini). É o software complexo que sabe ler, resumir e transcrever. Ele vive na Cloud porque é demasiado grande (gigabytes ou terabytes) para caber no seu portátil."
  },
  {
    word: "Processamento vs. Armazenamento",
    category: "dados",
    definition: "A distinção crucial. 'Processamento' é a ação de ler/analisar (feito na Cloud). 'Armazenamento' é a ação de guardar para sempre (feito no seu PC). A Google processa, mas não precisa de armazenar."
  },
  {
    word: "Processamento Volátil",
    category: "técnico",
    definition: "Modelo de computação onde os dados são carregados apenas na memória temporária (RAM) para execução imediata e descartados logo após a conclusão, nunca sendo escritos em armazenamento persistente (Disco)."
  },
  {
    word: "Residência de Dados",
    category: "legal",
    definition: "A localização geográfica física onde os seus dados são processados. No nível gratuito, pode ser 'Global' (qualquer lugar). No nível pago, pode restringir para 'União Europeia' (ex: Bélgica, Finlândia)."
  },
  {
    word: "RGPD (GDPR)",
    category: "legal",
    definition: "Regulamento Geral sobre a Proteção de Dados. Lei europeia que obriga empresas como a Google a garantir direitos de privacidade, segurança e transparência aos cidadãos da UE."
  },
  {
    word: "SCCs (Cláusulas Contratuais Padrão)",
    category: "legal",
    definition: "Mecanismo legal usado para transferir dados da Europa para os EUA legalmente. É um contrato que obriga a Google a tratar os dados com o mesmo nível de proteção que teriam na Europa."
  },
  {
    word: "Treino (Training)",
    category: "dados",
    definition: "O processo de ensinar a IA a ser melhor. No nível gratuito, a Google pode usar partes das suas conversas para ensinar o modelo. No nível pago, isso é estritamente proibido."
  }
];
