import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Textarea,
  Text,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import RatingStars from './RatingStars'

interface RatingModalProps {
  isOpen: boolean
  onClose: () => void
  gameTitle: string
  onSubmit: (rating: number, comment: string) => void
}

export default function RatingModal({ isOpen, onClose, gameTitle, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
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

    onSubmit(rating, comment)
    setRating(0)
    setComment('')
    onClose()
    
    toast({
      title: 'Avaliação enviada',
      description: 'Obrigado por avaliar este jogo!',
      status: 'success',
      duration: 3000,
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="brand.900" display='flex'  >Avaliar <Text marginLeft='2' color="brand.500">{gameTitle} </Text></ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="stretch">
            <Text>Sua avaliação:</Text>
            <RatingStars rating={rating} count={0} onRate={setRating} />
            <Text>Comentário (opcional):</Text>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Compartilhe sua experiência com este jogo..."
              resize="vertical"
            />
            <Button colorScheme="brand" onClick={handleSubmit}>
              Enviar Avaliação
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}