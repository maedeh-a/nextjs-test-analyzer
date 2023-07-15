import React from 'react'
import Image from 'next/image'
import organs from '../../img/organs.svg'
function row1() {
  return (
    <div className="icon-items bg2">
      <Image src={organs} objectFit="cover" width={58} />
    </div>
  )
}

export default row1