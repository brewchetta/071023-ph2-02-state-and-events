import { useState } from 'react'

function SupplyCard() {

  const [bought, setBought] = useState(false)

  const toggleButton = () => setBought( !bought )

  const currentClassName = bought ? "strikethrough" : ""

  return (
    <div className="supply-card">

      <span className={currentClassName}>✏️ Item Name goes here</span>

      <button onClick={ toggleButton }>Buy</button>

    </div>
  )

}

export default SupplyCard
