import { useState } from 'react'

function LunchPacked() {

  const [lunchPacked, setLunchPacked] = useState( false )

  function toggleLunchPacked() {
    setLunchPacked( !lunchPacked )
  }

  return (
    <button onClick={ toggleLunchPacked }>
      { lunchPacked ? "Lunch is packed" : "Lunch is not packed OMG PACK YOUR LUNCH" }
    </button>
  )

}

export default LunchPacked
