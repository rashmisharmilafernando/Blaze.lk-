"use client";
import logo from "../assets/logo.png";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section>
      <header className="fixed w-full bg-[#fafafa] z-50">

        <nav className="flex justify-between items-center py-2 p-1 bg-[#202020]">
          <span className="flex items-center text-xs font-sans text-[#B7B7B7] ">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor" className="w-[1rem] h-[1rem] text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>


            <span className="pl-2">+94 711 186 006</span>
          </span>

          <div className="flex items-center ">
            <a href="https://www.instagram.com/blaze.lk_official/?hl=en" target="_blank" className="pr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[1rem] h-[1rem] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

            </a>

            <a href="https://www.facebook.com/Blaze.lkofficial" target="_blank" className="pr-4"
            >
              <svg
                className="w-[1rem] h-[1rem] text-white"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="currentColor" />
              </svg>

            </a>
            <a href="https://wa.me/94702713066" target="_blank" className="pr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[1rem] h-[1rem] text-white"
                fill="currentColor"
                style={{ color: "#ffffff" }}
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            <a href="https://www.tiktok.com/@blazelk4?lang=en" target="_blank" className="pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[1rem] h-[1rem] text-white"
                style={{ color: "#ffffff" }}
              >
                <path
                  fill="currentColor"
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </a>

          </div>

        </nav>

        <nav className="flex justify-between items-center text-sm pl-5 pr-5 pt-4 pb-4">
          <Link href='/' aria-label="Homepage">
            <img src={logo.src} alt="Logo" width={60} />
          </Link>

          {/* Desktop Menu */}
          <nav>
            <ul className='hidden sm:flex'>
              <li className='p-4 relative text-sm font-mono font-light w-fit block font-black '>
                <a href='/' className='link link--text'>Home</a>
              </li>
              <li className='p-4 relative text-sm font-mono font-light w-fit block font-black '>
                <a href='seashellProducts' className='link link--text'>Seashell Collections</a>
              </li>
              <li className='p-4 relative text-sm font-mono font-light w-fit block font-black '>
                <a href='pearlProducts' className='link link--text'>Pearls Collections</a>
              </li>
              <li className='p-4 relative text-sm font-mono font-light w-fit block font-black '>
                <a href='daisyFlowerProducts' className='link link--text'>Daisy Flower Collections</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block sm:hidden z-10'>
            {nav ? (
              <AiOutlineClose size={20} aria-label="Close menu" />
            ) : (
              <AiOutlineMenu size={20} aria-label="Open menu" />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`${nav ? 'sm:hidden absolute top-[100px] left-0 right-0 bottom-0 flex w-full h-screen bg-[#fafafa] ease-in duration-300'
              : 'sm:hidden absolute top-[100px] left-[-100%] right-0 bottom-0 flex w-full h-screen bg-[#fafafa] ease-in duration-300'
              }`}
            aria-hidden={!nav}
          >
            <ul>
              <li onClick={handleNav} className='p-4 text-[1rem]'>
                <Link href='/' className="font-mono hover:font-bold">Home</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-[1rem]'>
                <a href='seashellProducts' className='link link--text font-mono hover:font-bold'>Seashell Collections</a>
              </li>
              <li onClick={handleNav} className='p-4 text-[1rem]'>
                <a href='pearlProducts' className='link link--text font-mono hover:font-bold'>Pearls Collections</a>
              </li>
              <li onClick={handleNav} className='p-4 text-[1rem]'>
                <a href='daisyFlowerProducts' className='link link--text font-mono hover:font-bold'>Daisy Flower Collections</a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </section>
  );
};

export default Navbar;

