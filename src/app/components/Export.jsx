import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HouseSimple from '../img/HouseSimple.png'
import Vector from '../img/Vector.png'
function Export() {
  return (
    <>
    <div className="export-body d-flex align-item-start justify-content-around">
       <Link href='' className='d-flex flex-column align-items-center'>
            <Image src={HouseSimple} objectFit="cover" width={65} />
            Home

       </Link>
     
        <button className='export d-flex flex-column align-items-center'>
          <Image src={Vector}  height={67}/>
          Export As Pdf
        </button>



    </div>
    </>
  )
}

export default Export