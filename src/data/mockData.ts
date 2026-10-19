/**
 * Dados Oficiais da J'Cell Acessórios e Variedades
 * Centralizados para fácil manutenção e integridade visual.
 */

// Se vazio (""), exibe em todo o site apenas "Consulte nosso horário pelo WhatsApp".
// Se preenchido (ex: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00"), exibe o horário.
export const HORARIO = "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00";

// Se preenchido com a URL de um arquivo de vídeo (ex: mp4), exibe o player nativo em 9:16.
// Se vazio (""), exibe o cartão elegante de redirecionamento para o Instagram oficial.
export const VIDEO_URL = "";

export const STORE_INFO = {
  name: "J'Cell Acessórios e Variedades",
  shortName: "J'Cell",
  descriptor: "ACESSÓRIOS E VARIEDADES",
  address: "Rua Caxambu, nº 396 (Calçadão), Loja, Centro, Nanuque - MG, CEP 39860-000",
  cityState: "Nanuque - MG",
  phoneStore: "(33) 98848-6145",
  phoneStoreRaw: "5533988486145",
  phoneWorkshop: "(33) 99869-0771",
  phoneWorkshopRaw: "5533998690771",
  instagramUser: "@jcellnanuque",
  instagramUrl: "https://www.instagram.com/jcellnanuque/",
  googleMapsUrl: "https://maps.app.goo.gl/riBqDqy9RdCqkbeQ8",
  googleMapsEmbed: "https://www.google.com/maps?q=Rua+Caxambu+396+Centro+Nanuque+MG&output=embed",
};

/**
 * URLs oficiais diretas das imagens
 * Servidas com garantia de carregamento local imediato e contingência via CDN.
 */
export const IMAGES = {
  logo: "/images/logo.png",
  logoHero: "/images/logo-hero.png",
  heroBg: "/images/hero-bg.png?v=discreet",
  fachada: "/images/fachada.png",
  maquinaPelicula: "/images/maquina.png",
  capasPeliculas: "/images/capas.png",
  controles: "/images/controles.png",
  carregadores: "/images/carregadores.png",
  fones: "/images/fones.png",
  eletronicos: "/images/eletronicos.png",
  assistenciaTecnica: "/images/oficina.png",
  mapaLocal: "/images/mapa-local.png",
  
  // URLs diretas CDN Kommodo como fallback
  cdn: {
    logo: "https://plain-enam-prod-public.komododecks.com/202610/12/ZFRCC9PP1gthn2jAs6a7/image.jpg",
    logoHero: "https://plain-enam-prod-public.komododecks.com/202610/12/WN3Uy4uhSxKht5ZZYLrV/image.png",
    heroBg: "https://plain-enam-prod-public.komododecks.com/202610/12/ADUKR5kYHkgqzeEP5YRP/image.png",
    fachada: "https://plain-enam-prod-public.komododecks.com/202610/12/1oq5GkDAZu0zUCzdLvch/image.png",
    maquinaPelicula: "https://plain-enam-prod-public.komododecks.com/202610/12/57EtuiupeG9818h43s5J/image.png",
    capasPeliculas: "https://plain-enam-prod-public.komododecks.com/202610/12/roeQmfOsDAq9YHSkntkU/image.png",
    controles: "https://plain-enam-prod-public.komododecks.com/202610/12/zjSi4o2YH8mxl4yKdCvk/image.png",
    carregadores: "https://plain-enam-prod-public.komododecks.com/202610/12/Vwm8ZD48cvfBcaWUWREI/image.png",
    fones: "https://plain-enam-prod-public.komododecks.com/202610/12/T4HasWvleD7Tp2K89dWk/image.png",
    eletronicos: "https://plain-enam-prod-public.komododecks.com/202610/12/VGF42izYBs77bo5uMUrK/image.png",
    assistenciaTecnica: "https://plain-enam-prod-public.komododecks.com/202610/12/xQg0u9nvgVH09JbPJTyx/image.png",
    mapaLocal: "https://plain-enam-prod-public.komododecks.com/202610/13/oOodYXDzsCODeZ0dTW3X/image.png",
  }
};

export interface CatalogItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  whatsappMessage: string;
}

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "capas-peliculas",
    title: "Capas e Películas",
    category: "Proteção",
    image: IMAGES.capasPeliculas,
    description: "Proteção e estilo para diversos modelos de smartphones.",
    whatsappMessage: "Olá! Gostaria de consultar opções de capas e películas na J'Cell.",
  },
  {
    id: "controles",
    title: "Controles para TV",
    category: "Praticidade",
    image: IMAGES.controles,
    description: "Modelos compatíveis com as principais marcas de televisores.",
    whatsappMessage: "Olá! Gostaria de consultar controles para TV na J'Cell.",
  },
  {
    id: "carregadores",
    title: "Carregadores e Cabos",
    category: "Energia",
    image: IMAGES.carregadores,
    description: "Cabos e carregadores para diferentes conexões e aparelhos.",
    whatsappMessage: "Olá! Preciso de carregador ou cabo na J'Cell.",
  },
  {
    id: "fones",
    title: "Fones de Ouvido",
    category: "Áudio",
    image: IMAGES.fones,
    description: "Modelos com fio e sem fio para o seu dia a dia.",
    whatsappMessage: "Olá! Gostaria de saber sobre fones de ouvido na J'Cell.",
  },
  {
    id: "eletronicos",
    title: "Eletrônicos em Geral",
    category: "Variedades",
    image: IMAGES.eletronicos,
    description: "Caixas de som, suportes e periféricos úteis para sua rotina.",
    whatsappMessage: "Olá! Gostaria de conhecer os eletrônicos e variedades da J'Cell.",
  },
];

export interface WorkshopService {
  icon: string;
  title: string;
  description: string;
}

export const WORKSHOP_SERVICES: WorkshopService[] = [
  {
    icon: "fa-mobile-screen",
    title: "Troca de Tela",
    description: "Substituição de telas danificadas, trincadas ou com falhas de funcionamento.",
  },
  {
    icon: "fa-battery-full",
    title: "Troca de Bateria",
    description: "Substituição de baterias com desgaste, baixa autonomia ou problemas de carregamento relacionados à bateria.",
  },
  {
    icon: "fa-plug",
    title: "Troca de Conector de Carga",
    description: "Reparo de problemas no conector que impedem ou dificultam o carregamento do aparelho.",
  },
  {
    icon: "fa-microchip",
    title: "Reparo da Placa de Carga",
    description: "Diagnóstico e reparo de falhas na placa responsável pelo carregamento, conforme o modelo do aparelho.",
  },
  {
    icon: "fa-camera",
    title: "Troca do Vidro da Câmera",
    description: "Substituição do vidro de proteção da câmera quando está quebrado ou danificado.",
  },
  {
    icon: "fa-droplet",
    title: "Desoxidação de Aparelhos",
    description: "Procedimentos técnicos para tratar danos causados por líquidos e oxidação, após avaliação do aparelho.",
  },
  {
    icon: "fa-lock-open",
    title: "Desbloqueio de Conta Google",
    description: "Atendimento para problemas de acesso à conta Google, conforme o modelo e a situação do aparelho, mediante comprovação de propriedade quando necessária.",
  },
  {
    icon: "fa-code",
    title: "Restauração de Software",
    description: "Correção de falhas de sistema e restauração do aparelho para solucionar problemas de funcionamento.",
  },
];
