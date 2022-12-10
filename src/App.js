import './App.css';
import React, { useState } from 'react'
import NavBar from "./components/NavBar"
import New from './components/New';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

const App = () =>{

  const [progress, setProgress] = useState(10)
  const [mode, setMode] = useState('light')
  const [color, setColor] = useState('black')
  const [backgroundColor, setbackgroundColor] = useState('white')
  const [item_color, setItem_color] = useState('white')
  
  
  const toogleMode = () => {
    if(/*this.state.*/mode==='light'){

    setColor('white')
    setMode('dark')
    setItem_color("#215eb5")
    
      document.body.style.backgroundColor = "#0A397A";
      document.body.style.color = 'light';
    }
    else{

    setColor('black')
    setMode('light')
    setItem_color("white")

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } 
  }

  // render() {

    return (
      <div>
        <Router>
        
          <NavBar toogleMode={/*this.*/toogleMode} color={/*this.state.*/color} />
         
          <LoadingBar
          color='#f11946'
          progress={/*this.state.*/progress}
          height = {4}/>
          <Routes>
            <Route exact  path="/" element={<New setProgress = {/*this.*/setProgress}   key='general' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="general"/>} />
            <Route exact  path="/technology" element={<New setProgress = {/*this.*/setProgress}   key='technology' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="technology"/>} />
            <Route exact  path="/entertainment" element={<New setProgress = {/*this.*/setProgress}   key='entertainment' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="entertainment"/>} />
            <Route exact  path="/sports" element={<New setProgress = {/*this.*/setProgress}   key='sports' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="sports"/>} />
            <Route exact  path="/business" element={<New setProgress = {/*this.*/setProgress}   key='business' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="business"/>} />
            <Route exact  path="/health" element={<New setProgress = {/*this.*/setProgress}   key='health' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="health"/>} />
            <Route exact  path="/science" element={<New setProgress = {/*this.*/setProgress}   key='science' text_color = {/*this.state.*/color} color={/*this.state.*/item_color}  category="science"/>} />


          </Routes>
        </Router>
        
      </div>
    )
  }
// }

export default App