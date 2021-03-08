import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { ProfileContext } from '../../contexts/ProfileContext'

import {
  Container,
  Symbol,
  Welcome,
  GithubContainer,
  InputContainer
} from '../../styles/pages/Login'

export default function Login() {
  const { username, setUsername } = useContext(ProfileContext)

  function setUser() {
    setUsername(username)
  }

  return (
    <Container>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <Symbol>
        <img src="/Simbolo.svg" alt="" />
      </Symbol>
      <Welcome>
        <main>
          <img src="/logoMoveit.svg" alt="Logo" />
          <strong>Bem-vindo</strong>
          <GithubContainer>
            <img src="/icons/github.svg" alt="Github" />
            <p>Faça login com seu Github para começar</p>
          </GithubContainer>
          <InputContainer>
            <input
              type="text"
              placeholder="Digite seu username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <Link href="/dashboard">
              <button type="button" onClick={setUser}>
                <img src="/icons/right-arrow.svg" alt="Flecha para direita" />
              </button>
            </Link>
          </InputContainer>
        </main>
      </Welcome>
    </Container>
  )
}
