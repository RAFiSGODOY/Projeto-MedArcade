import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Container,
  Image
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Box 
      bg={useColorModeValue('white', 'gray.800')} 
      px={4} 
      boxShadow="sm" 
      position="sticky" // Tornando o cabeçalho fixo
      top={0} // Fixa o cabeçalho no topo da página
      zIndex="100" // Garantir que o cabeçalho fique acima de outros elementos
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link to="/">
            <Flex alignItems="center">
              <Image src="./assets/images/logoIntegrado.png" alt="Logo MedArcade" boxSize={55}  />
              <Heading size="lg" color="brand.900" display='flex'>Med
              <Heading size="lg" color="brand.500">Arcade</Heading>
              </Heading>
            </Flex>
          </Link>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Link to="/sobre">
                <Button variant="ghost" color="brand.900">Sobre</Button>
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
