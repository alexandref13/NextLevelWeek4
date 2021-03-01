import Cookies from 'js-cookie'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { api } from '../service/api'

export const ProfileContext = createContext({} as ProfileContextData)

interface ProfileProviderProps {
  children: ReactNode
  name: string
  avatar_url: string
  login: string
}

interface ProfileContextData {
  user: UserProps
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<UserProps>>
  getUser: () => void
}

interface UserProps {
  login: string
  avatar_url: string
  name: string
}

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {
  const [user, setUser] = useState(rest ?? ({} as UserProps))
  const [username, setUsername] = useState(rest.login === "undefined" ? '' : rest.login)

  useEffect(() => {
    Cookies.set('login', user.login)
    Cookies.set('avatar_url', user.avatar_url)
    Cookies.set('name', user.name)
  }, [user])

  async function getUser() {
    const response = await api.get(`/users/${username}`)
    setUser(response.data)
  }
  return (
    <ProfileContext.Provider
      value={{ user, username, setUsername, setUser, getUser }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
