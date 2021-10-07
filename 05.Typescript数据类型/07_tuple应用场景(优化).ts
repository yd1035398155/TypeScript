function useState<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}
const [counter, setCounter] = useState(10)
const [title, setTitle] = useState("ABC")

// type mfn = () => void
// const fn: mfn = () => {}
export {}
