import React from 'react'

const FavouriteComponet = (props) => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto bg-red-300 rounded-lg shadow-lg">
      <div className="px-6 py-4">
        <ul className="mt-4">
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="ml-2">
                <h3 className="text-sm font-medium text-gray-900">{props.itemName}</h3>
                <p className="text-gray-600">{props.itemId}</p>
              </div>
            </div>
          </li>
          <div>
              <button className="w-full m-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">Remove</button>
            </div>
        </ul>
      </div>
      <div className="flex items-center justify-between bg-black px-6 py-4 rounded-lg">
        <p className="text-lg font-semibold text-white">$10.00</p>
      </div>
    </div>
  )
}

export default FavouriteComponet