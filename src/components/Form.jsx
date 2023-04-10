import React, { useState } from 'react'
import '../styles/form.css'
const Form = () => {
    const [foodName,setFoodName] = useState('');
    const [foodDesc,setFoodDesc] = useState('');
    const [foodItems,setFoodItems] = useState(0);

    const addFoodItems = ()=>{
        console.log(foodName+foodDesc+foodItems);
    }
  return (
    <>
    <div className='form'>
      <label>Food Name:</label>
      <input type="text" name="foodname" id="foodname" onChange={(e)=>{
        setFoodName(e.target.value)
      }}/>
      <label htmlFor="">Food Description:</label>
      <input type="text" name="desc" id="desc" onChange={(e)=>{
        setFoodDesc(e.target.value)
      }}/>
      <label htmlFor="">Number of Food Items:</label>
      <input type="number" name="fooditems" id="fooditems" onChange={(e)=>{
        setFoodItems(e.target.value)
      }}/>
      <button onClick={addFoodItems}>Add to list</button>
      </div>
    </>
  )
}

export default Form