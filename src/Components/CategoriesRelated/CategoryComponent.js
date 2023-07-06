import React from 'react'

const CategoryComponent = (props) => {
  return (
    <div className="bg-red-300 rounded-lg shadow-md p-7 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-lg font-semibold mb-2">Searching for {props.name}</h2>
        <img src={props.image} alt={props.name} className="w-full h-32 object-cover mb-2 rounded-md"/>
        <p className="text-gray-600 text-sm">Explore {props.name} Related</p>
    </div>
  )
}

export default CategoryComponent