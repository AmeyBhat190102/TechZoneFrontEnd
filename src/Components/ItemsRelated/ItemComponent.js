import React from 'react'
import { useState , useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'

const ItemComponent = (props) => {
  // const name=useSelector(state => state.user.value);
  // const [user,setUser]=useState("");
  // useEffect(()=>{
  //   setUser(name);
  // },[name])

  const {username} = useSelector(state=>state.custom)


  const dispatch = useDispatch()

  const [count,setCount] = useState(0)
  const [addedToCart,setAddedToCart] = useState(false)
  const [showFavouritesButton,setShowFavouritesButton] = useState(true)

  const image = props.image

  const addToFavouritesInitiated = (e) =>{
      e.preventDefault()
      setShowFavouritesButton(false)
      let dataSent = {name:props.name,price:props.price ,username : username , image:props.image}

      fetch("https://techzonebackenddeploy-q6sk.onrender.com/api/addToFavourites", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Added to favourites successfully:', data);
      })
      .catch((error) => {
        console.error('Error adding to favourites', error);
      });
  }

  const handleCart = () => {
    dispatch({
      type : "addtocart",
      payload : props.name
    })
  }

  const addToCartInitiated = (e) =>{
    e.preventDefault()
    handleCart()
    setCount(count+1)
    setAddedToCart(true)
    
    let dataSent = {name:props.name,price:props.price ,username : username,image:props.image}

    fetch('https://techzonebackenddeploy-q6sk.onrender.com/api/addToCart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataSent),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Added to Cart successfully:', data);
    })
    .catch((error) => {
      console.error('Error adding to Cart', error);
    });
}


  return (
        <div className="max-w-md overflow-hidden shadow-lg m-2 bg-red-300 rounded-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-4/5" >
          <img className="w-full h-1/4" src={image}/>
          <div className="px-6 py-4">
            <div className="font-bold text-sm mb-2 text-white flex justify-between">
              <p className="text-black text-base">{props.name}</p>
              <p className="text-black text-base">{props.price}</p>
            </div>
              <p className="text-black text-sm">{props.desc}</p>
          </div>

          <div className="px-6 py-4">
            <form onSubmit={(e)=>{e.preventDefault()}}>
              <div className='flex justify-between'>
                {!addedToCart ?<button onClick={addToCartInitiated} className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl pr-4 m-1 text-sm">Add Item to Cart</button>
                :<button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl pr-4 m-1 text-sm">Item Added To Cart</button>
                }
                
                {showFavouritesButton?<button onClick={addToFavouritesInitiated} className=" text-sm w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-1">
                  Add Item To Favourites</button> : <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-1 text-sm">Added To Favourites List</button>}
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-1 text-sm">Amount In Cart:{count && <button>{count}</button>}</button>
            </form>
          </div>
      </div>

  )
}

export default ItemComponent