import React, { createContext, useState } from 'react'
import FoodItems from '../data/FoodItems';

export const dataContext = createContext();

function Usercontext({children}) {
  const [cat, setCat] = useState(FoodItems);
  let [input, setInput] = useState('');
 

  let data = {
    input, setInput , cat, setCat
  }


  return (
    <div>
      <dataContext.Provider value = {data}>
      {children}
      </dataContext.Provider>
     

      </div>
  )
}

export default Usercontext