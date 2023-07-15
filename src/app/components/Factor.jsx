import React from 'react'
import Link from 'next/link'
import { Icon1, Icon2, Icon3, Icon4, ArrowDown } from './icons'

function Factor({ data }) {
    const icons = [<Icon1 key={1} />, <Icon2 key={2} />, <Icon3 key={3} />, <Icon4 key={4} />]

    return (
        <>
            <section className="factor-body d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center">
                {
                    !data?.AIResponse ?
                        data?.data.map((item, idx) => {

                            return <section className='mb-4 col-lg-6 col-12' key={idx}>
                             <Link href={'#factor' + (idx + 1)}  className='w-100'>

                               
                                  
                                   
                                    <div className="items d-flex align-items-center justify-content-lg-center justify-content-left">
                                        {icons[idx]}
                                        <div className="content d-flex flex-column  align-items-start justify-content-start">
                                            <span className="caption1">
                                                {item.title}
                                            </span>
                                            <span className="caption2">
                                                {item.description}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowDown />
                                    </div>
                                



                                
                            </Link>
                            </section>
                        }) : null
                }
            </section>
        </>
    )
}

export default Factor