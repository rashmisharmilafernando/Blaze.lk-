import React from "react";

interface ProductCardProps {
    imageSrc: string;
    title: string;
    price: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, description }) => {
    return (
        <a
            href="javascript:;"
            className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
        >
            <div>
                <img
                    src={imageSrc}
                    alt={`${title} image`}
                    className="w-full aspect-square rounded-2xl object-cover"
                />
            </div>
            <div className="mt-5">
                <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                        {title}
                    </h6>
                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">{price}</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">{description}</p>
            </div>
        </a>
    );
};

export default ProductCard;
