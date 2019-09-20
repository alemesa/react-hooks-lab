import React from 'react'
import { useMyHook } from 'react-hooks-lab'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App