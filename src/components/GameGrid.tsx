import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import GameCard from './GameCard'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import { games, categories } from '../data'

export default function GameGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || game.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <Box>
      <Box textAlign="center" mb={12}>
        <Heading as="h1" size="2xl" mb={4} color="brand.600">
          Aprenda Medicina Jogando
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
          Explore nossa coleção de jogos educacionais desenvolvidos especialmente para profissionais e estudantes de medicina
        </Text>
      </Box>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={12}>
        {filteredGames.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </SimpleGrid>

      <Box bg="white" rounded="xl" p={8} shadow="sm">
        <Heading size="lg" mb={6} color="brand.600">
          Categorias em Destaque
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {categories.map((category) => (
            <Box
              key={category.name}
              p={4}
              bg="gray.50"
              rounded="xl"
              textAlign="center"
              transition="all 0.2s"
              _hover={{ bg: 'brand.50', transform: 'translateY(-2px)' }}
              cursor="pointer"
              onClick={() => setSelectedCategory(category.name)}
            >
              <Text fontWeight="medium" color="gray.900">
                {category.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {category.count} jogos
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}