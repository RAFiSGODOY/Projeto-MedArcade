import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Heading,
  Divider,
  useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'
import RatingModal from './RatingModal'

interface GameCardProps {
  image: string
  title: string
  description: string
  category: string
  difficulty: string
  gameUrl: string
  rating: number
  ratingCount: number
}

export default function GameCard({
  image,
  title,
  description,
  category,
  difficulty,
  gameUrl,
  rating,
  ratingCount,
}: GameCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleRatingSubmit = (newRating: number, comment: string) => {
    // Here you would typically send the rating to your backend
    console.log({ gameTitle: title, rating: newRating, comment })
  }

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={useColorModeValue('white', 'gray.800')}
        transition="transform 0.2s"
        _hover={{ transform: 'translateY(-4px)' }}
        boxShadow="md"
      >
        <Box position="relative">
          <Image src={image} alt={title} height="200px" width="100%" objectFit="cover" />
          <Badge
            position="absolute"
            top={2}
            right={2}
            px={2}
            py={1}
            colorScheme="brand"
            borderRadius="full"
          >
            {category}
          </Badge>
        </Box>

        <Stack p={6} spacing={3}>
          <Heading size="md" color={useColorModeValue('gray.700', 'white')}>
            {title}
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')}>
            {description}
          </Text>
          <Box
            onClick={onOpen}
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          >
            <RatingStars rating={rating} count={ratingCount} />
          </Box>
          <Divider />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Badge colorScheme={
              difficulty === 'Básico' ? 'green' :
              difficulty === 'Intermediário' ? 'yellow' :
              'red'
            }>
              {difficulty}
            </Badge>
            <Link to={gameUrl}>
              <Button rightIcon={<span>→</span>}>
                Jogar Agora
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>

      <RatingModal
        isOpen={isOpen}
        onClose={onClose}
        gameTitle={title}
        onSubmit={handleRatingSubmit}
      />
    </>
  )
}