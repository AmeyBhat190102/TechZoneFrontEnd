import React, { useEffect, useState } from 'react'
import ShortItemComponent from '../ItemsRelated/ShortItemComponent'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const CartPage = () => {

  const {username} = useSelector(state => state.custom)

  const [data,setData] = useState([])

  useEffect(()=>{
    getCartData();
  },[username]);

  const dataSent = {username : username}


  const getCartData = ()=>{
    console.log(username)
    fetch("https://techzonebackenddeploy-q6sk.onrender.com/api/getCart",{method:"POST" ,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataSent)
  })
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
    <div className='bg-amber-200 h-full w-screen'>
        <div className='flex flex-wrap justify-center items-center'>
        {data.map(item => (
          <ShortItemComponent title={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default CartPage