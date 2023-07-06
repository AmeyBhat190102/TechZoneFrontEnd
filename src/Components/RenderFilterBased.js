import React from 'react'
import ShortItemComponent from './ItemsRelated/ShortItemComponent'
import { useState} from 'react'
import { useEffect } from 'react'

const RenderFilterBased = (props) => {

  const [data,setData] = useState([])
  useEffect(()=>{
    const category = props.filterOn
    const getMeFilteredData = async () => {
      fetch(`https://techzonebackenddeploy-q6sk.onrender.com/api/getFilteredData?category=${encodeURIComponent(category)}`,{method:"GET"})
      .then((response)=>{
        if(response.ok){
          return response.json()
        }
        else{
          console.log(response.ok)
          throw new Error('Error retrieving data');
        }
      })
      .then(data=>{
        setData(data)
        console.log(data)
      })
      .catch(error=>{
        console.error('Error retrieving data:', error);
      })
    }

    getMeFilteredData()
  },[])

  
  return (
    <div className='bg-amber-200 h-full'>

      <div className='flex flex-wrap justify-center items-center'>
        {data.map(item => (
          <ShortItemComponent title={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>


  )
}

export default RenderFilterBased