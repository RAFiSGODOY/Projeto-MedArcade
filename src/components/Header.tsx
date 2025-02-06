import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Container,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} shadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link to="/">
            <Heading size="lg" color={useColorModeValue('brand.500', 'white')}>
              MedArcade
            </Heading>
          </Link>

          {/* Menu para telas maiores */}
          <Stack
            direction="row"
            spacing={7}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            <Link to="/jogos">
              <Button variant="ghost" color={useColorModeValue('brand.500', 'white')}>
                Jogos
              </Button>
            </Link>
            <Link to="/sobre">
              <Button variant="ghost" color={useColorModeValue('brand.500', 'white')}>
                Sobre
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>

          {/* Menu para Mobile */}
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
          />

          {/* Drawer para Menu Mobile */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  <Link to="/jogos">
                    <Button variant="ghost" w="full" onClick={onClose}>
                      Jogos
                    </Button>
                  </Link>
                  <Link to="/sobre">
                    <Button variant="ghost" w="full" onClick={onClose}>
                      Sobre
                    </Button>
                  </Link>
                  <Button w="full" onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
}
