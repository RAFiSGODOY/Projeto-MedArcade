<template>
  <div class="game-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-48 object-cover">
      <div class="absolute top-2 right-2">
        <span class="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
          {{ category }}
        </span>
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-500">
            {{ difficulty }}
          </span>
        </div>
        <NuxtLink 
          :to="gameUrl"
          class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Jogar Agora
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  gameUrl: {
    type: String,
    required: true
  }
})
</script>