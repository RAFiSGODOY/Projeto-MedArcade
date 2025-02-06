import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import GameCard from './GameCard'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import { games } from '../data'

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
          Pratique seu conhecimento
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

      {filteredGames.length === 0 && (
        <Box mb={12} padding={12}>
          <Text fontSize="xl" color="gray.500" textAlign="center" mt={8}>
            Nenhum jogo encontrado. Tente alterar os filtros ou pesquisar outro termo.
          </Text>
        </Box>
      )}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={12}>
        {filteredGames.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </SimpleGrid>
    </Box>
  )
}