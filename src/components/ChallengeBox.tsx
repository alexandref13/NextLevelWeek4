import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import {
  Container,
  ChallengeActive,
  ChallengeFailedButton,
  ChallengeSucceededButton,
  ChallengeNotActive
} from '../styles/components/ChallengeBox'

export function ChallengeBox() {
  const { activeChallenges, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengesSucceeded() {
    completeChallenge()
    resetCountdown()
  }
  function handleChallengesFailed() {
    resetChallenge()
    resetCountdown()
  }
  return (
    <Container>
      {activeChallenges ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenges.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton
              type="button"
              onClick={handleChallengesFailed}
            >
              Falhei
            </ChallengeFailedButton>
            <ChallengeSucceededButton
              type="button"
              onClick={handleChallengesSucceeded}
            >
              Completei
            </ChallengeSucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}
