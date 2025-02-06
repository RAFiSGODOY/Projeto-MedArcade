import { HStack, Icon, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface RatingStarsProps {
  rating: number
  count: number
  onRate?: (rating: number) => void
}

export default function RatingStars({ rating, count, onRate }: RatingStarsProps) {
  return (
    <HStack spacing={2}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          as={StarIcon}
          color={star <= rating ? 'yellow.400' : 'gray.300'}
          cursor={onRate ? 'pointer' : 'default'}
          onClick={() => onRate?.(star)}
          w={4}
          h={4}
        />
      ))}
      <Text fontSize="sm" color="gray.500">({count})</Text>
    </HStack>
  )
}