import React from 'react'
import Header from './Components/Header/Header';
import Topcontainer from './Components/Topcontainer/Topcontainer';
import Eventcontainer from './Components/Eventcontainer/Eventcontainer';
import Achievementscontainer from './Components/Achievementscontainer/Achievementscontainer';
import Contactus from './Components/Contactus/Contactus';
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer';
import "./App.css";



const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Eventcontainer/>
      <Achievementscontainer/>
     <Experiencecontainer/>
      <Contactus/>
    </div>
    
      
      
      
    
  )
}

export default App