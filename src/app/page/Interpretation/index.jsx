import React from 'react'
import Intro from '../../components/Intro'
import Factor from '../../components/Factor'
import Accordion from '../../components/Accordion'
import Header from '../../components/Header'
import HeaderMobile from '../../components/HeaderMobile'
function Interpretation({data}) {
  return (
    <>
      
      <section className='interpretation-body '>
        <div className="container">
          <Header/>
          <Intro />
          <Factor data={data}/>
          <Accordion data={data} />
        </div>
        <HeaderMobile />
       
      </section>
    </>
  )
}

export default Interpretation