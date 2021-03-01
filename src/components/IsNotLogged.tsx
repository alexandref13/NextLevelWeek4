import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function IsNotLogged() {
  const { closeIsLoggedModal } = useContext(ProfileContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p>Por favor, digite um username válido</p>
        <button type="button" onClick={closeIsLoggedModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  )
}
