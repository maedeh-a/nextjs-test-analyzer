import React from 'react'
import Image from 'next/image'
import range from '../../img/range.svg'
function row1() {
  return (
      <div className="icon-items bg1">
      <Image src={range} objectFit="cover" width={65} />
      </div>
  )
}

export default row1