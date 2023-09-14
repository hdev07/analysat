import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

const themeDark = {
  dark: true,
  colors: {
    primary: '#3b82f6',
    secondary: '#03B5CF',
    tertary: '#1A1A1A'
  }
}

const theme = {
  defaultTheme: 'themeDark',
  themes: {
    themeDark
  }
}

const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    mdi,
    fa
  }
}

export const vuetify = createVuetify({
  components,
  directives,
  theme,
  icons
})
