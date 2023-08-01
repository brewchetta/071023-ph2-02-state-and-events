import { useState } from 'react'

function HypeLevel() {

  const [currentHype, setCurrentHype] = useState( 0 )

  // currentHype --> current state of the hype
  // setCurrentHype 0 --> changes the state
  // useState(0) --> the initial state

  // hook --> some sort method / function that taps into some of the deeper functionality of react

  function incrementHype() {
    setCurrentHype( currentHype + 1 )
  }

  return (
    <button 
    onClick={ incrementHype }>
        Hype Level {currentHype}
    </button>
  )

}

export default HypeLevel
