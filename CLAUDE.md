# CLAUDE.md — ADVENTUREBLOGGERS

Site gerado pelo **SF (Site Factory)** em 15/04/2026.

## Contexto do Site

**Nome:** ADVENTUREBLOGGERS
**Nicho:** Viagens e Turismo
**Keywords:** Somos 5 blogueiros viajantes que dividimos este espaco para compartilhar nossas aventuras
**Paleta de cores:** slate | **Fonte:** outfit

Somos 5 blogueiros viajantes que dividimos este espaço para compartilhar nossas aventuras, dicas de viagens e Lifestyle.. Nós percebemos que o mundo dos blogs é gigante e existem muitos conteúdos iguais.. Pensando em como resolver esse problema nós entramos em contato com nômades bem experientes para que eles escrevessem em nosso Blog ou simplesmente trouxessem conteúdos “fora da caixa”… E é exatamente isso que vem acontecendo! Então esperamos que gostem e tirem proveito dos nossos conteúdos!



## Componentes visuais usados

| Seção | Variante |
|-------|----------|
| Header | Header-J |
| Hero | Hero-D |
| Features | Features-A |
| About Section | About-G |
| Posts | Posts-H |
| Footer | Footer-F |
| Página Sobre | Sobre-F |
| Página Contato | Contato-C |

## Estrutura do projeto

```
src/
  sections/        # Layout escolhido pelo SF — Header, Hero, Features, About, Posts, Footer, Sobre, Contato
  data/            # JSONs com todo o conteúdo editável
  content/blog/    # Posts em Markdown
  pages/           # Rotas Astro (index, sobre, contato, blog, privacidade, termos)
  layouts/         # BaseLayout com fonte e cores dinâmicas
  styles/          # global.css com variáveis CSS de cor
public/
  images/          # hero.jpg, about.jpg, blog/*.jpg — inseridos automaticamente via Pexels
```

## O que editar

### Textos e conteúdo
- **`src/data/home.json`** — hero (título, subtítulo, botão), features (título, items), about section (título, desc, stats), posts
- **`src/data/sobre.json`** — conteúdo completo da página Sobre (hero, texto, missão)
- **`src/data/contato.json`** — título, subtítulo, email, tempo de resposta
- **`src/data/siteConfig.json`** — nome, slug, email, redes sociais, menu

### Imagens
Imagens já estão em `public/images/` (via Pexels). Para substituir, mantenha os mesmos nomes de arquivo:
- `hero.jpg` — imagem de fundo do Hero
- `about.jpg` — imagem da seção About (home)
- `sobre.jpg` — imagem de fundo da página Sobre
- `blog/{slug}.jpg` — imagens dos posts

### Posts do blog
Arquivos em `src/content/blog/`. Ajuste o tom de voz, adicione dados específicos do nicho e personalize conforme a identidade do site.

### Cores
Variáveis em `src/styles/global.css`: `--color-primary`, `--color-accent`, `--color-dark`.

## Deploy

```bash
bun install
bun run build
# Faça upload da pasta dist/ para Netlify, Vercel ou hosting estático
```
