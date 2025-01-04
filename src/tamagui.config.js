import { createTamagui } from 'tamagui'

const config = createTamagui({
  themes: {
    light: {
      color: '#000',
      background: '#fff',
    },
    dark: {
      color: '#fff',
      background: '#000',
    },
  },
  tokens: {
    color: {
      primary: '#007AFF',
    },
    size: {
      small: 12,
      medium: 16,
      large: 20,
    },
  },
  shorthands: {
    bg: 'backgroundColor',
    fg: 'color',
  },
})

export default config
