// heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';
// product detail styles
import './styles.css';

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 bg-zinc-700 border-l-white z-50 p-6">
            <div className='relative flex justify-between items-center'>
                <div className='absolute w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center font-bold top-0 right-0 cursor-pointer'>
                <XMarkIcon className="h-6 w-6 text-white font-bold" />
                </div>
                <h2 className='font-medium text-xl'>Detail</h2>
            </div>
        </aside>
    );
}

export default ProductDetail;