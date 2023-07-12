// Icons
import { PlusIcon } from '@heroicons/react/24/solid';
// use context hook to global context app
import { useContext } from "react";
// created context
import { ShoppingCartContext } from "../../Context";

const Card = ({category, productImg, productName, productPrice }) => {
    // saving the context
    const context = useContext(ShoppingCartContext);

    return (
        <div className="border transition-all border-gray-500 bg-whitem rounded-t-lg cursor-pointer w-56 h-72 overflow-hidden hover:-translate-y-2 hover:shadow-lg">
            <figure className="relative mb-4 w-full h-4/5 overflow-hidden">
                <span className="absolute bottom-2 left-2 bg-zinc-800 px-3 text-white text-sm py-1 rounded-full z-50">{category}</span>
                <img src={productImg} alt="" className="absolute w-full h-full object-cover transition scale scale-110 hover:scale-100"/>
                <div className="absolute top-3 right-3 flex justify-center items-center bg-white w-6 h-6 rounded-full"
                onClick={() => {
                    // increment count form context.jsx
                    context.setCartCounter(context.cartCounter + 1)
                }}>
                    <PlusIcon className="h-5 w-5 text-black font-bold"/>
                </div>
            </figure>
            <p className="px-3 flex justify-between items-center">
                <span className="text-sm">{productName}</span>
                <span className="font-bold text-lg">${productPrice}</span>
            </p>
        </div>
    );
}

export default Card;
