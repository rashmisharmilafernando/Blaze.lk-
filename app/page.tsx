"use client";
 
import 'swiper/css';
import 'swiper/css/pagination';
import './assets/css/style.css'; 
import "swiper/swiper-bundle.css";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../app/globals.css';
import seashells from './assets/seashells.png';
import pearls from './assets/pearls.png';
import daisyFlower from './assets/daisyFlower.png';
import aboutsectionImage from './assets/about.png';
import img from './assets/img.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg'; 
import img4 from './assets/img4.jpg';

export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section id='homesection' className="h-screen w-full bg-[#fafafa] flex">
        <div className='relative p-10 mt-[120px] mx-auto max-w-4xl bg-[#faf2ed] rounded-lg text-center flex flex-col items-center justify-center'>
          <h1 className="mb-4 text-4xl font-mono font-extrabold leading-none tracking-tight text-[#202020] md:text-5xl lg:text-6xl">
            Timeless Beauty in Every Handmade Piece
          </h1>
          <p className="mb-6 text-lg font-normal font-mono text-[#ef4a0d] lg:text-xl sm:px-16 xl:px-48">
            Better Quality, Better Prices. That’s What We’re All About.
          </p>
          <a href="#productsection" className="inline-flex items-center font-mono justify-center px-5 py-3 text-base font-medium text-center text-black bg-transparent border border-black hover:bg-[#ef4a0d] hover:border-[#ef4a0d] hover:text-white focus:ring-4 focus:ring-blue-300">
            Shop Now
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* Product Section */}
      <section id='productsection' className="py-[50px] bg-[#fafafa] px-5">
        <h2 className="text-3xl pb-5 font-bold text-center">
          <span className='text-[#202020] font-mono'>Collection</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-indigo rounded-lg mx-auto">
          {/* Product Card: Seashells */}
          <div className="relative max-w-xs mx-auto p-4 shadow-md rounded-lg bg-white border border-solid border-[#202020] transition-all duration-500">
            <div className="block overflow-hidden flex justify-center">
              <img src={seashells.src} alt="Seashell Collection" className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-[#ef4a0d] mb-2 capitalize transition-all duration-500">Seashell Collection</h4>
              <a href="seashellProducts" className="bg-[#202020] shadow-sm py-2 px-5 text-xs text-white font-semibold">View All</a>
            </div>
          </div>

          {/* Product Card: Pearls */}
          <div className="relative max-w-xs mx-auto p-4 shadow-md rounded-lg bg-white border border-solid border-[#202020] transition-all duration-500">
            <div className="block overflow-hidden flex justify-center">
              <img src={pearls.src} alt="Pearls Collection" className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-[#ef4a0d] mb-2 capitalize transition-all duration-500">Pearls Collection</h4>
              <a href="pearlProducts"  className="bg-[#202020] shadow-sm py-2 px-5 text-xs text-white font-semibold">View All</a>
            </div>
          </div>

          {/* Product Card: Daisy Flower */}
          <div className="relative max-w-xs mx-auto p-4 shadow-md rounded-lg bg-white border border-solid border-[#202020] transition-all duration-500">
            <div className="block overflow-hidden flex justify-center">
              <img src={daisyFlower.src} alt="Daisy Flower Collection" className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-[#ef4a0d] mb-2 capitalize transition-all duration-500">Daisy Flower Collection</h4>
              <a href="daisyFlowerProducts"  className="bg-[#202020] shadow-sm py-2 px-5 text-xs text-white font-semibold">View All</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='aboutsection' className="w-full bg-[#fafafa] px-5 pt-[120px]">
        <h2 className="text-3xl pb-3 font-bold text-center">
          <span className='text-[#202020] font-mono'>About</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex justify-center">
            <img src={aboutsectionImage.src} alt="About Us" className="rounded-3xl object-cover w-full max-w-md" />
          </div>
          <div className='relative p-10 font-mono rounded-lg text-center flex flex-col items-center justify-center'>
            <p>
              At Blaze.lk, we craft unique, handmade accessories that bring a touch of elegance and personality to your everyday style. Specializing in pearl bracelets, seashell earrings, necklaces, hair clips, and key tags, each piece is carefully designed with love and creativity. Our commitment to quality ensures that every item reflects timeless beauty and craftsmanship, offering you one-of-a-kind pieces at affordable prices. Celebrate your individuality with our handcrafted collections, made to inspire and enhance your look.
            </p>
            <a href="#customerReview" className="inline-flex items-center font-mono justify-center mt-5 px-5 py-3 text-base font-medium text-center text-black bg-transparent border border-black hover:bg-[#ef4a0d] hover:border-[#ef4a0d] hover:text-white focus:ring-4 focus:ring-blue-300">
              Customer Reviews
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Review Section */}
      <section  id='contactsection' className="bg-[#fafafa] py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl pb-3 font-bold text-center">
            <span className='text-[#202020] font-mono'>Customer Reviews</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center font-bold leading-6 mx-auto">
            {/* Review Image 1 */}
            <div className="relative max-w-xs mx-auto rounded-2xl transition-all duration-500">
              <img src={img1.src} alt="Customer Review" className="w-full h-auto rounded-2xl" />
            </div>
            {/* Review Image 2 */}
            <div className="relative max-w-xs mx-auto rounded-2xl transition-all duration-500">
              <img src={img2.src} alt="Customer Review" className="w-full h-auto rounded-2xl" />
            </div>
            {/* Review Image 3 */}
            <div className="relative max-w-xs mx-auto rounded-2xl transition-all duration-500">
              <img src={img4.src} alt="Customer Review" className="w-full h-auto rounded-2xl" />
            </div>
            {/* View All Button */}
            <div className="relative max-w-xs mx-auto">
              <a href='https://www.facebook.com/media/set/?set=a.337163209270194&type=3' target="_blank" className="bg-[#202020] py-2 px-5 text-white font-semibold">View All Reviews</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
