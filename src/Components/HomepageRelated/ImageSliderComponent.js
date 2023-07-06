import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSliderComponent = () => {
    const imageUrls1 = ["https://images.unsplash.com/photo-1618166080964-cdb5843979b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1525972183131-2f5c48254ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxlbGVjdHJvbmljJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"]

    const imageUrls2 = ["https://images.unsplash.com/photo-1593998025329-1e67d5a9bb8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxlbGVjdHJvbmljJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1505751104546-4b63c93054b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxlbGVjdHJvbmljJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1609334761848-77b4d1994040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    "https://media.istockphoto.com/id/979076604/photo/home-appliance.jpg?s=612x612&w=0&k=20&c=9avZrp8aeVTZYx1HhOMC8n2GuqiiAGQdrfXDfBl_PG8="]

    const imageUrls3 = ["https://media.istockphoto.com/id/1222428599/photo/modern-professional-headphones-isolated-on-wooden-table.jpg?s=612x612&w=0&k=20&c=T7OcJZnG3-WlicZ-_EuHOtBYvxamSVOYs-Fr2LoJw3A=",
    "https://media.istockphoto.com/id/514175379/photo/buying-smartphone.jpg?s=612x612&w=0&k=20&c=hxU7b78QZXCcdQJFwK8D87VKKjgT2GVzFFQkzWblClk=",
    "https://images.unsplash.com/photo-1521661978458-5a2bec6b6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxlbGVjdHJvbmljJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1560367918-bed51f9dff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"]

    const imageUrls4 = ["https://media.istockphoto.com/id/1366731738/photo/shopping-a-new-digital-device-happy-couple-buying-a-smartphone-in-store.jpg?s=612x612&w=0&k=20&c=QCNGucAdNwLTz9YkRFuCSnturfRsUfk_nKwjtlQg6B4=",
    "https://images.unsplash.com/photo-1619334084350-b093f0a9b40e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1525101238777-8878781fc06d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    "https://media.istockphoto.com/id/154280084/photo/pretty-lady-in-retail-computer-store.jpg?s=612x612&w=0&k=20&c=3Jz4hK0-hECpsWma7h_cOioDlwD6TeRBfVLD-vROY10="]
    

  return (
    <div className="flex-col justify-center items-center h-3/4 w-3/4">
      <div className="grid grid-cols-2 gap-0 h-full w-full">
        <div className="w-full h-full">
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}  swipeable emulateTouch dynamicHeight className="h-full ml-7 mt-7 display: none">
          {imageUrls1.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slider ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
          </Carousel>
        </div>
        <div className="w-full h-full">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}  swipeable emulateTouch dynamicHeight className="h-full mr-7 mt-7">
        {imageUrls2.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slider ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
          </Carousel>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0 h-full w-full">
        <div className="w-full h-full">
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} showIndicators={false}  showArrows={false} swipeable emulateTouch dynamicHeight className="h-full ml-7 mb-7">
          {imageUrls3.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slider ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
          </Carousel>
        </div>
        <div className="w-full h-full">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}  showArrows={false} showIndicators={false}  swipeable emulateTouch dynamicHeight className="h-full mr-7 mb-7">
        {imageUrls4.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slider ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderComponent;
