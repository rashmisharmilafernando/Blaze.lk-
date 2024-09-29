import ProductCard from "../components/ProductCard";
import seashells01 from "../assets/seashell01.png"



export default function seashellProducts() {
    // const product = [
    //     {
    //         imageSrc: '01',
    //         title: 'Industrial Problem-Solving',
    //         price: `Our industrial problem-solving services address complex challenges in various industries, providing innovative solutions for efficiency, cost reduction, and productivity improvement, including root cause analysis and customized solutions.`,
    //         name: '/services/service01',
    //         link: '/services/service01'
    //     },
    //     {
    //         imageSrc: '01',
    //         title: 'Industrial Problem-Solving',
    //         price: `Our industrial problem-solving services address complex challenges in various industries, providing innovative solutions for efficiency, cost reduction, and productivity improvement, including root cause analysis and customized solutions.`,
    //         name: '/services/service01',
    //         link: '/services/service01'
    //     },
    //     {
    //         imageSrc: '01',
    //         title: 'Industrial Problem-Solving',
    //         price: `Our industrial problem-solving services address complex challenges in various industries, providing innovative solutions for efficiency, cost reduction, and productivity improvement, including root cause analysis and customized solutions.`,
    //         name: '/services/service01',
    //         link: '/services/service01'
    //     }
    // ]
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-3xl pb-3 pt-7 font-bold items-center">
                    <span className='text-[#202020] font-mono pr-1'>Seashells Collections</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProductCard
                        imageSrc={seashells01.src}
                        title="Earrings"
                        price="Rs 300.00 LKR"
                        
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
                        
                    />
                    <ProductCard
                        imageSrc="https://pagedone.io/asset/uploads/1700726207.png"
                        title="Cold Perfume"
                        price="$100"
                        
                    />
                </div>
            </div>
        </section>

    );
}