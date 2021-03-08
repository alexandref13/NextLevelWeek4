import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CompleteChallenges } from '../components/CompletedChallenges'

import { Container } from '../styles/pages/Dashboard'

interface DashboardProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Dashboard(props: DashboardProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Dashboard | move.it</title>
        </Head>

        <div>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
