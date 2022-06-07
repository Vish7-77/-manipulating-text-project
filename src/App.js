import React, {useState}from "react"
import Navbar from "./components/Navbar"
import TextF from "./components/TextF"


function App() {
   
   const [mode, setmode] = useState('light')

   const HandleMode=()=>{
     if(mode==='dark'){
       setmode('light');
       document.body.style.backgroundColor="white";
       document.body.style.color='black';

      }
     else{ 
       setmode('dark');
       document.body.style.backgroundColor="rgb(86 90 104)";
       document.body.style.color='white';

      }
   }
  return (
    <>
    
      <Navbar mode={mode} HandleMode={HandleMode}/>
     
      <TextF mode={mode}/>
     
      
    </>
  )
}

export default App
