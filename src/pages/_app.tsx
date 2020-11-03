import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

// Pode usar o next-images para tratar as imagens ou colocar tudo em public e fazer a acahamar como '/exemplo.png'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
