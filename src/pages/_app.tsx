import Head from 'next/head'
import React from 'react'

import { ProfileProvider } from '../contexts/ProfileContext'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import light from '../styles/themes/light'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <ProfileProvider
        name={pageProps.name}
        avatar_url={pageProps.avatar_url}
        login={pageProps.login}
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ProfileProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async appctx => {
  const { ctx } = appctx

  const { name, avatar_url, login } = ctx.req.cookies

  return { pageProps: { name, avatar_url, login } }
}

export default MyApp
