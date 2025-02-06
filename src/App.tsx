import { ChakraProvider, Container } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme'
import Header from './components/Header'
import GameGrid from './components/GameGrid'
import SiteFeedback from './components/SiteFeedback'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Container maxW="container.xl" py={8}>
          <GameGrid />
        </Container>
        <SiteFeedback />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App