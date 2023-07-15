import React from 'react'
import Image from 'next/image'
import ovea from '../../img/ovea.svg'
function row1() {
  return (
      <div className="icon-items bg3">
        <Image src={ovea} objectFit="cover" width={65} />
      </div>
  )
}

export default row1