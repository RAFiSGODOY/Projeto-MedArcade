import {
  Box,
  Image,
  Badge,
  Stack,
  Button,
  useColorModeValue,
  Heading,
  Divider
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface GameCardProps {
  image: string
  title: string
  category: string
  gameUrl: string
}

export default function GameCard({
  image,
  title,
  category,
  gameUrl
}: GameCardProps) {

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        borderColor={useColorModeValue('blue', 'white')}
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
            textColor="black"
            bgColor="orange"
            borderRadius="full"
          >
            {category}
          </Badge>
        </Box>
        <Stack p={6} spacing={3}>
          <Heading size="md" color={useColorModeValue('gray.700', 'white')}>
            {title}
          </Heading>
          <Divider />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link to={gameUrl}>
              <Button>
                Jogar Agora
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}