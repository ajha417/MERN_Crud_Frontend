import React, { useState,useEffect } from 'react'
import '../styles/form.css'
import Axios from 'axios';
const Form = () => {
    const [foodName,setFoodName] = useState('');
    const [foodDesc,setFoodDesc] = useState('');
    const [foodItems,setFoodItems] = useState(0);
    const [foodList,setFoodList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setFoodList(response.data);
            console.log(response);
        })
    },[])
    const addFoodItems = ()=>{
        // console.log(foodName+foodDesc+foodItems);
        Axios.post("http://localhost:3001/insert",{
            foodName:foodName,
            foodDesc:foodDesc,
            itemNum:foodItems
        })
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

      <table border={"1px"} cellSpacing={"0px"}>
        <thead>
            <th>foodname</th>
            <th>food Desc</th>
            <th>Number of items</th>
        </thead>
        <tbody>
            {
                foodList.map(i=>(
                    <tr key={i}>
                        <td>{i.foodName}</td>
                        <td>{i.foodDesc}</td>
                        <td>{i.itemNum}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Form