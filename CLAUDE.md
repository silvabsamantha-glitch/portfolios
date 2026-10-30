# Regras do projeto: portfólio Elísia Amaral

Leia este arquivo inteiro antes de mexer em qualquer coisa. Se duas regras entrarem em conflito ou algo estiver ambíguo, pare e pergunte. Não decida sozinho.

Documentos irmãos:
- **PRESERVAR.md**: o que já existe e não pode regredir (páginas, slugs, componentes, tokens)
- **QUALIDADE.md**: checklist obrigatório antes de toda entrega
- **PENDENCIAS.md**: tudo que depende de decisão ou texto da cliente

---

## Contexto

- **Quem é:** Elísia Amaral, designer de conteúdo sênior. Atua no Itaú com experiência conversacional e curadoria de conteúdo para soluções com IA tradicional e generativa.
- **Objetivo único:** ser promovida a especialista ou coordenadora de design de conteúdo. Toda decisão responde a uma pergunta: "isso prova que ela já atua no nível de especialista?"
- **Públicos:** recrutadores externos (decidem em segundos, precisam ver o diferencial na primeira tela) e líderes internos do Itaú (avaliam promoção, precisam de evidência).
- **Técnica:** HTML, CSS e JS puros, sem framework e sem etapa de build. Hospedagem futura no Netlify com Decap CMS. A estrutura é replicada para outras clientes, então precisa ser limpa e previsível.

---

## Regras de conteúdo (inegociáveis)

1. **Só existe a versão externa.** Nenhum resultado numérico entra em nenhum arquivo do repositório: HTML, CSS, JS, JSON, comentário ou .md. Isso inclui volumes de conteúdo, indicadores, percentuais, escalas e tamanho de time. Anos são permitidos. Valores técnicos de código (medidas de CSS, breakpoints, razões de contraste nas regras de acessibilidade) também são permitidos, porque não são conteúdo.
2. **Termos proibidos em qualquer arquivo.** São quatro termos. Para que a própria regra não quebre a regra, eles estão codificados em base64 em QUALIDADE.md, junto com o comando que faz a busca. Se o texto da cliente trouxer algum deles, omita e registre a omissão em PENDENCIAS.md sem escrever o termo.
3. **Nomes a confirmar** (o nome oficial do projeto de unificação de aplicativos e a menção pública feita pela liderança do banco) entram só como placeholder `[A CONFIRMAR]`, com nome provisório descritivo: "Unificação do FAQ dos aplicativos".
4. **IA sem bastidor técnico.** Em case com IA, mostre só conteúdo, conversa e curadoria. Nunca estrutura técnica nem governança técnica. Governança de conteúdo (padrões, voz, marca, guardrails, corner cases) pode e deve aparecer.
5. **Primeira pessoa sempre.** "Eu" para o que ela fez, "nós" só para resultado de equipe. Nunca terceira pessoa, nem em título, metadado ou texto alternativo.
6. **Linguagem simples.** Termo técnico inevitável vem com explicação em uma frase simples na primeira ocorrência da página (componente `.termo-explicado`). Lista mínima: voice prompt, guardrails, corner cases, content first, CSAT, transbordo, autosserviço, curadoria, vocabulário controlado, IA generativa, assistente roteirizado.
7. **Linguagem inclusiva.** Nada que parta de um "usuário padrão" ou trate deficiência, idade, raça, gênero ou classe como defeito ou exceção. Prefira "pessoas" e "clientes" a "usuários".
8. **Sem travessão** (nem o longo nem o médio) em nenhum texto, inclusive comentários e .md.
9. **Sem autoelogio e sem adjetivo solto.** Se o texto da cliente trouxer, transcreva como está e registre em PENDENCIAS.md.
10. **Antes e depois só com conversa simulada**, sempre com o rótulo visível "Conversa simulada, sem dados reais de clientes".
11. **Claude não escreve texto autoral.** Use o componente de placeholder com pergunta-guia. Conteúdo factual do briefing da cliente entra transcrito fielmente, sem embelezar, com `data-origem="briefing"`. Erro de digitação não é corrigido: é transcrito e listado em PENDENCIAS.md. Explicações de termo técnico levam `data-origem="glossario"` e também ficam para revisão da cliente.

### Contato

Nada de telefone, WhatsApp ou Teams até a cliente confirmar quais canais vão a público. Hoje só existem placeholders para LinkedIn e e-mail.

---

## Design system provisório

- Identidade **inspirada no universo Itaú, nunca imitação**: sem logo, wordmark, ícones, ilustrações, fonte proprietária ou padrões gráficos do app e do site do banco. O nome da Elísia é o maior destaque do hero, nunca o nome do banco.
- **Tudo via tokens** em `assets/css/tokens.css`. Trocar identidade é trocar só esse arquivo. Nenhuma cor, fonte ou espaçamento solto em base.css ou components.css.
- **Laranja vivo (`--accent`)**: só decoração, bordas e ícones. Ele não passa no contraste nem para texto grande sobre `--bg-page`. Texto e link em laranja usam `--accent-text`.
- Texto principal em azul escuro (`--text-primary`), nunca em laranja.
- **Tipografia:** Figtree (Google Fonts, uso livre). Corpo com no mínimo 18px, entrelinha de pelo menos 1,5, largura de linha em torno de 70 caracteres (`--measure`).
- **Breakpoints:** 480, 600, 768 e 900px.
- **Movimento:** nenhuma animação essencial; respeitar `prefers-reduced-motion`.
- Sem dark mode nesta fase.

---

## Acessibilidade (WCAG 2.1 AA, obrigatório)

- `lang="pt-BR"`, HTML semântico, landmarks, um único h1 por página e títulos sem salto de nível
- Link para pular ao conteúdo principal
- Foco visível em todo elemento interativo
- Contraste mínimo de 4,5:1 para texto e 3:1 para componentes e ícones
- Menu mobile: `<button>` com `aria-expanded` e `aria-controls`, fecha com Esc, devolve o foco ao botão, funciona só com teclado. Sem JS, o menu fica visível
- Imagem informativa com texto alternativo em primeira pessoa; decorativa com `alt=""`
- Leitura em 320px sem rolagem horizontal
- Alvos de toque com pelo menos 44x44px
- Na conversa simulada, quem fala é identificado em texto ("Cliente", "Assistente"), nunca só por cor ou posição

---

## Como trabalhar neste repositório

- Páginas de case seguem o template de PRESERVAR.md, na mesma ordem de seções. Nunca remova uma seção por falta de conteúdo: use placeholder.
- Os campos estruturados de cada case ficam entre `<!-- CAMPOS ESTRUTURADOS: futuro CMS -->` e `<!-- FIM DOS CAMPOS ESTRUTURADOS -->`. O card da home repete título, período, tags e resumo: altere os dois lugares juntos.
- Links das páginas de case para a home usam `../index.html`.
- Todo placeholder novo tem `class="placeholder"`, `data-placeholder="<pagina>-<secao>"` único e entra em PENDENCIAS.md.
- Rode QUALIDADE.md antes de entregar.
