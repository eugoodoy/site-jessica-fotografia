# Estúdio de Fotografia - Site de Portfólio

## 1. Project Description
Site institucional para divulgação de serviços de fotografia profissional. O fotógrafo possui 10 anos de experiência em casamentos, cerimônias, pré-wedding e eventos corporativos. O objetivo é atrair novos clientes com um design sofisticado, galerias impactantes e informações claras de contato.

**Público-alvo:** Noivos, empresas e famílias buscando serviços de fotografia profissional para eventos.
**Valor principal:** Apresentar o portfólio visual com credibilidade de 10 anos de mercado e facilitar o contato para orçamentos.

## 2. Page Structure
- `/` - Home (hero, serviços, destaques, depoimento, CTA)
- `/portfolio` - Portfólio (filtros por categoria: casamentos, corporativo, pré-wedding, cerimônias)
- `/galeria` - Galeria (grade de fotos em alta resolução, lightbox)
- `/blog` - Blog (artigos sobre fotografia, dicas, bastidores)
- `/contato` - Contato (formulário, informações, redes sociais)

## 3. Core Features
- [ ] Hero impactante com fotografia de fundo e navegação sofisticada
- [ ] Seção de serviços com cards visuais
- [ ] Galeria/portfólio com filtro por categoria
- [ ] Lightbox para visualização em tela cheia
- [ ] Depoimentos de clientes
- [ ] Formulário de contato funcional
- [ ] Blog com posts e navegação
- [ ] Animações de scroll e transições elegantes
- [ ] SEO otimizado para buscas locais

## 4. Data Model Design
Não requer banco de dados inicialmente. Dados serão gerenciados via:
- Mock data para portfólio, galeria e blog
- Formulário de contato via Readdy Forms
- Futuramente, Supabase pode ser conectado para blog dinâmico

## 5. Backend / Third-party Integration Plan
- Supabase: Não conectado inicialmente. Pode ser adicionado futuramente para blog dinâmico.
- Shopify: Não aplicável (serviços, não produtos físicos).
- Stripe: Não aplicável (orçamentos via contato, não pagamento online).
- Readdy Forms: Formulário de contato para receber mensagens por e-mail.

## 6. Development Phase Plan

### Phase 1: Homepage
- Goal: Criar a página inicial completa com hero, serviços, galeria destaque, depoimento, sobre e CTA.
- Deliverable: Página `/` funcional e visualmente impactante.

### Phase 2: Portfólio e Galeria
- Goal: Criar páginas de portfólio com filtros e galeria com lightbox.
- Deliverable: Páginas `/portfolio` e `/galeria` funcionais.

### Phase 3: Blog e Contato
- Goal: Criar blog com posts e página de contato com formulário.
- Deliverable: Páginas `/blog` e `/contato` funcionais.

### Phase 4: Ajustes Finais e Animações
- Goal: Adicionar animações de scroll, transições de página, e otimizações finais.
- Deliverable: Site completo com experiência premium.