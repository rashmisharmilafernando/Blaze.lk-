import ProductCard from "../components/ProductCard";
import seashells01 from "../assets/seashell01.png";

export default function SeashellProducts() {
    return (
        <section className="py-24  bg-[#fafafa]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl pb-3 pt-[50px] font-bold text-center">
                    <span className='text-[#202020] font-mono'>Seashell Collections</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProductCard
                        imageSrc={seashells01.src}
                        title="Earrings"
                        price="Rs 300.00 LKR"
                    />
                    {/* <ProductCard
                        imageSrc="https://pagedone.io/asset/uploads/1700726207.png"
                        title="Cold Perfume"
                        price="$100"
                    />
                    <ProductCard
                        imageSrc="https://pagedone.io/asset/uploads/1700726207.png"
                        title="Cold Perfume"
                        price="$100"
                    />
                    <ProductCard
                        imageSrc="https://pagedone.io/asset/uploads/1700726207.png"
                        title="Cold Perfume"
                        price="$100"
                    /> */}
                </div>
            </div>
        </section>
    );
}
