import { Box, Center, Container, useColorModeValue } from "@chakra-ui/react"

export default function SimpleFooter() {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            py={10}
        >
            <Container maxW="container.xl">
                <Center textColor={useColorModeValue('blue.700', 'gray.100')}>
                    © {new Date().getFullYear()} Todos os direitos reservados
                </Center>
            </Container>
        </Box>
    )
}
