"use client";

import { SetStateAction, useState } from "react";
import ProductCard from "../components/ProductCard";
import seashells01 from "../assets/seashell01.png";
import seashells02 from "../assets/seashell02.png";
import seashells03 from "../assets/seashell03.png";
import seashells04 from "../assets/seashell04.png";
import seashells05 from "../assets/seashell05.png";
import seashells06 from "../assets/seashell06.png";
import seashells07 from "../assets/seashell07.png";
import seashells08 from "../assets/seashell08.png";
import seashells09 from "../assets/seashell09.png";
import seashells10 from "../assets/seashell10.png";
import seashells11 from "../assets/seashell11.png";
import seashells12 from "../assets/seashell12.jpg";
import seashells13 from "../assets/seashell13.jpg";
import seashells14 from "../assets/seashell14.jpg";
 

export default function SeashellProducts() {
    const [activeCategory, setActiveCategory] = useState("Earrings");

    const handleCategoryClick = (category: SetStateAction<string>) => {
        setActiveCategory(category);
    };

    return (
        <section className="py-24 bg-[#fafafa]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl pb-3 pt-[50px] font-bold text-center">
                    <span className='text-[#202020] font-mono'>Seashell Collections</span>
                </h2>
                <nav className="flex items-center ">
                    <div className="flex items-center ">
                        <li onClick={() => handleCategoryClick("Earrings")} className='p-4 relative text-sm font-mono font-light w-fit block font-gray hover:font-bold cursor-pointer'>
                            Earrings
                        </li>
                        <li onClick={() => handleCategoryClick("Necklaces")} className='p-4 relative text-sm font-mono font-light w-fit block font-gray hover:font-bold cursor-pointer'>
                            Necklaces
                        </li>
                        <li onClick={() => handleCategoryClick("Bracelets")} className='p-4 relative text-sm font-mono font-light w-fit block font-gray hover:font-bold cursor-pointer'>
                            Bracelets
                        </li>
                        <li onClick={() => handleCategoryClick("Hairclips")} className='p-4 relative text-sm font-mono font-light w-fit block font-gray hover:font-bold cursor-pointer'>
                            Hairclips
                        </li>
                        <li onClick={() => handleCategoryClick("Room Deco")} className='p-4 relative text-sm font-mono font-light w-fit block font-gray hover:font-bold cursor-pointer'>
                            Room Deco
                        </li>
                    </div>
                </nav>
                <hr className="w/2 p-5"></hr>

                {activeCategory === "Earrings" && (
                    <section id="seashellEarrings">
                        <h4 className="text-2xl md:text-xl pb-3 pt-[1px] font-bold">
                            <span className='text-[#202020] font-mono'>Earrings</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProductCard imageSrc={seashells01.src} title="Earrings" price="Rs 250.00 LKR" whatsappLink="https://wa.me/p/7529790103721496/94702713066" />
                            <ProductCard imageSrc={seashells02.src} title="Cold Perfume" price="Rs 220.00 LKR" whatsappLink="https://wa.me/p/7862443830535212/94702713066" />
                            <ProductCard imageSrc={seashells05.src} title="Earrings" price="Rs 250.00 LKR" whatsappLink="https://wa.me/p/7529790103721496/94702713066" />
                            <ProductCard imageSrc={seashells06.src} title="Cold Perfume" price="Rs 220.00 LKR" whatsappLink="https://wa.me/p/7862443830535212/94702713066" />
                        </div>
                    </section>
                )}

                {activeCategory === "Necklaces" && (
                    <section id="seashellNecklace">
                        <h4 className="text-2xl md:text-xl pb-3 pt-[50px] font-bold">
                            <span className='text-[#202020] font-mono'>Necklaces</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProductCard imageSrc={seashells03.src} title="Cold Perfume" price="Rs 350.00 LKR" whatsappLink="https://wa.me/p/7919933211421965/94702713066" />
                            <ProductCard imageSrc={seashells04.src} title="Cold Perfume" price="Rs 350.00 LKR" whatsappLink="https://wa.me/p/8082324548480892/94702713066" />
                        </div>
                    </section>
                )}

                {activeCategory === "Bracelets" && (
                    <section id="seashellBracelet">
                        <h4 className="text-2xl md:text-xl pb-3 pt-[50px] font-bold">
                            <span className='text-[#202020] font-mono'>Bracelet</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProductCard imageSrc={seashells09.src} title="Cold Perfume" price="Rs 350.00 LKR" whatsappLink="https://wa.me/p/7919933211421965/94702713066" />
                            <ProductCard imageSrc={seashells10.src} title="Cold Perfume" price="Rs 350.00 LKR" whatsappLink="https://wa.me/p/8082324548480892/94702713066" />
                            <ProductCard imageSrc={seashells11.src} title="Earrings" price="Rs 250.00 LKR" whatsappLink="https://wa.me/p/7529790103721496/94702713066" />
                        </div>
                    </section>
                )}

                {activeCategory === "Hairclips" && (
                    <section id="seashellHairclips">
                        <h4 className="text-2xl md:text-xl pb-3 pt-[50px] font-bold">
                            <span className='text-[#202020] font-mono'>Hairclips</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProductCard imageSrc={seashells12.src} title="Cold Perfume" price="Rs 220.00 LKR" whatsappLink="https://wa.me/p/7862443830535212/94702713066" />
                            <ProductCard imageSrc={seashells13.src} title="Cold Perfume" price="Rs 220.00 LKR" whatsappLink="https://wa.me/p/7862443830535212/94702713066" />
                        </div>
                    </section>
                )}

                {activeCategory === "Room Deco" && (
                    <section id="seashellRoomDeco">
                        <h4 className="text-2xl md:text-xl pb-3 pt-[50px] font-bold">
                            <span className='text-[#202020] font-mono'>Room Deco</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProductCard imageSrc={seashells14.src} title="Earrings" price="Rs 250.00 LKR" whatsappLink="https://wa.me/p/7529790103721496/94702713066" />
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
}
