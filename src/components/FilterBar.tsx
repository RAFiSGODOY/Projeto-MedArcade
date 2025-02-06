import { Stack, Button, Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface FilterBarProps {
  selectedCategory: string
  selectedDifficulty: string
  onCategoryChange: (category: string) => void
  onDifficultyChange: (difficulty: string) => void
}

export default function FilterBar({
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange
}: FilterBarProps) {
  return (
    <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mb={8} justify="center">
      <Menu closeOnSelect={true}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline">
          Categoria
        </MenuButton>
        <MenuList>
          <MenuOptionGroup value={selectedCategory} onChange={(value) => onCategoryChange(value as string)}>
            <MenuItemOption value="">Todas</MenuItemOption>
            <MenuItemOption value="Anatomia">Anatomia</MenuItemOption>
            <MenuItemOption value="Fisiologia">Fisiologia</MenuItemOption>
            <MenuItemOption value="Diagnóstico">Diagnóstico</MenuItemOption>
            <MenuItemOption value="Cirurgia">Cirurgia</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>

      <Menu closeOnSelect={true}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline">
          Dificuldade
        </MenuButton>
        <MenuList>
          <MenuOptionGroup value={selectedDifficulty} onChange={(value) => onDifficultyChange(value as string)}>
            <MenuItemOption value="">Todas</MenuItemOption>
            <MenuItemOption value="Básico">Básico</MenuItemOption>
            <MenuItemOption value="Intermediário">Intermediário</MenuItemOption>
            <MenuItemOption value="Avançado">Avançado</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Stack>
  )
}