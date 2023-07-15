import React from 'react'
import Intro from '../../components/Intro'
import Factor from '../../components/Factor'
import Accordion from '../../components/Accordion'
import Header from '../../components/Header'
import HeaderMobile from '../../components/HeaderMobile'
import Export from '../../components/Export'
import Footer from '../../components/Footer'
import CameraDesktop from '../../components/CameraDesktop'
function Interpretation({data}) {
  return (
    <>
      
      <section className='interpretation-body '>
        <div className="container">
          <Header/>
          <CameraDesktop/>
          <Intro />
          <Factor data={data}/>
          <Accordion data={data} />
          <Export/>
        </div>
       
        <HeaderMobile />
        <Footer/>
      </section>
    </>
  )
}

export default Interpretation