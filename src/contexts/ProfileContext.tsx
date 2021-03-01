import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { IsNotLogged } from '../components/isNotLogged'

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
  isLogged: boolean
  setUsername: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<UserProps>>
  getUser: () => void
  closeIsLoggedModal: () => void
}

interface UserProps {
  login: string
  avatar_url: string
  name: string
}

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {
  const route = useRouter()

  const [user, setUser] = useState(rest ?? ({} as UserProps))
  const [username, setUsername] = useState(
    rest.login === 'undefined' ? '' : rest.login
  )
  const [isLogged, setIsLogged] = useState(true)

  async function getUser() {
    try {
      const response = await api.get(`/users/${username}`)
      setUser(response.data)
      setIsLogged(true)
    } catch (err) {
      route.back()
      setIsLogged(false)
    }
  }

  function removeCookies() {
    Cookies.remove('login')
    Cookies.remove('name')
    Cookies.remove('avatar_url')
  }

  function closeIsLoggedModal() {
    setIsLogged(true)
  }

  useEffect(() => {
    const login = Cookies.get('login')
    if (!login || login === 'undefined') {
      removeCookies()
    } else {
      route.push('/dashboard')
    }
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        user,
        username,
        isLogged,
        setUsername,
        setUser,
        getUser,
        closeIsLoggedModal
      }}
    >
      {children}
      {!isLogged && <IsNotLogged />}
    </ProfileContext.Provider>
  )
}
