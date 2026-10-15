# Índice Geral do Site — J'Cell Acessórios e Variedades

Guia e índice de navegação, arquitetura de componentes, rotas, seções e recursos do site da **J'Cell Acessórios e Variedades** (Nanuque - MG).

---

## 1. Informações Institucionais da Marca

- **Razão / Nome Fantasia**: J'Cell Acessórios e Variedades
- **Localização**: Rua Caxambu, nº 396 (Calçadão), Loja, Centro, Nanuque - MG, CEP 39860-000
- **WhatsApp da Loja**: `(33) 98848-6145` (`5533988486145`)
- **WhatsApp da Oficina Técnica**: `(33) 99869-0771` (`5533998690771`)
- **Instagram Oficial**: [@jcellnanuque](https://www.instagram.com/jcellnanuque/)
- **Google Maps**: [Abrir no Google Maps](https://maps.app.goo.gl/riBqDqy9RdCqkbeQ8)

---

## 2. Mapa de Seções e Âncoras do Site

| Âncora | Seção | Componente | Descrição Principal |
| :--- | :--- | :--- | :--- |
| `#inicio` | **Hero Inicial** | `HeroSection.tsx` | Identidade oficial J'Cell, logotipo, chamadas de ação para WhatsApp e Instagram |
| `#sobre` | **Quem Somos** | `AboutSection.tsx` | Layout Hero Split: Fachada no Calçadão à esquerda e história de 20 anos à direita |
| `#produtos` | **Nossos Produtos** | `ProductsSection.tsx` | Carrossel dinâmico com fotos verticais (9:16), lazy loading e modal em tela cheia |
| `#pelicula` | **Película de Hidrogel** | `FilmSection.tsx` | Corte computadorizado sob medida para todas as marcas com demonstração visual |
| `#oficina` | **Assistência Técnica** | `WorkshopSection.tsx` | Oficina especializada, 6 modalidades de conserto, arte técnica e orçamento direto |
| `#video` | **Instagram & Mídia** | `VideoSection.tsx` | Destaque institucional com integração direta ao Instagram oficial |
| `#localizacao` | **Onde Estamos** | `LocationSection.tsx` | Mapa interativo do Calçadão de Nanuque com rota GPS no Google Maps |
| `—` | **Rodapé** | `Footer.tsx` | Créditos, botões minimalistas de WhatsApp Loja, WhatsApp Oficina e Instagram |

---

## 3. Arquitetura de Arquivos e Código

```
├── index.html                    # Entrada HTML, meta tags SEO, Open Graph e Schema.org JSON-LD
├── INDEX.md                      # Índice estrutural e documentação completa do site
├── public/
│   ├── images/                   # Artes oficiais locais (fachada, máquina, oficina, produtos, logo)
│   ├── sitemap.xml               # Índice de URLs e seções para buscadores (Google, Bing)
│   └── robots.txt                # Instruções para robôs de indexação
├── src/
│   ├── App.tsx                   # Componente raiz com o sistema global de fundos vermelhos
│   ├── index.ts                  # Export central do site (App, componentes e dados)
│   ├── main.tsx                  # Ponto de montagem React no DOM
│   ├── index.css                 # Estilos globais Tailwind, barra de rolagem fina e animações
│   ├── data/
│   │   └── mockData.ts           # Dados oficiais centralizados (loja, oficina, catálogo e mídias)
│   └── components/
│       ├── index.ts              # Export central modular de todos os componentes
│       ├── Navbar.tsx            # Barra de navegação com menu móvel e atalhos rápidos
│       ├── HeroSection.tsx       # Seção de abertura com logotipo e CTAs
│       ├── AboutSection.tsx      # Seção institucional em split desktop
│       ├── ProductsSection.tsx   # Vitrine de produtos com carrossel e lazy loading
│       ├── FilmSection.tsx       # Apresentação do serviço de películas de hidrogel
│       ├── WorkshopSection.tsx   # Seção de assistência técnica para celulares e tablets
│       ├── VideoSection.tsx      # Integração de mídia e Instagram
│       ├── LocationSection.tsx   # Seção do endereço, calçadão e mapa
│       ├── Footer.tsx            # Rodapé institucional com ícones de contato
│       ├── WhatsAppFloating.tsx  # Botão flutuante de WhatsApp com acesso rápido aos dois números
│       ├── ShareModal.tsx        # Modal para compartilhamento social
│       └── ImageWithFallback.tsx # Componente de imagem com IntersectionObserver lazy loading
```

---

## 4. Paleta de Cores Oficial

- **Vermelho Principal**: `#E7192D` (identidade marcante e comercial)
- **Vermelho de Transição**: `#C81024` (gradientes médios)
- **Vermelho Profundo**: `#850A19` (base de contraste sofisticada)
- **Grafite**: `#171313` (detalhes e bases de alto contraste)
- **Cards Escuros**: `#222020` (destaque de cartões e informações)
- **Branco para Títulos**: `#FFFFFF`
- **Cinza-Claro para Textos**: `#D2CACC`
