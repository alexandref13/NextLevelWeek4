import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import { Overlay, Container } from '../styles/components/LevelUpModal'

export function IsNotLogged() {
  const { closeIsLoggedModal } = useContext(ProfileContext)

  return (
    <Overlay>
      <Container>
        <p>Por favor, digite um username válido</p>
        <button type="button" onClick={closeIsLoggedModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  )
}
