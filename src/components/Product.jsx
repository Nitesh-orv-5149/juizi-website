import React, { useState } from "react";


const images = ["/assets/1.png", "/assets/2.png", "/assets/3.png", "/assets/4.png", "/assets/5.png"];

function Product() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  console.log(currentIndex);

  return (
    <>
    <div className="flex flex-row mt-[3rem] ">
        <div className="-mt-[3rem] scale-140 translate-x-[-10rem] gap-[2rem] ml-[30rem] size-[20rem] flex flex-row ">
          <button className="text-4xl transition-all duration-150 hover:text-5xl hover:text-emerald-500" onClick={prevSlide}>&#10094;</button>
          <div className="relative w-64 h-64 overflow-hidden">
            {images.map((img, index) => (
              <img 
                key={img}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`} 
                src={img} 
                alt={`Slide ${index}`}
              />
            ))}
          </div>
          <button className="text-4xl transition-all duration-150 hover:text-5xl hover:text-emerald-500" onClick={nextSlide}>&#10095;</button>
        </div>
        <div className='gap-7 text-emerald-300 translate-x-[12rem] flex flex-col items-end -mt-[2rem] '>
          <h1 className={`transition-opacity duration-500 ease-in-out opacity-20 poppins-bold text-[2rem] ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>STRAWBERRY</h1>
          <h1 className={`transition-all duration-500 ease-in-out opacity-20 poppins-bold text-[2rem] ${currentIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>CHERRYBERRY</h1>
          <h1 className={`transition-opacity duration-500 ease-in-out opacity-20 poppins-bold text-[2rem] ${currentIndex === 4 ? 'opacity-100' : 'opacity-0'}`}>GREEN APPLE</h1>
          <h1 className={`transition-opacity duration-500 ease-in-out opacity-20 poppins-bold text-[2rem] ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>BLUEBERRY</h1>
          <h1 className={`transition-opacity duration-500 ease-in-out opacity-20 poppins-bold text-[2rem] ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>PINEAPPLE</h1>
        </div>
      </div>
    </>
  );
}

export default Product;
