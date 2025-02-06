import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <InputGroup maxW="600px" mx="auto" mb={8}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.400" />
      </InputLeftElement>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar jogos..."
        bg="white"
        _dark={{ bg: 'gray.700' }}
        size="lg"
        borderRadius="full"
      />
    </InputGroup>
  )
}