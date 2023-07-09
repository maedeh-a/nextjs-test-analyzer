import React from 'react'
import Link from 'next/link'
import { Icon1, Icon2, Icon3, Icon4, ArrowDown } from './icons'

function Factor({ data }) {
    const icons = [<Icon1 key={1} />, <Icon2 key={2} />, <Icon3 key={3} />, <Icon4 key={4} />]

    return (
        <>
            <section className="factor-body d-flex flex-column align-items-center justify-content-center">
                {
                    !data?.AIResponse ?
                        data?.data.map((item, idx) => {
                            return <Link href={'#factor' + (idx + 1)} key={idx} className='w-100'>
                                <section className='mb-4' >
                                    <div className="items d-flex align-items-center">
                                        {icons[idx]}
                                        <div className="content d-flex flex-column align-items-start justify-content-start">
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
                                </section>
                            </Link>
                        }) : null
                }
            </section>
        </>
    )
}

export default Factor