# Design System — Página "Chamadas de voz e videochamadas" (whatsapp.com/calling)

> Extraído por inspeção direta do HTML salvo de `https://www.whatsapp.com/calling`. Esta página é construída com o **WAUI** ("WhatsApp UI" — nome que aparece literalmente nas classes `_wauiSection`, `_wauiFlexLayout`, `_wauiIcon` etc.), o sistema de design interno da Meta para o site institucional do WhatsApp, renderizado com CSS atômico (nomes de classe em sua maioria hashes tipo `_9t2b`, não legíveis). O CSS compilado (6 arquivos `.css`) **não veio no export**, então tipografia (família, tamanhos, pesos), border-radius e box-shadow não puderam ser lidos diretamente — não há nenhuma ocorrência de `font-family`, `border-radius` ou `box-shadow` no HTML salvo. Tudo abaixo marcado como **confirmado** veio de `style="..."` inline (que o navegador grava com o valor computado real) ou de atributos literais do código; o resto é estimativa/conhecimento geral da marca, sinalizado como tal.

---

## 1. Sensação geral

Site institucional, tom "acolhedor e humano": fundo creme quente (não branco), alternando com um verde bem claro a cada 2–3 seções — nunca fundo branco puro até a seção de FAQ. Muito uso de ilustração/foto grande, texto curto, botões em formato pílula com ícone de download, e microanimações de entrada (fade + leve deslocamento) conforme o usuário rola a página.

---

## 2. Cores (confirmadas via `style` inline)

| Cor | Hex | Papel confirmado no HTML |
|---|---|---|
| Creme de fundo | `#FCF5EB` (`rgb(252,245,235)`) | Fundo do `<header>` (barra de navegação) **e** fundo padrão da maioria das seções (hero, features) |
| Verde clarinho | `#E6FFDA` | Fundo alternado de seções secundárias (a cada 2–3 seções, cria ritmo visual) |
| Branco | `#FFFFFF` | Fundo da seção de FAQ/"Precisa de mais ajuda?" e do menu dropdown de navegação (`--nav-dropdown-menu-background-color`) |
| Texto/ícone principal | `#111B21` (`rgb(17,27,33)`) | Cor de texto do header, borda inferior do header (1px), stroke de ícones |
| Texto/ícone secundário | `#1C1E21` (`rgb(28,30,33)`) | Cor de título (H1) e parágrafo do hero, `--custom-svg-icon-fill` padrão dos ícones de conteúdo |
| Cinza neutro | `#222222` | Variante de texto em outro trecho do corpo |
| Verde-marca (WhatsApp) | `#25D366` | Verde clássico da marca — aparece em ícones/detalhes de destaque |
| Verde-marca claro | `#43CD66` (`rgb(67,205,102)`) | Stroke de ícone em item de navegação ativo/hover ("Chamadas") |
| Verde escuro (texto sobre fundo verde) | `#103928` (`rgb(16,57,40)`) | Cor de texto do item de nav "Chamadas" quando destacado — combina com o stroke `#43CD66` |
| Azulado muito claro | `#F0F4F9` | Texto de rodapé ("Termos e Política de Privacidade") — sugere que o **rodapé tem fundo escuro** (texto claro sobre fundo escuro), embora a cor exata do fundo do footer não esteja inline |
| Cinza médio | `#5E5E5E` | Texto de nota/legenda pequena (asterisco de rodapé de seção, tipo "*Podem ser aplicadas tarifas...") |

**Padrão de alternância de fundo por seção (ordem real, de cima para baixo):**

| # | Fundo | Conteúdo (H2 da seção, quando houver) |
|---|---|---|
| 1 | `#FCF5EB` creme | Hero — "Ligações a uma chamada de distância" (H1) |
| 2 | `#FCF5EB` creme | "Faça chamadas de forma fácil e privada" |
| 3 | `#E6FFDA` verde claro | (carrossel de dispositivos, sem H2 próprio) |
| 4 | `#FCF5EB` creme | "Chamadas para grupos" |
| 5 | `#E6FFDA` verde claro | (grid de funcionalidades: efeitos de vídeo, partilha de ecrã, reações...) |
| 6 | `#FCF5EB` creme | "Continue a conversar" (continuidade entre dispositivos) |
| 7 | `#FFFFFF` branco | "Precisa de mais ajuda?" (FAQ em acordeão) |
| 8 | `#FFFFFF` branco | (continuação da seção de ajuda) |
| 9 | `#E6FFDA` verde claro | "Explore mais funcionalidades do WhatsApp" (cards de navegação final, com `border-bottom-color:#111B21`) |

---

## 3. Estrutura da página (outline confirmado pelos headings)

