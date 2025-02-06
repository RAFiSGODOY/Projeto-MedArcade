import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Container,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link to="/">
            <Heading size="lg" color="brand.500">MedArcade</Heading>
          </Link>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Link to="/jogos">
                <Button variant="ghost">Jogos</Button>
              </Link>
              <Link to="/categorias">
                <Button variant="ghost">Categorias</Button>
              </Link>
              <Link to="/sobre">
                <Button variant="ghost">Sobre</Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}