import Head from 'next/head'
import React from 'react'
import { ProfileProvider } from '../contexts/ProfileContext'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider
      name={pageProps.name}
      avatar_url={pageProps.avatar_url}
      login={pageProps.login}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ProfileProvider>
  )
}

MyApp.getInitialProps = async appctx => {
  const { ctx } = appctx

  const { name, avatar_url, login } = ctx.req.cookies

  return { pageProps: { name, avatar_url, login } }
}

export default MyApp
