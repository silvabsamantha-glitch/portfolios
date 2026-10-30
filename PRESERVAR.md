# O que não pode regredir

Inventário do que existe na v1. Qualquer mudança futura parte daqui. Se algo listado precisar mudar, registre o motivo neste arquivo.

---

## Páginas e slugs

Os slugs são provisórios **até o primeiro deploy**. Depois disso, não mudam mais: links compartilhados e indexados quebrariam.

| Página | Arquivo | Papel na home |
|---|---|---|
| Página inicial | `index.html` | |
| ia.i: Inteligência Artificial do Itaú | `cases/ia-i.html` | Destaque |
| Jornadas Resolutivas PRG do Assistente Virtual do Itaú | `cases/jornadas-prg.html` | Destaque |
| Unificação do FAQ dos aplicativos (nome a confirmar) | `cases/faq-aplicativos.html` | Outros cases |
| Content Ops e governança de curadorias do Assistente Virtual Itaú, AVI | `cases/content-ops-avi.html` | Outros cases |

Âncoras da home usadas pelo menu: `#conteudo`, `#destaques`, `#trajetoria`, `#outros-cases`, `#sobre`, `#contato`.

Ordem de navegação entre cases (anterior e próximo): ia.i, Jornadas PRG, FAQ dos aplicativos, Content Ops AVI.

---

## Estrutura de arquivos

```
/
├── index.html
├── cases/ (ia-i, jornadas-prg, faq-aplicativos, content-ops-avi)
├── assets/
│   ├── css/tokens.css      identidade: só tokens
│   ├── css/base.css        reset, tipografia, foco, utilitários
│   ├── css/components.css  componentes
│   ├── js/main.js          apenas menu mobile
│   └── images/
├── CLAUDE.md
├── PRESERVAR.md
├── QUALIDADE.md
└── PENDENCIAS.md
```

Sem framework, sem build, sem JSON de conteúdo nesta fase.

---

## Home: ordem das seções

1. Hero: nome (h1), título profissional, frase de diferencial, os dois temas em destaque e a explicação de curadoria e IA generativa. Visível inteiro sem rolar em 360x640 e 1280x720.
2. Destaques: cards grandes da ia.i e das Jornadas PRG
3. Trajetória: linha do tempo de 2022 a 2026, do mais antigo ao mais recente, com quatro marcos
4. Outros cases: cards compactos do FAQ dos aplicativos e do Content Ops AVI
5. Sobre
6. Contato: só LinkedIn e e-mail

---

## Template de case: ordem das seções

Bloco de campos estruturados (entre `<!-- CAMPOS ESTRUTURADOS: futuro CMS -->` e `<!-- FIM DOS CAMPOS ESTRUTURADOS -->`):

1. Cabeçalho: título (`data-campo="titulo"`), período (`data-campo="periodo"`), tags (`data-campo="tags"`), resumo do card (`data-campo="resumo"`)
2. Bloco de contexto: meu papel (`data-campo="papel"`), time (`data-campo="time"`), período, o que posso e o que não posso mostrar

Corpo:

3. Por que este projeto importa
4. Problema
5. O que eu fiz
6. Processo em etapas (lista ordenada)
7. Decisões e motivos
8. Antes e depois (conversa simulada)
9. Aprendizados
10. O que mudou para quem usa e para a empresa
11. Navegação: case anterior, voltar à página inicial, próximo case

Nenhuma seção sai por falta de conteúdo.

---

## Componentes (components.css)

| Componente | Classe principal | O que não pode se perder |
|---|---|---|
| Menu de navegação | `.site-header`, `.nav-toggle`, `.site-nav` | `<button>` com `aria-expanded` e `aria-controls`; Esc fecha e devolve o foco; sem JS o menu aparece |
| Link de pular conteúdo | `.skip-link` | Primeiro elemento focável da página |
| Card de case | `.case-card`, variação `.case-card--compacto` | Título é o link; o card inteiro fica clicável via pseudo-elemento |
| Tags | `.tags` | Lista semântica |
| Linha do tempo | `.timeline`, `.timeline__item` | `<ol>` semântica, ordem cronológica |
| Cabeçalho do case | `.case-header` | Único h1 da página |
| Bloco de contexto | `.contexto` | Lista de definição (`<dl>`) |
| Bloco de decisão | `.decisoes`, `.decisao` | Decisão como título, motivo com rótulo "Motivo:" |
| Conversa simulada | `.comparativo`, `.conversa`, `.fala` | Rótulo visível "Conversa simulada, sem dados reais de clientes" em cada conversa; quem fala aparece em texto; lado a lado a partir de 768px e empilhado abaixo disso; títulos "Antes" e "Depois" |
| Placeholder de texto autoral | `.placeholder`, variações `--compacto` e `--inline` | `data-placeholder` único; visual rosa tracejado com rótulo em caixa alta, impossível de confundir com texto final |
| Explicação de termo | `.termo-explicado` | Logo após a primeira ocorrência do termo na página |
| Navegação entre cases | `.case-nav` | Anterior, início e próximo |

---

## Tokens (tokens.css)

**Cores:** `--bg-page`, `--bg-surface`, `--bg-tag`, `--text-primary`, `--text-secondary`, `--text-on-support`, `--accent`, `--accent-text`, `--accent-support`, `--border`, `--border-strong`, `--focus`, `--placeholder-bg`, `--placeholder-text`, `--placeholder-border`.

**Tipografia:** `--font-family` (Figtree), `--font-size-sm` a `--font-size-2xl` (corpo `--font-size-base` com 18px), pesos, `--line-height-body`, `--line-height-heading`, `--measure`.

**Espaçamento:** `--space-3xs` a `--space-2xl`.

**Forma e layout:** raios, larguras de borda, `--focus-width`, `--container-max`, `--gutter`, `--touch-target`, `--header-height`.

Os nomes dos tokens semânticos ficam. Os valores podem mudar quando chegar a identidade definitiva, desde que o contraste continue passando (QUALIDADE.md).

---

## Garantias de acessibilidade já atingidas

- Um h1 por página, sem salto de nível de título
- Sem rolagem horizontal em 320px
- Hero visível sem rolar em 360x640 e 1280x720
- Menu mobile operável só com teclado
- Todos os pares de cor usados passam no AA
