import React from 'react'
import Logo from '../img/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import Instagram from '../img/Instagram.png'
import Copyrighr from './icons/Copyrighr'
function Footer() {
  return (
    <>
    <div className="footer-body d-flex px-lg-5 px-3 align-items-center">
        <div className="col-5">
            <div className="footer-link-box">
                <Link href="">
                          <Image src={Instagram}  width={30}/>
                </Link>
            </div>
        </div>
        <div className="col-7">
                <div className="copyright-box d-flex flex-column align-items-start justify-content-center">
                    <Image src={Logo} />
                        <div className=" d-flex flex-row align-items-center justify-content-center ">
                            <Copyrighr />
                                2023 Razavipour
                        </div>
            </div>
        </div>


    </div>
    </>
  )
}

export default Footer