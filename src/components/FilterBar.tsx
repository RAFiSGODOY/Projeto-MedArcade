import { Stack, Button, Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface FilterBarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
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
    </Stack>
  )
}