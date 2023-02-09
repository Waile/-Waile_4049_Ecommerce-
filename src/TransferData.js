import React from 'react'
import PropsData from './PropsData'

const TransferData = () => {
    let userData = {
        id: "1",
        name: 'Huzefa',
        city:'Karachi'
    }
  return (
      <div>
          <PropsData userDetails={userData} />
    </div>
  )
}

export default TransferData