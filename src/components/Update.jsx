import React,{useState} from 'react'
import Axios  from 'axios';
import '../styles/update.css';
const Update = (props) => {
    const [foodName,setFoodName] = useState('');
    const [foodDesc,setFoodDesc] = useState('');
    const [foodItems,setFoodItems] = useState(0);


    const updateFood = ()=>{
        Axios.put("http://localhost:3001/update",{
            foodName:foodName,
            foodDesc:foodDesc,
            itemNum:foodItems
        })
    }
  return (
    <div className='update'><label>Food Name:</label>
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
    <button onClick={updateFood}>Update</button></div>
  )
}

export default Update