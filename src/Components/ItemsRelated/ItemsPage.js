import React from 'react'
import { useEffect, useState } from 'react'

import ItemComponent from './ItemComponent'
const ItemsPage = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    getItemData();
  },[]);

  const getItemData = ()=>{
    fetch("https://techzonebackenddeploy-q6sk.onrender.com/api/getItem",{method:"GET"})
    .then((response)=>{
      if(response.ok){
        return response.json()
      }
      else{
        throw new Error('Error retrieving data');
      }
    })
    .then(data=>{
      setData(data)
    })
    .catch(error=>{
      console.error('Error retrieving data:', error);
    })
  }
  return (
    <div className='flex justify-center items-center  flex-wrap bg-amber-200 h-full w-screen'>
        <div className='flex flex-wrap justify-center items-center'>
          {data.map(item => (
            <div className='flex flex-wrap w-80 m-3'>
              <ItemComponent name={item.name} price={item.price} desc={item.desc}  image={item.image}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ItemsPage