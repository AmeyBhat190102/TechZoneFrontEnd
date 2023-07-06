import React from 'react'

const  ShortItemComponent = (props) => {
    const image = props.image
  return (
    <div className="w-full md:w-1/3 md:h-1/2 xl:1/4 p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} className="w-full h-64 object-cover" />
            <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
            <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-semibold">{props.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
            </div>
            </div>
        </div>
    </div>  
    )
}

export default ShortItemComponent