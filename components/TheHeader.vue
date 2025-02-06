<template>
  <header class="bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-xl font-bold text-indigo-600">MedArcade</span>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  { name: 'Início', href: '/' },
  { name: 'Jogos', href: '/jogos' },
  { name: 'Categorias', href: '/categorias' },
  { name: 'Sobre', href: '/sobre' }
]
</script>
