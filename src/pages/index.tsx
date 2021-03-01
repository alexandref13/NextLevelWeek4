import { GetServerSideProps } from 'next'
import Login from '../components/pages/LoginPage'

export default function Home(props) {
  return <Login />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}
