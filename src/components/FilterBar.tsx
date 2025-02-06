import { Stack, Button } from '@chakra-ui/react'

interface FilterBarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { label: 'Todas', value: '' },
  { label: 'Anatomia', value: 'Anatomia' },
  { label: 'Fisiologia', value: 'Fisiologia' },
  { label: 'Diagnóstico', value: 'Diagnóstico' },
  { label: 'Cirurgia', value: 'Cirurgia' }
]

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <Stack 
      direction={{ base: 'column', sm: 'row' }} // Alinhamento responsivo
      spacing={4} 
      mb={8} 
      justify="center"
      align="center" // Alinha os botões no centro
    >
      {/* Loop para renderizar os botões */}
      {categories.map((category) => (
        <Button
          key={category.value} // Usando o valor da categoria como chave
          variant={selectedCategory === category.value ? 'solid' : 'solid'}
          colorScheme={selectedCategory === category.value ? 'brand.900' : 'brand.900'} // Cor fixa para o botão selecionado
          bg={selectedCategory === category.value ? 'brand.500' : 'brand.100'} // Cor de fundo personalizada para o selecionado
          color={selectedCategory === category.value ? 'white' : 'white'} // Cor do texto
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </Stack>
  )
}
