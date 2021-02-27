import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/alexandref13.png"
        alt="Alexandre Fernandes"
      />
      <div>
        <strong>Alexandre Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="levelIcon" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
