import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#ffff',
      100: '#b3d4ff',
      200: '#80b7ff',
      300: '#4d9aff',
      400: '#1a7dff',
      500: '#5199d0',
      600: '#0052cc',
      700: '#002f55',
      800: '#002f55',
      900: '#002f55',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif ',
    body: 'Inter, system-ui, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
})