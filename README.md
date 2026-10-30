# Portfólio Elísia Amaral

Site pessoal de portfólio da Elísia Amaral, designer de conteúdo sênior com atuação em experiência conversacional e curadoria de conteúdo para soluções com IA tradicional e generativa.

**Objetivo do site:** mostrar que ela já atua no nível de especialista em design de conteúdo.

**Status:** v1 de estrutura. As páginas, os componentes e a identidade provisória estão prontos. Os textos autorais ainda são placeholders, aguardando a cliente.

---

## Como abrir o site

Não precisa instalar nada. O site é feito em HTML, CSS e JS puros, sem framework e sem etapa de build.

- **Jeito mais simples:** abra o arquivo `index.html` no navegador.
- **Com servidor local** (recomendado para testar como vai ficar no ar):

```bash
python3 -m http.server
```

Depois, acesse `http://localhost:8000` no navegador.

---

## Estrutura

```
/
├── index.html                  página inicial
├── cases/
│   ├── ia-i.html               ia.i (destaque)
│   ├── jornadas-prg.html       Jornadas PRG (destaque)
│   ├── faq-aplicativos.html    FAQ dos aplicativos
│   └── content-ops-avi.html    Content Ops AVI
├── assets/
│   ├── css/tokens.css          cores, fontes e espaçamentos (identidade)
│   ├── css/base.css            estilos gerais e acessibilidade
│   ├── css/components.css      componentes reutilizáveis
│   ├── js/main.js              apenas o menu mobile
│   └── images/                 imagens (vazia por enquanto)
├── README.md                   este arquivo
├── CLAUDE.md                   regras do projeto
├── PRESERVAR.md                o que não pode regredir
├── QUALIDADE.md                checklist antes de entregar
└── PENDENCIAS.md               o que depende da cliente
```

---

## Qual documento ler

| Se você quer... | Leia |
|---|---|
| Entender as regras de conteúdo, design e acessibilidade | `CLAUDE.md` |
| Saber o que já existe e não pode mudar (páginas, slugs, componentes) | `PRESERVAR.md` |
| Conferir se uma entrega está pronta | `QUALIDADE.md` |
| Ver o que falta a cliente escrever, confirmar ou decidir | `PENDENCIAS.md` |

Qualquer pessoa ou sessão de IA que for mexer no projeto começa pelo `CLAUDE.md`.

---

## Como editar o conteúdo

### Trocar um placeholder por texto final

Todo texto pendente aparece no site num bloco rosa tracejado, com o rótulo "Texto pendente" e uma pergunta-guia. No código, ele tem a classe `placeholder` e um identificador único:

```html
<div class="placeholder" data-placeholder="ia-i-aprendizados">
  <p class="placeholder__rotulo">Texto pendente</p>
  <p class="placeholder__pergunta">Em que momento você mudou de rumo neste projeto? O que te fez mudar?</p>
</div>
```

Para trocar:

1. Busque o identificador (ex.: `ia-i-aprendizados`) no código e em `PENDENCIAS.md`.
2. Substitua o bloco inteiro pelo texto final, normalmente em um ou mais parágrafos `<p>`.
3. Marque o item como resolvido em `PENDENCIAS.md`.

### Revisar texto que veio do briefing

Trechos copiados do briefing da cliente têm o atributo `data-origem="briefing"`. As explicações de termos técnicos têm `data-origem="glossario"`. Os dois estão aguardando a revisão da cliente. Depois de aprovados, o atributo pode ficar: ele não aparece para quem visita o site.

### Mudar título, período ou tags de um case

Esses dados aparecem em dois lugares: no topo da página do case (entre os comentários `CAMPOS ESTRUTURADOS` e `FIM DOS CAMPOS ESTRUTURADOS`) e no card da página inicial. Altere os dois juntos.

### Mudar a identidade visual

Mexa só em `assets/css/tokens.css`. Depois, confira o contraste de novo usando a tabela de `QUALIDADE.md`.

---

## Regras que não podem ser quebradas

O detalhe completo está em `CLAUDE.md`. Em resumo:

- Nenhum resultado numérico no repositório. Anos são permitidos.
- Termos proibidos fora de qualquer arquivo (a busca está em `QUALIDADE.md`).
- Texto sempre em primeira pessoa, em linguagem simples e inclusiva.
- Sem travessões.
- Antes e depois só com conversa simulada e com o rótulo visível.
- Acessibilidade WCAG 2.1 AA em toda mudança.

---

## Próximas fases

Nada disso foi feito ainda:

- Textos autorais da cliente (ver `PENDENCIAS.md`)
- Identidade visual definitiva, a partir das referências da cliente
- Publicação no Netlify e definição de domínio
- Decap CMS para edição dos cases sem mexer no código
- Validação final no validador do W3C antes do primeiro deploy

**Atenção:** depois do primeiro deploy, os nomes dos arquivos dos cases (slugs) não podem mais mudar. A lista está em `PRESERVAR.md`.
