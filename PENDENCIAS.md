# Pendências da cliente

Tudo o que depende de decisão ou texto da Elísia, agrupado por página. Cada placeholder aparece com o identificador do atributo `data-placeholder`, para achar no código com uma busca.

**Legenda**
- **Texto pendente:** texto autoral que só a cliente pode escrever
- **A confirmar / A validar / A definir:** informação que depende de autorização ou checagem
- **Revisar transcrição:** trecho copiado do briefing como está, que precisa de revisão
- **Omissão:** trecho do briefing que ficou fora por regra do projeto

---

## Decisões gerais

1. **Referências visuais.** A identidade atual é provisória, inspirada no universo Itaú. Faltam as referências da parte 4 do briefing (portfólios admirados, elementos inegociáveis).
2. **Canais de contato públicos.** O briefing cita Teams, e-mail corporativo, WhatsApp e LinkedIn. Por enquanto só existem placeholders de LinkedIn e e-mail. Confirmar quais canais vão a público e com qual endereço.
3. **Rótulo duplicado no briefing de contato.** Os dois blocos de contato estão marcados como "Canal preferido para o público interno". O segundo (WhatsApp, networking, palestras) parece ser para o público externo. Confirmar.
4. **Informações de contato não usadas.** O briefing traz cidade, modalidade de trabalho, horário de expediente, tempo de resposta e textos de chamada para contato. Nada disso entrou ainda. Decidir o que vai a público.
5. **Seção Sobre.** As opções da pergunta 3.3 do briefing estão sem marcação.
6. **Explicações de termos técnicos** (`data-origem="glossario"`). Fui eu que escrevi, em uma frase simples cada, porque a regra exige explicação na primeira ocorrência. Revisar o texto de todas.
7. **Tags dos cases.** Criei rótulos provisórios em linguagem simples a partir do briefing. Revisar as doze tags.
8. **Meta descriptions** (texto que aparece no Google). Escrevi versões provisórias em primeira pessoa, só com fatos do briefing. Revisar as cinco.
9. **Linguagem inclusiva no briefing.** "novos colaboradores" e "curadores" (case Content Ops) estão no masculino genérico. Sugestão para avaliar: "pessoas recém-chegadas à equipe" e "pessoas curadoras".

---

## Página inicial (`index.html`): 13 placeholders

**Hero**
- `home-tempo-experiencia` · **A confirmar:** como mostrar o tempo de carreira. O briefing traz a quantidade de anos, mas números fora de anos não entram no site. Alternativas: período em anos ("desde [ano]") ou texto sem número.
- `home-diferencial` · **Texto pendente:** frase de diferencial. Pergunta-guia: "O que você entrega que prova, em uma frase, que já atua como especialista?"

**Destaques e outros cases**
- `home-card-ia-i-resumo` · **Texto pendente:** resumo do card da ia.i
- `home-card-jornadas-prg-resumo` · **Texto pendente:** resumo do card das Jornadas PRG
- `home-card-faq-aplicativos-resumo` · **Texto pendente:** resumo do card do FAQ
- `home-card-content-ops-avi-resumo` · **Texto pendente:** resumo do card do Content Ops
- `faq-aplicativos-card-titulo` · **A confirmar:** nome oficial do projeto de unificação (mesmo item da página do case)

**Trajetória**
- `home-marco-2024` · **A definir pela cliente:** nome do marco de 2024. No briefing está como "XXXXXXXXX (2024)".
- `home-marco-2024-case` · **A confirmar:** se o marco de 2024 é mesmo o case do FAQ dos aplicativos

**Sobre**
- `home-sobre` · **Texto pendente:** "O que você quer que a pessoa saiba sobre você além dos cases?"

**Contato**
- `home-contato-mensagem` · **Texto pendente:** o que a pessoa precisa saber antes de entrar em contato
- `home-contato-linkedin` · **A confirmar:** endereço do LinkedIn
- `home-contato-email` · **A confirmar:** endereço de e-mail público

---

## Case ia.i (`cases/ia-i.html`): 11 placeholders

**Texto pendente**
- `ia-i-resumo` · resumo do card
- `ia-i-time` · com quais áreas e papéis trabalhei
- `ia-i-processo` · como cheguei ao padrão conversacional, em etapas
- `ia-i-decisoes` · decisões sobre voz, limites e casos difíceis, cada uma com motivo
- `ia-i-antes-depois` · escolha da conversa para o comparativo
- `ia-i-antes-fala-cliente`, `ia-i-antes-fala-assistente`, `ia-i-depois-fala-cliente`, `ia-i-depois-fala-assistente` · falas simuladas
- `ia-i-aprendizados` · o que mudei de rumo e por quê
- `ia-i-mudou` · o que mudou para quem usa e para a empresa, sem números

**Revisar transcrição**
- Título: no briefing está "ia.i - Inteligência Artificial do Itaú". Troquei o hífen por dois-pontos para não parecer travessão. Confirmar.
- O resultado está como "Em fase de apuração.", transcrito do briefing.

---

## Case Jornadas PRG (`cases/jornadas-prg.html`): 13 placeholders

