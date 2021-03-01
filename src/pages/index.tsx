/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetServerSideProps } from 'next'
import Login from '../components/pages/LoginPage'

export default function Home() {
  return <Login />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}
