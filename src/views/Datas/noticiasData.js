import { createSlug } from './utils'; // Importe a função que cria o slug

export const noticias = [
  {
    id: createSlug('Título da notícia 1'),
    imagem: 'https://cdn.pixabay.com/photo/2025/01/17/16/06/building-9340309_1280.jpg',
    titulo: 'Título da notícia 1',
    subtitulo: 'Subtítulo da notícia 1',
    textoBreve: 'Texto breve da notícia 1',
    textoCompleto: 'Este é o texto completo da notícia 1. Aqui você pode adicionar todo o conteúdo detalhado da notícia, com todas as informações e detalhes que deseja compartilhar.',
    data: '24/01/2025',
    link: '/noticia1'
  },
  {
    id: createSlug('Título da notícia 2'),
    imagem: 'https://cdn.pixabay.com/photo/2024/12/29/21/18/warsaw-9298784_960_720.jpg',
    titulo: 'Título da notícia 2',
    subtitulo: 'Subtítulo da notícia 2',
    textoBreve: 'Texto breve da notícia 2',
    textoCompleto: 'Este é o texto completo da notícia 2. Aqui você pode adicionar todo o conteúdo detalhado da notícia, com todas as informações e detalhes que deseja compartilhar.',
    data: '23/01/2025',
    link: '/noticia2'
  },
  {
    id: createSlug('Título da notícia 3'),
    imagem: 'https://cdn.pixabay.com/photo/2024/11/04/01/41/woman-9172599_960_720.jpg',
    titulo: 'Título da notícia 3',
    subtitulo: 'Subtítulo da notícia 3',
    textoBreve: 'Texto breve da notícia 3',
    textoCompleto: 'Este é o texto completo da notícia 3. Aqui você pode adicionar todo o conteúdo detalhado da notícia, com todas as informações e detalhes que deseja compartilhar.',
    data: '22/01/2025',
    link: '/noticia3'
  },
  {
    id: createSlug('Título da notícia 4'),
    imagem: 'https://cdn.pixabay.com/photo/2020/09/14/07/40/vehicle-5570248_960_720.jpg',
    titulo: 'Título da notícia 4',
    subtitulo: 'Subtítulo da notícia 4',
    textoBreve: 'Texto breve da notícia 4',
    textoCompleto: 'Este é o texto completo da notícia 4. Aqui você pode adicionar todo o conteúdo detalhado da notícia, com todas as informações e detalhes que deseja compartilhar.',
    data: '24/01/2025',
    link: '/noticia4'
  },
  {
    id: createSlug('Título da notícia 5'),
    imagem: 'https://cdn.pixabay.com/photo/2024/02/05/10/48/birds-8554199_1280.jpg',
    titulo: 'Título da notícia 5',
    subtitulo: 'Subtítulo da notícia 5',
    textoBreve: 'Texto breve da notícia 5',
    textoCompleto: 'Este é o texto completo da notícia 5. Aqui você pode adicionar todo o conteúdo detalhado da notícia, com todas as informações e detalhes que deseja compartilhar.',
    data: '23/01/2025',
    link: '/noticia5'
  },
  {
    id: createSlug('Título da notícia 6'),
    imagem: 'https://cdn.pixabay.com/photo/2023/07/27/14/52/universe-8153526_1280.jpg',
    titulo: 'Título da notícia 6',
    subtitulo: 'Subtítulo da notícia 6',
    textoBreve: 'Texto breve da notícia 6',
    textoCompleto: 'Este é o texto completo da notícia 6. Aqui você pode adicionar todo o conteúdo detalhado da notícia, com todas as informações e detalhes que deseja compartilhar.',
    data: '22/01/2025',
    link: '/noticia6'
  }
];
