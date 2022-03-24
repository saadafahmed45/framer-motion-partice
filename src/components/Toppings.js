import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
     initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:1, duration:1}}
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </motion.div>
  )
}

export default Toppings;