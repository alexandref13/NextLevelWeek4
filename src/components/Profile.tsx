import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ProfileContext } from '../contexts/ProfileContext'
import { Container } from '../styles/components/Profile'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { user } = useContext(ProfileContext)
  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <strong>{user.login}</strong>
        <p>
          <img src="icons/level.svg" alt="levelIcon" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}
