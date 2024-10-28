import './App.css'
import About from './Components/About'
import Cards from './Components/Cards'
import DesignAndDecor from './Components/DesignAndDecor'
import Footer from './Components/Footer'
import HowWeWork from './Components/HowWeWork'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import OurClient from './Components/OurClient'
import Services from './Components/Services'
import WhyChoose from './Components/WhyChoose'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    <About></About>
    <Cards></Cards>
    <Services></Services>
    <DesignAndDecor></DesignAndDecor>
    <HowWeWork></HowWeWork>
    <WhyChoose></WhyChoose>
    <OurClient></OurClient>
    <Footer></Footer>
    </>
  )
}

export default App