**A validar**
- `jornadas-prg-time` e `jornadas-prg-tamanho-time` · tamanho do time. O briefing traz o número de pessoas, mas ele não pode entrar na versão pública. Decidir como descrever a equipe sem número (exemplo: pelas áreas que a compõem).

**Texto pendente**
- `jornadas-prg-resumo` · resumo do card
- `jornadas-prg-importa` · por que o projeto importa
- `jornadas-prg-processo` · etapas do diagnóstico com dados ao redesenho
- `jornadas-prg-decisoes` · outras decisões além das duas já transcritas
- `jornadas-prg-antes-depois` · escolha da jornada simulada
- `jornadas-prg-antes-fala-cliente`, `jornadas-prg-antes-fala-assistente`, `jornadas-prg-depois-fala-cliente`, `jornadas-prg-depois-fala-assistente` · falas simuladas
- `jornadas-prg-aprendizados` · o que mudei de rumo e por quê
- `jornadas-prg-mudou` · o que mudou, sem números

**Revisar transcrição** (erros mantidos como estão no briefing)
- Problema: "e acabavam **sendo pedindo** para falar com o atendimento humano". Parece faltar ou sobrar uma palavra.
- Exploração de IA generativa: "**O que o teste mostrou que** o cliente confundia o assistente com o próprio aplicativo, **e o que me revisar** o conteúdo que convidava o cliente..." As duas frases estão incompletas.
- O resultado está como "Em fase de levantamento.", transcrito do briefing.

**Omissões**
- O problema na versão interna (com nomes de indicadores) ficou fora. Entrou só a versão externa.
- Em "O que deixei para depois", entrou só a versão externa. A versão interna cita um produto descontinuado cujo nome está na lista de termos proibidos.

---

## Case FAQ dos aplicativos (`cases/faq-aplicativos.html`): 15 placeholders

**A confirmar**
- `faq-aplicativos-titulo`, `faq-aplicativos-problema-nome` · nome oficial do projeto de unificação. O briefing pede para confirmar com o banco se pode ser citado. Nome provisório: "Unificação do FAQ dos aplicativos".
- `faq-aplicativos-nome-projeto` · a menção pública da liderança do banco sobre a relevância do projeto também depende de autorização

**Texto pendente**
- `faq-aplicativos-resumo` · resumo do card
- `faq-aplicativos-papel` · nome do papel no projeto (o briefing descreve a atuação, mas não dá um nome ao papel)
- `faq-aplicativos-time` · áreas e papéis envolvidos
- `faq-aplicativos-importa` · por que o projeto importa
- `faq-aplicativos-criterios` · critérios para decidir o que ficava e o que saía
- `faq-aplicativos-antes-depois` · escolha do conteúdo de FAQ para o comparativo
- `faq-aplicativos-antes-fala-cliente`, `faq-aplicativos-antes-fala-assistente`, `faq-aplicativos-depois-fala-cliente`, `faq-aplicativos-depois-fala-assistente` · pergunta e resposta simuladas
- `faq-aplicativos-aprendizados` · o que mudei de rumo e por quê
- `faq-aplicativos-mudou` · o que mudou para quem procura ajuda no aplicativo

**Revisar transcrição**
- Resultado: "Reduzi **drasticamente** o volume de conteúdos e mantive o que o cliente precisa." É um adjetivo solto. Sugestão: trocar por um fato concreto, sem número.
- No comparativo, quem fala aparece como "Pergunta do cliente" e "Resposta do FAQ", porque o briefing pede o antes e depois de um conteúdo de FAQ, e não de uma conversa. Confirmar.

**Omissões**
- A quantidade de conteúdos antes e depois e a quantidade de aplicativos (versão interna) ficaram fora.
- O trecho do problema que cita o nome do projeto e a menção da liderança virou placeholder.

---

## Case Content Ops AVI (`cases/content-ops-avi.html`): 13 placeholders

**Texto pendente**
- `content-ops-avi-resumo` · resumo do card
- `content-ops-avi-time` · áreas e papéis envolvidos
- `content-ops-avi-importa` · por que o projeto importa
- `content-ops-avi-guias` · guias e processos em versão sem dados internos
- `content-ops-avi-processo` · etapas dos processos de curadoria
- `content-ops-avi-decisoes` · decisões sobre guias, vocabulário e checklist
- `content-ops-avi-antes-depois` · escolha do conteúdo para o comparativo
- `content-ops-avi-antes-fala-cliente`, `content-ops-avi-antes-fala-assistente`, `content-ops-avi-depois-fala-cliente`, `content-ops-avi-depois-fala-assistente` · falas simuladas
- `content-ops-avi-aprendizados` · o que mudei de rumo e por quê
- `content-ops-avi-mudou` · o que mudou, sem números

**Omissões**
- Na frente "Padrão", ficou fora a frase inteira que começa com "Atualizei as políticas dos chatbots...", porque ela cita dois termos proibidos. Se quiser manter a primeira parte ("Atualizei as políticas dos chatbots"), é só avisar.
- A observação "só na versão interna" sobre esses dois termos também ficou fora.

---

## Omissões gerais do briefing

- Parte 1.4: a referência ao perfil de TI ligado à governança de novos cases ficou fora, porque cita um termo proibido. Nada desse tema aparece no site.