```
<header>                         fundo #FCF5EB, borda inferior 1px #111B21
<div id="content-wrapper">
  <section 1> H1: "Ligações a uma chamada de distância" + CTA "Descarregar"
  <section 2> H2: "Faça chamadas de forma fácil e privada"
              H3 (pares, versão mobile+desktop do mesmo conteúdo):
                – Mantenha o contacto em vários dispositivos
                – Ouça e veja as pessoas com nitidez
                – Preserve a privacidade
  <section 3> Carrossel de imagens (auto-rotate, sem H2)
  <section 4> H2: "Chamadas para grupos"
  <section 5> H3 (pares):
                – Adicione efeitos de vídeo
                – Partilhe o seu ecrã
                – Reaja em chamadas e levante a mão para falar
                – Chamadas em ecrãs maiores
                – Agende chamadas de grupo
                – Inicie as chamadas de forma silenciosa
  <section 6> H2: "Continue a conversar"
              H3: Chamadas no iPad · Computador · WhatsApp Web ·
                  Apple Watch · CarPlay/Android Auto
  <section 7> H2: "Precisa de mais ajuda?" — FAQ em acordeão (5 perguntas, H3)
  <section 8> (continuação da área de ajuda/links)
  <section 9> H2: "Explore mais funcionalidades do WhatsApp"
              H3: Envie mensagens privadas · Crie uma comunidade ·
                  Faça mais com a Meta AI · Expresse-se · WhatsApp Business
</div>
<footer>                          H4: "O que fazemos" / "Quem somos" /
                                  "Usar o WhatsApp" / "Precisa de ajuda?"
                                  + seletor de idioma + copyright
```

Cada bloco de conteúdo aparece **duas vezes no DOM** (um H3 repetido) — padrão comum de sites Meta para servir versões diferentes para mobile/desktop e trocar via CSS (`display:none` num breakpoint), não é duplicação de conteúdo visível simultaneamente.

---

## 4. Sistema de componentes "WAUI" (nomes reais encontrados no código)

Estes nomes de classe **não são hash** — são nomes de componente legíveis, confirmando a arquitetura do design system:

| Componente | Classe | Função observada |
|---|---|---|
| Seção de página | `_wauiSection__mediumWidth` | Container de seção com largura "média" (deve existir também `smallWidth`/`largeWidth`/`fullWidth` em outras páginas do site, não usados aqui) |
| Layout flexível | `_wauiFlexLayout__columnGapNone`, `_wauiFlexLayout__rowGapNone` | Utilitário de gap zero em flex containers (nomenclatura sugere que existe uma escala de gap: None / Small / Medium / Large etc.) |
| Wrapper de animação | `_wauiAnimationWrapper__root`, `_wauiAnimationWrapper__content` | Envolve blocos que fazem fade-in + slide ao entrar na viewport |
| Ícone | `_wauiIcon__chevronRight`, `_wauiIcon__download-alternative`, `_wauiIcon__facebook-alt`, `_wauiIcon__instagram`, `_wauiIcon__youtube`, `_wauiIcon__play`, `_wauiIcon__pause` | Biblioteca de ícones nomeados por função, SVG custom (não é Lucide/Font Awesome) |
| Carrossel | `_wauiImageRotator__next` | Botão de avançar de um carrossel de imagens autoplay |
| CTA de navegação (mobile) | `_wauiCTA__business-nav-mobile` | Botão de call-to-action específico do menu mobile |

---

## 5. Ícones

- SVG inline, custom (não é uma lib pública tipo Lucide/Feather).
- Cor controlada via `currentColor` + variáveis CSS customizadas: `--custom-svg-icon-fill` e `--custom-svg-icon-stroke`, setadas inline por contexto (ex.: `#111B21` no header, `#1C1E21` no corpo). Isso permite recolorir o mesmo ícone sem duplicar o SVG — **um padrão bom para replicar**.
- `stroke="transparent"` é o padrão quando o ícone é só preenchido (fill), ativado seletivamente quando o ícone precisa de contorno.

---

## 6. Botões / CTAs

- Botão principal ("Descarregar"): classe base `_aeo8` + modificadoras de contexto (a mesma classe base `_aeo8` é reaproveitada em links de navegação, então **não é exclusiva de botão "primary"** — o sistema trata link de texto e botão de CTA com a mesma classe raiz, variando modificadores).
- Sempre no padrão **texto + ícone à direita** (ícone de download, `_wauiIcon__download-alternative`).
- Aparece de forma consistente no header, no hero e no footer — é o CTA universal do site (baixar o app), reforçado em múltiplos pontos da página.
- Border-radius e padding exatos: **não confirmáveis** neste export (só existem no CSS externo). Visualmente (conhecimento geral da marca) o WhatsApp usa botões bem arredondados/pílula — trate como estimativa a validar no navegador.

