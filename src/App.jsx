import { useEffect, useState } from "react";
import {motion} from "framer-motion"
const App = () =>{

  const [position ,setPosition] = useState({x: 0, y: 0});

  useEffect(()=>{
    function handleMouse(e) {
      setPosition({x: e.clientX, y: e.clientY});
    }
    document.addEventListener('mousemove', handleMouse);
    return ()=> {
      document.removeEventListener("mousemove", handleMouse);
    }
  },[])
  
  return ( 
    <div className="h-screen w-screen bg-black">
      <motion.div className="h-[10px] w-[10px] bg-red-500 rounded-full z-9999 pointer-events-none"
        animate={{
          x: position.x,
          y: position.y
        }}
        >
      </motion.div>
      <p className="text-white fixed top-0 left-0 p-2">
        x: {position.x}, y: {position.y}
      </p>
    </div>
)
}

export default App;