import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
                whileHover={{scale:1.2,originX:0, color:"#f8e112"}}
            transition={{scale:"spring", stiffness:300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{x:"-100vw"}}
        animate={{x:0}}
        whileHover={{
          scale:1.1,
         }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </div>
  )
}

export default Base;