---

## 7. Carrossel / Rotator

Dados confirmados via `style` inline:
- Variável `--item-duration: 8000ms` → **troca de slide a cada 8 segundos** (autoplay).
- Transform de cada slide: `translateX(0%)`, `translateX(100%)`, `translateX(200%)` ... até `translateX(500%)` → **6 slides** posicionados lado a lado e deslocados via `transform`.
- Transição: `opacity 300ms, transform 300ms, visibility 300ms`.
- Indicador de progresso: um `<hr>` fino com `background-color:#111B21`, mais botões "diapositivo anterior/seguinte" (setas prev/next, `_wauiImageRotator__next`).

---

## 8. Animação de entrada (scroll reveal)

- Wrapper: `_wauiAnimationWrapper__content` com `transition: opacity 300ms, transform 300ms, visibility 300ms`.
- `transition-delay` escalonado por elemento (`0ms`, `2ms`, `330ms` observados) → cria efeito de **entrada em cascata** (stagger) quando vários elementos aparecem juntos na viewport, em vez de todos ao mesmo tempo.
- Estado inicial provável: opacidade 0 + leve deslocamento (translate), animando para opacidade 1 + posição final — padrão clássico de "fade + rise" ao rolar a página (não confirmável em detalhe pixel a pixel sem o CSS externo, mas a mecânica de transição está confirmada).

---

## 9. Grid / Layout

- Menu dropdown de navegação (desktop): fundo branco (`--nav-dropdown-menu-background-color:#FFFFFF`), estrutura em `display:grid` com 3 linhas (`grid-template-rows: auto auto auto`) e, dentro de cada linha, colunas com `column-gap: 88px` — um mega-menu de navegação organizado em grade.
- Seções de conteúdo: container de largura "média" (`_wauiSection__mediumWidth`) centralizado — mesmo princípio da tela de login anterior (conteúdo com largura máxima, centralizado na página), mas aqui a largura exata não está exposta como valor arbitrário legível (ao contrário do Tailwind da tela do Instinct).

---

## 10. Tipografia

**Não confirmável neste export** — nenhuma ocorrência de `font-family`, tamanho de fonte só apareceu uma vez inline (`font-size:12px`, contexto pontual, não a escala principal). O que se sabe por convenção pública da marca (não confirmado neste arquivo, use como ponto de partida e valide no navegador):
- Título grande no hero, peso forte, sem serifa.
- Corpo em sans-serif de sistema/neutra.
- Para pegar os valores reais: abra a página no navegador → inspecionar `<h1>`, `<h2>`, `<p>` → aba *Computed* → `font-family`, `font-size`, `font-weight`, `line-height`.

---

## 11. Limitações deste export (leia antes de replicar)

Diferente da tela de login do Instinct (Tailwind, valores de tamanho/espaçamento ficam escritos nas próprias classes), esta página usa **CSS atômico com hashes** (`_9t2b`, `_afhu` etc.) — sem o arquivo `.css` correspondente, esses nomes não revelam nenhum valor. Os dados confirmados aqui vieram **só** do que os navegadores gravam como `style="..."` inline (valores computados/dinâmicos) e de nomes de classe que por acaso são semânticos (`_waui*`). Não há como recuperar deste HTML: font-family, tamanhos de fonte da escala principal, border-radius, box-shadow, breakpoints e paddings/margins exatos de cada seção.

---

## 12. Como replicar (resumo prático)

1. **Paleta** — 3 fundos de seção alternados: creme `#FCF5EB`, verde claro `#E6FFDA`, branco `#FFFFFF`. Texto principal `#111B21`/`#1C1E21`. Verde de marca `#25D366`/`#43CD66`, com variante escura `#103928` para texto sobre fundo verde.
2. **Ritmo de seções** — alterne os 3 fundos a cada seção para criar variação sem nunca usar branco puro cedo demais (reserve branco para uma seção "utilitária", como FAQ).
3. **Header** — mesma cor de fundo da primeira seção (sem contraste), só uma borda inferior de 1px para separar.
4. **Ícones** — SVGs com `fill="currentColor"`, cor controlada via variável CSS por contexto (permite reuso do mesmo ícone em várias cores sem duplicar arquivo).
5. **CTA universal** — um único botão "Baixar" (texto + ícone), repetido em header, hero e footer, sempre igual.
6. **Carrossel** — autoplay de ~8s, transição de 300ms, com indicador de progresso em barra fina.
7. **Animação de entrada** — fade + transform ao rolar, com atraso escalonado entre elementos do mesmo bloco (cascata).
8. **Tipografia e espaçamento exatos** — precisam ser confirmados via DevTools no site ao vivo; este export não trouxe essa informação.
