import { useEffect } from 'react'
import useAuth from './useAuth'

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {

    const item = window.localStorage.getItem("flag")
    if (item === 'true') {
      login("injected")
    }
  }, [login])
}

export default useEagerConnect
