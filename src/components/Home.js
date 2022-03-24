import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const Home = () => {
  return (
    <motion.div className="home container"
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{delay:1 ,duration:1 , type:"tween"}}

    >
      <motion.h2 animate={{fontSize:60, color:"#ddd", x:20, y:-100}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
        whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255 255 255)",
          boxShadow:"0px 0px 8px rgb(255 255 255)"
         }}

        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;