# Checklist de qualidade

Rode tudo antes de cada entrega. Rode os comandos na raiz do projeto. Item que não passar bloqueia a entrega.

---

## Checklist

- [ ] **Dígitos:** no texto do site (conteúdo visível, `alt`, `aria-label`, `title`, `meta description` e comentários), só aparecem anos. Valores técnicos de código não contam.
- [ ] **Termos proibidos:** zero ocorrências em todos os arquivos (comando abaixo)
- [ ] **Travessões:** zero ocorrências do travessão longo e do médio
- [ ] **Terceira pessoa:** zero "Elísia é" e zero "ela" como palavra isolada no texto do site
- [ ] **HTML válido** no validador do W3C (validator.w3.org/nu)
- [ ] **Contraste** conferido em todos os pares de token usados (tabela abaixo)
- [ ] **Teclado:** todas as páginas percorridas só com Tab, Shift+Tab, Enter e Esc
- [ ] **Larguras:** testado em 320, 360x640, 768 e 1280x720; hero visível sem rolar em 360x640 e 1280x720
- [ ] **Links internos** funcionando, inclusive âncoras da home a partir dos cases
- [ ] **Placeholders:** todo `data-placeholder` listado em PENDENCIAS.md

---

## Comandos de busca

```bash
# Dígitos no texto (revise o resultado: anos e valores técnicos podem aparecer)
grep -rnoE '[0-9]+' index.html cases/ | grep -vE ':(2022|2024|2025|2026)$'

# Termos proibidos, codificados para que a regra não quebre a regra
for t in aXRp YXVkaXRvcmlh Y29udHJvbGVzIGludGVybm9z aW5jdWJhZG9yYQ==; do
  termo=$(printf '%s' "$t" | base64 -d)
  grep -rniw --exclude-dir=.git "$termo" . && echo "ACHADO: termo proibido"
done

# Travessões
grep -rn "$(printf '\342\200\224\\|\342\200\223')" --exclude-dir=.git .

# Terceira pessoa no site
grep -rniwE 'ela|Elísia é' index.html cases/
```

A busca de termos proibidos usa palavra inteira (`-w`). Sem isso, um dos termos aparece dentro de palavras comuns, como "crítica" e "positivo", e gera falso positivo.

---

## Contraste dos pares de token usados

Calculado pela fórmula de luminância relativa da WCAG. Confira de novo sempre que um valor de cor mudar.

| Primeiro plano | Fundo | Razão | Uso | Resultado |
|---|---|---|---|---|
| `--text-primary` #0E2240 | `--bg-page` #FFF8F1 | 15,10:1 | Texto | Passa |
| `--text-primary` | `--bg-surface` #FFFFFF | 15,89:1 | Texto em card | Passa |
| `--text-primary` | `--bg-tag` #FCE9DB | 13,48:1 | Tags, fala do cliente | Passa |
| `--text-secondary` #47536B | `--bg-page` | 7,34:1 | Texto de apoio | Passa |
| `--text-secondary` | `--bg-surface` | 7,73:1 | Metadados no card | Passa |
| `--accent-text` #A63F08 | `--bg-page` | 5,98:1 | Links | Passa |
| `--accent-text` | `--bg-surface` | 6,30:1 | Links em card | Passa |
| `--accent-support` #133A63 | `--bg-page` | 11,00:1 | Título profissional, botão do menu | Passa |
| `--text-on-support` #FFFFFF | `--accent-support` | 11,58:1 | Rodapé, link de pular | Passa |
| `--focus` #133A63 | `--bg-page` | 11,00:1 | Contorno de foco | Passa |
| `--placeholder-text` #6E0B4A | `--placeholder-bg` #FDE8F3 | 9,95:1 | Pergunta-guia | Passa |
| `--bg-surface` | `--placeholder-border` #A3166F | 7,24:1 | Rótulo "Texto pendente" | Passa |
| `--border-strong` #8A7A6B | `--bg-surface` | 4,14:1 | Contorno de card e conversa | Passa (componente, mínimo 3:1) |
| `--accent` #F26A1B | `--bg-page` | 2,91:1 | Só decoração | **Reprova para texto, inclusive grande.** Nunca use em texto |
| `--accent` | `--bg-surface` | 3,06:1 | Só decoração | Reprova para texto comum |

---

## Teste manual de teclado

1. Primeiro Tab: aparece "Pular para o conteúdo principal". Enter leva ao `main`.
2. Em 360px: Tab até "Menu", Enter abre, Tab percorre os links, Esc fecha e o foco volta ao botão.
3. Em todas as páginas: o foco é sempre visível e segue a ordem de leitura.
4. Cards: o foco no título destaca o card inteiro.
