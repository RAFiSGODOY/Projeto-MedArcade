<template>
  <div class="min-h-screen bg-gray-50">
    <TheHeader />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section class="mb-12">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Aprenda Medicina Jogando
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção de jogos educacionais desenvolvidos especialmente para estudantes de medicina
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            v-for="game in games"
            :key="game.id"
            v-bind="game"
          />
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Categorias em Destaque</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="category in categories" :key="category.name" 
               class="p-4 bg-gray-50 rounded-xl text-center hover:bg-indigo-50 transition-colors cursor-pointer">
            <h3 class="font-medium text-gray-900">{{ category.name }}</h3>
            <p class="text-sm text-gray-500">{{ category.count }} jogos</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const games = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/png',
    title: 'Anatomia Interativa',
    description: 'Explore o corpo humano em 3D e aprenda sobre anatomia de forma interativa',
    category: 'Anatomia',
    difficulty: 'Intermediário',
    gameUrl: '/jogos/anatomia-interativa'
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/png',
    title: 'Quiz de Diagnóstico',
    description: 'Teste seus conhecimentos em diagnósticos médicos com casos reais',
    category: 'Diagnóstico',
    difficulty: 'Avançado',
    gameUrl: '/jogos/quiz-diagnostico'
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/png',
    title: 'Simulador de Cirurgia',
    description: 'Pratique procedimentos cirúrgicos em um ambiente virtual seguro',
    category: 'Cirurgia',
    difficulty: 'Avançado',
    gameUrl: '/jogos/simulador-cirurgia'
  }
]

const categories = [
  { name: 'Anatomia', count: 12 },
  { name: 'Fisiologia', count: 8 },
  { name: 'Diagnóstico', count: 15 },
  { name: 'Cirurgia', count: 6 }
]
</script>