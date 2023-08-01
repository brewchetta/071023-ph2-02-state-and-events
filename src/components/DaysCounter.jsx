import { useState } from 'react'

function DaysCounter() {

  console.log('I AM RE-RENDERING!!!')

  const [days, setDays] = useState(7)

  function decrementDays() {
    setDays(days - 1)
  }

  return (

    <button onClick={ decrementDays }>
      { days > 0 ? `${days} Days Until School Starts` : 'School has started get HYPE!' }
    </button>

)

}

export default DaysCounter
