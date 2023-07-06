import React from 'react'
const SmallComponent = (props) => {
  const image = props.image
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
    </div>
  )
}

export default SmallComponent