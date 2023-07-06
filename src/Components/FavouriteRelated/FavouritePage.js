import React, { useState } from 'react'
import { useEffect } from 'react'
import ShortItemComponent from '../ItemsRelated/ShortItemComponent';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const FavouritePage = () => {
  const [data, setData] = useState([]);
  const {username} = useSelector(state => state.custom)

  const user = {username : username}
  useEffect(()=>{
    const fetchFavouritesData = () =>{
      fetch("https://techzonebackenddeploy-q6sk.onrender.com/api/getFavourites",{method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response=>{
      if (response.ok){
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
  if(user.username.length>0){
    console.log("Username length not 0")
    fetchFavouritesData();
  }else{
    console.log("UserName Length 0")
  }

  },[])
  
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

export default FavouritePage;