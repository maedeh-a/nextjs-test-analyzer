import React from 'react'
import Image from 'next/image'
import recommend from '../../img/recommend.svg'
function row1() {
  return (
    <div className="icon-items bg4">
      <Image src={recommend} objectFit="cover" width={57} />
    </div>
  )
}

export default row1