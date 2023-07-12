// heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';
// react hooks
import { useContext } from 'react';
// shopping cart cart context context
import { ShoppingCartContext } from "../../Context";
// product detail styles
import './styles.css';

const ProductDetail = () => {
    // context to open or close the sidebar
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-zinc-700 border-l-white z-50 p-6`}
        >
            <div className='relative flex justify-between items-center'>
                <div
                    className="absolute w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center font-bold top-0 right-0 cursor-pointer"
                    onClick={() => context.closeProductDetail()}
                >
                    <XMarkIcon className="h-6 w-6 text-white font-bold" />
                </div>
                <h2 className='font-medium text-xl text-white'>Product Detail</h2>
            </div>
            <figure className='mt-8 w-full flex flex-col items-center justify-center'>
                <img className='rounded-md w-64' src={context.productToShow.productImg} alt={context.productToShow.productName} />
            </figure>
            <div className='mt-6'>
                <h5 className='text-xl font-bold text-white'>{context.productToShow.productName}</h5>
                <h6 className='text-lg font-bold text-white mt-2'>${context.productToShow.productPrice} USD</h6>
                <p className='text-white mt-2'>{context.productToShow.description}</p>
            </div>
        </aside>
    );
}

export default ProductDetail;