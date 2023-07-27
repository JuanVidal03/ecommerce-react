// heroicons
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className='border border-black rounded-lg gap-2  p-3 my-3 w-80'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col w-50'>
                    <p>23/07/2023</p>
                    <h6>{ totalProducts } articles</h6>
                </div>
                <div className='flex items-center gap-2 w-50'>
                    <h5 className='font-bold'>${ totalPrice } USD</h5>
                    <MagnifyingGlassIcon className="h-6 w-6 text-black font-bold transition-all hover:text-zinc-800" />
                </div>
            </div>
        </div>
    );
}

export default OrdersCard;
