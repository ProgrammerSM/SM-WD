import {
  useEffect,
  useState,
} from 'react'

export default function useLocalStorage(key, initialValue, forceUpdate) {
  const localStorageValue = window.localStorage.getItem(key)

  let init
  try {
    init = localStorageValue && !forceUpdate
      ? JSON.parse(localStorageValue)
      : initialValue
  } catch {
    init = initialValue
  }

  const [storedValue, setStoredValue] = useState(init)

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.log(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
