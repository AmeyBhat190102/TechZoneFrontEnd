import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import CategoryComponent from './CategoryComponent';
const CategoriesPage = () => {
  const categorys = [
    { image: "https://images.unsplash.com/photo-1595793550800-5bdd9d23b2fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", name: 'Cameras And Accessories', redirect: 'cameraAccessories' },
    { image: "https://images.unsplash.com/photo-1521899519970-aa0d00905f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVudGVydGFpbm1lbnQlMjBhbmQlMjBhdWRpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60", name: 'Entertainment and Audio', redirect: 'audioAccessories' },
    { image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0aW5nJTIwYW5kJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", name: 'Computing and Accessories', redirect: 'computingAccessories' },
    { image: "https://media.istockphoto.com/id/1193467545/photo/controlling-ventilation-with-a-smart-phone-at-home.webp?b=1&s=170667a&w=0&k=20&c=xmU92_zLxad1OwYOJHqX7WG4bYwaJCfJSmEJpBXcwkQ=", name: 'Smart Home and Gadgets', redirect: 'smartHome' },
    { image: "https://images.unsplash.com/photo-1602526432604-029a709e131c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", name: 'Mobile Accessories', redirect: 'mobileAccessories' },
    { image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", name: 'Home Appliances', redirect: 'homeAppliances' },
  ];

  return (
    <div className='flex flex-col justify-center items-center  bg-amber-200 w-screen'>
      <div className="mx-auto  h-auto py-4  w-full m-2" >
        <div className='flex justify-center items-center m-5'>
          <p className='font-bold text-2xl font-serif sm:text-2xl text:black animate-pulse '>Discover the Future: Explore our Vast Collection of Cutting-Edge Electronic Gadgets!</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link to='/homepage/categories/cameraAccessories'>
            <CategoryComponent name={categorys[0].name} image={categorys[0].image} />
          </Link>
          <Link to='/homepage/categories/audioAccessories'>
            <CategoryComponent name={categorys[1].name} image={categorys[1].image} />
          </Link>
          <Link to='/homepage/categories/computingAccessories'>
            <CategoryComponent name={categorys[2].name} image={categorys[2].image} />
          </Link>
          <Link to='/homepage/categories/smartHome'>
            <CategoryComponent name={categorys[3].name} image={categorys[3].image} />
          </Link>
          <Link to='/homepage/categories/mobileAccessories'>
            <CategoryComponent name={categorys[4].name} image={categorys[4].image} />
          </Link>
          <Link to='/homepage/categories/personalComputing'>
            <CategoryComponent name={categorys[5].name} image={categorys[5].image} />
          </Link>
        </div>
      </div>   
      <div className='w-3/4'>   
        <DropdownMenu/>
      </div>
      <br/><br/>      
     </div>
    
  )
}

export default CategoriesPage