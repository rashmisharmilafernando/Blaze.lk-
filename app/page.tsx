"use client";
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './assets/css/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../app/globals.css';
import seashells from './assets/seashells.png';
import pearls from './assets/pearls.png';
import daisyFlower from './assets/daisyFlower.png';
import aboutsectionImage from './assets/about.png';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
export default function Home() {


  return (
    <main>
      {/* home section */}
      <section id='homesection' className="h-screen w-full  bg-[#fafafa] flex ">
        <div className='relative p-10 mt-[120px] ml-10 mr-10 mb-10 w-full h-full/3 bg-[#faf2ed] rounded-lg text-center flex flex-col items-center justify-center'>
          <h1 className="mb-4 text-4xl font-mono font-extrabold leading-none tracking-tight text-[#202020] md:text-5xl lg:text-6xl  ">
            Timeless Beauty in Every Handmade Piece
          </h1>
          <p className="mb-6 text-lg font-normal font-mono text-[#ef4a0d] lg:text-xl sm:px-16 xl:px-48  ">
            Better Quality, Better Prices. That’s What We’re All About.
          </p>
          <a href="#productsection" className="inline-flex items-center font-mono justify-center px-5 py-3 text-base font-medium text-center text-black bg-transparent  border border-black  hover:bg-[#ef4a0d] hover:border-[#ef4a0d] hover:text-white focus:ring-4 focus:ring-blue-300  ">
            Shop Now
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>




      </section>

      {/* product section */}
      <section id='productsection' className="h-screen w-full bg-[#fafafa] pb-[50px] p-[120px] items-center justify-center">
        <h2 className="text-3xl md:text-3xl pb-5 font-bold items-center">
          <span className='text-[#202020] font-mono pr-1'>Collection</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-indigo rounded-lg items-center justify-center">

          <div className="relative max-w-xs w-full sm:max-w-[90%] md:max-w-xs border border-solid border-[#202020] transition-all duration-500">
            <div className="block overflow-hidden flex justify-center">
              <img src={seashells.src} className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-[#ef4a0d] mb-2 capitalize transition-all duration-500">Seashell Collection</h4>
              <a href="seashellProducts" className="bg-[#202020] shadow-sm py-2 px-5 text-xs text-white font-semibold">
                View All
              </a>
            </div>
          </div>

          <div className="relative max-w-xs w-full sm:max-w-[90%] md:max-w-xs border border-solid border-[#202020] transition-all duration-500">
            <div className="block overflow-hidden flex justify-center">
              <img src={pearls.src} className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-[#ef4a0d] mb-2 capitalize transition-all duration-500">Pearls Collection</h4>
              <button className="bg-[#202020] shadow-sm py-2 px-5 text-xs text-white font-semibold">
                View All
              </button>
            </div>
          </div>

          <div className="relative max-w-xs w-full sm:max-w-[90%] md:max-w-xs border border-solid border-[#202020] transition-all duration-500">
            <div className="block overflow-hidden flex justify-center">
              <img src={daisyFlower.src} className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-[#ef4a0d] mb-2 capitalize transition-all duration-500">Daisy Flower Collection</h4>
              <button className="bg-[#202020] shadow-sm py-2 px-5 text-xs text-white font-semibold">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* about section */}
      <section id='aboutsection' className="w-full bg-[#fafafa]  pl-[130px]  pr-[130px] pt-[120px] " data-aos="fade-up">
        <h2 className="text-3xl md:text-3xl pb-3 pt-3 font-bold items-center">
          <span className='text-[#202020] font-mono pr-1'>About</span>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div
                className="sm:w-[564px]  sm:h-[646px] md:w-[600px] md:h-[400px] sm:bg-gray-100 rounded-3xl   relative">
                <img src={aboutsectionImage.src} className="sm:mt-5 sm:ml-5 md:w-[600px] md:h-[400px] rounded-3xl object-cover"
                  alt="about Us image" />
              </div>
            </div>
            {/* <img src={aboutsectionImage.src} className="w-[800px] h-[300px] md:w-[600px] md:h-[400px]" /> */}
          </div>
          <div className='relative  p-10 w-full h-full/3 font-mono rounded-lg text-center flex flex-col items-center justify-center'>
            <p >At Blaze.lk, we craft unique, handmade accessories that bring a touch of elegance and personality to your everyday style.  Specializing in pearl bracelets, seashell earrings, necklaces, hair clips, and key tags, each piece is carefully designed with love and creativity.  Our commitment to quality ensures that every item reflects timeless beauty and craftsmanship, offering you one-of-a-kind pieces at affordable prices. Celebrate your individuality with our handcrafted collections, made to inspire and enhance your look.</p>
            <a href="#customerRiview" className="inline-flex items-center font-mono justify-center mt-5 px-5 py-3 text-base font-medium text-center text-black bg-transparent  border border-black  hover:bg-[#ef4a0d] hover:border-[#ef4a0d] hover:text-white focus:ring-4 focus:ring-blue-300  ">
              Customer Reviews
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      </section>

      {/* customerRiview section */}
      <section id='customerRiview' className="w-screen/2 bg-[#fafafa]  p-4 md:p-8 lg:p-12 xl:p-16" data-aos="fade-up">
        <div className="container mx-auto ">
          <h2 className="text-3xl md:text-3xl pb-3 pt-3 font-bold items-center">
            <span className='text-[#202020] font-mono pr-1'>Customer Review</span>
          </h2>
          <div className="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-indigo rounded-lg items-center justify-center">
            <div className="relative max-w-xs rounded-2xl transition-all duration-500">
              <div className="block overflow-hidden flex justify-center">
                <img src={img1.src} className="w-[300px] h-[300px] md:w-[300px] md:h-[300px]" />
              </div>


            </div>
            <div className="relative max-w-xs rounded-2xl transition-all duration-500">
              <div className="block overflow-hidden flex justify-center">
                <img src={img2.src} className="w-[300px] h-[300px] md:w-[300px] md:h-[300px]" />
              </div>


            </div>

            <div className="relative max-w-xs rounded-2xl transition-all duration-500">
              <div className="block overflow-hidden flex justify-center">
                <img src={img4.src} className="w-[300px] h-[300px] md:w-[300px] md:h-[300px]" />
              </div>


            </div>

            <div className="relative max-w-xs rounded-2xl transition-all duration-500">
              <a href="https://www.facebook.com/media/set/?set=a.337163209270194&type=3" target="_blank" className="inline-flex items-center font-mono justify-center mt-5 px-5 py-3 text-base font-medium text-center text-black bg-transparent  border border-black  hover:bg-[#ef4a0d] hover:border-[#ef4a0d] hover:text-white focus:ring-4 focus:ring-blue-300  ">
                View All
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
