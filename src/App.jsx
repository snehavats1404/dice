import Start from "./components/Start";
import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [isGame,setIsGame]=useState(false);
  const toggleGame=()=>{
    setIsGame((prev)=>!prev);
  };

  return (
    <>
    {isGame? <Game/>:<Start toggle={toggleGame}/>}
     
    </>
  )
}

export default App;
