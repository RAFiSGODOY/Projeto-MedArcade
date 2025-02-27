export const games = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
    title: 'Anatomia Interativa',
    description: 'Explore o corpo humano em 3D e aprenda sobre anatomia de forma interativa',
    category: 'Anatomia',
    difficulty: 'Intermediário',
    gameUrl: '/jogos/anatomia-interativa',
    rating: 4.5,
    ratingCount: 128
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    title: 'Quiz de Diagnóstico',
    description: 'Teste seus conhecimentos em diagnósticos médicos com casos reais',
    category: 'Diagnóstico',
    difficulty: 'Avançado',
    gameUrl: '/jogos/quiz-diagnostico',
    rating: 4.8,
    ratingCount: 256
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
    title: 'Simulador de Cirurgia',
    description: 'Pratique procedimentos cirúrgicos em um ambiente virtual seguro',
    category: 'Cirurgia',
    difficulty: 'Avançado',
    gameUrl: '/jogos/simulador-cirurgia',
    rating: 4.7,
    ratingCount: 184
  }
]

export const categories = [
  { name: 'Anatomia', count: 12 },
  { name: 'Fisiologia', count: 8 },
  { name: 'Diagnóstico', count: 15 },
  { name: 'Cirurgia', count: 6 }
]