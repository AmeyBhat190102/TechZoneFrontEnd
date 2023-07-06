import React from 'react'
import ImageSliderComponent from './ImageSliderComponent'
import ShortItemComponent from '../ItemsRelated/ShortItemComponent'
import NavBar from './NavBar'

const HomepageComponent = () => {
  return (
    <>
    <div className='bg-slate-200 h-full w-screen'>
      <div className='flex justify-center content-center md:w-full'>
        <ImageSliderComponent/>
      </div>
      <div className='bg-amber-200 h-full'>
        <div className='flex justify-center items-center text-3xl'>
          <p class="tagline text-2xl font-bold text-black text-center mt-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl animate-pulse  font-serif">Unleash your style with our <span class="text-blue-950">iconic</span> flagship Electronic collection.</p>
        </div>
        <div className='flex flex-wrap'>
          <ShortItemComponent price={34000} title="Sony Camera" image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" />
          <ShortItemComponent price={56000} title="Smart LED TV" image="https://media.istockphoto.com/id/467946398/photo/contemporary-curved-led-smart-tv-design.jpg?s=612x612&w=0&k=20&c=s-eIL1kSR1YalWVGFk9sIvt0XbJMQGIlLlzUUbw6jLA=" />
          <ShortItemComponent price={23000} title="Washing Machine" image="https://media.istockphoto.com/id/1340662070/photo/stylish-room-interior-with-washing-machine-design-idea.jpg?s=612x612&w=0&k=20&c=_3dG_hC7c-VDJUeC55K60H8XdfYuFDHe3P9ti0pqj-M=" />
          <ShortItemComponent price={29000} title="Smart Refrigerator" image="https://media.istockphoto.com/id/928066156/photo/open-refrigerator-in-kitchen.jpg?s=612x612&w=0&k=20&c=6WScE9r62MWgjHhdKBHBH0wHTrtwAK8klSMQ4CujAq4=" />
          <ShortItemComponent price={2900} title="Gaming Laptop" image="https://media.istockphoto.com/id/1366544029/photo/male-gamer-playing-games-online-on-computer-for-money.jpg?s=612x612&w=0&k=20&c=HKc3QA9ykVLXEaCu6nrHsIGjWSWdCwvqrVhz7xQcKIo=" />
          <ShortItemComponent price={18000} title="KeyBoard" image="https://media.istockphoto.com/id/183386995/photo/typing-on-keyboard.jpg?s=612x612&w=0&k=20&c=NCnXiSpZge-wNoI8D0ttwsNKTqfadLzCb0CVJMlvNSM=" />
        </div>
      </div>
      <br></br>
    </div>
    </>
  )
}

export default HomepageComponent