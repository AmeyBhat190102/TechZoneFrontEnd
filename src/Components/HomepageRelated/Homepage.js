import React from 'react'
import NavBar from './NavBar'
import ItemsPage from '../ItemsRelated/ItemsPage'
import CartPage from '../CartRelated/CartPage'
import FavouritePage from '../FavouriteRelated/FavouritePage'
import RenderFilterBased from '../RenderFilterBased'
import HomepageComponent from './HomepageComponent'
import CategoriesPage from '../CategoriesRelated/CategoriesPage'
import FooterComponent from '../HomepageRelated/FooterComponent'
import { Routes , Route } from 'react-router-dom'
const Homepage = () => {
  return (
        <>
          <NavBar/>
          <Routes>
            <Route path='/main' element={<HomepageComponent/>}/>
            <Route path='/allItems' element={<ItemsPage/>}/>
            <Route path='/cartItems' element={<CartPage/>}/>
            <Route path='/favouriteItems' element={<FavouritePage/>}/> 
            <Route path='/categories/*' element={<CategoriesPage/>}/> 
            <Route path='/categories/cameraAccessories' element={<RenderFilterBased filterOn="cameraAccessories"/>}/>
            <Route path='/categories/audioAccessories' element={<RenderFilterBased filterOn="audioAccessories"/>}/>
            <Route path='/categories/computingAccessories' element={<RenderFilterBased filterOn="computingAccessories"/>}/>
            <Route path='/categories/smartHome' element={<RenderFilterBased filterOn="smartHome"/>}/>
            <Route path='/categories/mobileAccessories' element={<RenderFilterBased filterOn="mobileAccessories"/>}/>
            <Route path='/categories/personalComputing' element={<RenderFilterBased filterOn="personalAccessories"/>}/>
          </Routes>
          <FooterComponent/>
        </>
  )
}

export default Homepage