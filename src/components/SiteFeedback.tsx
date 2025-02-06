import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Textarea,
  Text,
  useToast,
  Icon
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import RatingStars from './RatingStars'

export default function SiteFeedback() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const toast = useToast()

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        title: 'Avaliação necessária',
        description: 'Por favor, selecione uma classificação antes de enviar.',
        status: 'error',
        duration: 3000,
      })
      return
    }

    // Here you would typically send the feedback to your backend
    console.log({ rating, feedback })
    
    setRating(0)
    setFeedback('')
    onClose()
    
    toast({
      title: 'Feedback enviado',
      description: 'Obrigado por avaliar o MedArcade!',
      status: 'success',
      duration: 3000,
    })
  }

  return (
    <>
      <Box position="fixed" bottom="4" right="4">
        <Button
          onClick={onOpen}
          colorScheme="brand"
          leftIcon={<Icon as={ChatIcon} />}
          size="lg"
          shadow="lg"
        >
          Avaliar Site
        </Button>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Avalie o MedArcade</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Text>Como você avalia sua experiência?</Text>
              <RatingStars rating={rating} count={0} onRate={setRating} />
              
              <Text>Seu feedback:</Text>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Conte-nos o que podemos melhorar..."
                resize="vertical"
                h="150px"
              />

              <Button colorScheme="brand" onClick={handleSubmit}>
                Enviar Feedback
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}