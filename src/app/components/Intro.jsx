import React from 'react'
import Image from 'next/image'
import introimg from '../img/intro-img.png'
import Link from 'next/link'
function Intro() {
  return (
    <>
    <section className="intro-body mt-4 py-3">
        <div className="intro-box d-flex position-relative">
            <div className="col-6">
                <div className="intro-text d-flex flex-column align-items-center">
                    <span className="title-intro">Dtailed </span>
                    <span className="title-intro">Interpretation</span>
                    <p className="text-intro">Let’d Dive Deep Into Your Body </p>
                    <Link href="/" className="powered-link" >
                  
                        Powered By GPT-4
                 
                    </Link>
                </div>
            </div>
            <div className="img-box position-absolute">
                <Image src={introimg} objectFit="cover" width={300} />
            </div>
            <div className="col-6">

            </div>
        </div>
    </section>
    </>
  )
}

export default Intro