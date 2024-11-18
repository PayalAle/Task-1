import { useState } from 'react'
import Navbar from './Component/Navbar/index'
import Hero from './Component/Hero/Hero' 
import Slack from './Component/Slack/index'
import Footer from './Component/Footer/index'
import Study from './Component/Study/index'
import Impact from './Component/Impact/index'
import Conclusion from './Component/Conclusion/index'
import OurSolution from './Component/OurSolution/index'

function App() {    
  const [count, setCount] = useState(0)

  return (
    <>
       <div>

         <Navbar/>
         
         <Hero/>

         <OurSolution/>

         <Impact/>

         <Conclusion/>

         <Study/>

         <Slack/>

         <Footer/>
       </div>
    </>
  )
}

export default App
