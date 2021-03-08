import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string
      background: string
      grayLine: string
      text: string
      textHighlight: string
      title: string
      red: string
      green: string
      blue: string
      blueDark: string
      blueTwitter: string
    }
  }
}
