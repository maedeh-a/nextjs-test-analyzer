import React from 'react'
import Image from 'next/image'
import doctor from '../img/doctor.png'
import Link from 'next/link'
function Intro() {
  return (
    <>
    <section className="intro-body mt-4 py-3">
        <div className="intro-box d-flex">
            <div className="col-6">
                <div className="intro-text d-flex flex-column align-items-start">
                    <span className="title-intro">Dtailed </span>
                    <span className="title-intro">Interpretation</span>
                    <p className="text-intro">Lorem ipsum dolor sit amet, consectetur </p>
                    <Link href="/" className="powered-link" >
                  
                        powered by  GPT-4
                 
                    </Link>
                </div>
            </div>
            <div className="col-6">
                <div className="img-box">
                    <Image src={doctor} objectFit="cover" width={300} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Intro