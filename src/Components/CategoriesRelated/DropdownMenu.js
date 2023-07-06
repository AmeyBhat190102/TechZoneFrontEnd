import React, { useState } from 'react';
import SmallComponent from './SmallComponent';
const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue1, setSliderValue1] = useState(2000);
  const [sliderValue2, setSliderValue2] = useState(80000);

  const options = ['cameraAccessories', 'audioAccessories', 'smartHome' , 'computingAccessories' , 'mobileAccessories' , 'personalAccessories'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSlider1Change = (event) => {
    setSliderValue1(event.target.value);
  };

  const handleSlider2Change = (event) => {
    setSliderValue2(event.target.value);
  };
  const [data, setData] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://techzonebackenddeploy-q6sk.onrender.com/api/items?category=${selectedOption}&upperValue=${sliderValue2}&lowerValue=${sliderValue1}`, { method: "GET" });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  const marks = [
    { value: 2000, label: '2000' },
    { value: 5000, label: '5000' },
    { value: 10000, label: '10000' },
    { value: 20000, label: '20000' },
    { value: 30000, label: '30000' },
    { value: 40000, label: '40000' },
    { value: 50000, label: '50000' },
    { value: 60000, label: '60000' },
    { value: 70000, label: '70000' },
    { value: 80000, label: '80000' },
  ];

  return (
    <div className="container mx-auto p-4 bg-amber-300 rounded-lg m-2">
        <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col justify-center items-center">
                <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="dropdown">Select A Category</label>
                <select id="dropdown" className="appearance-none border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:ring w-full sm:w-auto" onChange={(e) => handleOptionSelect(e.target.value)}>
                <option value="">Select Category</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="slider1">Choose Ur Lower Limit</label>
                <input type="range" id="slider1" className="w-full" min="2000" max="80000" step="500" value={sliderValue1} onChange={handleSlider1Change} list="tickmarks1"/>
                <datalist id="tickmarks1">
                {marks.map((mark) => (
                    <option key={mark.value} value={mark.value} label={mark.label} />
                ))}
                </datalist>
                <p className="text-center">You Have Chosen{sliderValue1}</p>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700  font-bold mb-2 text-lg" htmlFor="slider2">Choose Ur Upper Limit</label>
                <input type="range" id="slider2" className="w-full" min="2000" max="80000" step="500" value={sliderValue2} onChange={handleSlider2Change} list="tickmarks2"/>
                <datalist id="tickmarks2">
                {marks.map((mark) => (
                    <option key={mark.value} value={mark.value} label={mark.label} />
                ))}
                </datalist>
                <p className="text-center">You Have Chosen : {sliderValue2}</p>
            </div>
        
            <div className='flex flex-wrap justify-center items-center'>
                <p className="text-gray-700 m-2 text-lg font-bold">Selected Category: {selectedOption ? selectedOption : 'None'}</p>
                <p className="text-gray-700 m-2 text-lg font-bold">Lower Value: {sliderValue1}</p>
                <p className="text-gray-700 m-2 text-lg font-bold">Upper Value: {sliderValue2}</p>
            </div>
            
            <div className='flex justify-center items-center'>
                <input type='submit' placeholder='Get Filtered Data' className='bg-amber-500 rounded-lg p-4 font-bold '></input>
            </div>
        </form>

        <div className='flex flex-wrap justify-center items-center'>
          {data?.map(item => (
            <div className='flex flex-wrap w-80 m-3'>
              <SmallComponent name={item.name} price={item.price} desc={item.desc} image={item.image}/>
            </div>
          ))}
        </div>
    </div>

  );
};

export default DropdownMenu;
