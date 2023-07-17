// heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ id, img, name, price, handleDelete }) => {
    return (
        <div className="flex items-center justify-between gap-2">
            <div className='flex items-center'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg' src={img} alt={name} />
                </figure>
            </div>
            <div className='flex justify-center gap-2 flex-col pr-3'>
                <h5 className='text-white text-lg font-bold'>{name}</h5>
                <p className='text-sm font-light text-gray-400'>${price} USD</p>
            </div>
            <div className='flex items-center justify-center'>
                <XMarkIcon
                    className="h-6 w-6 text-white font-bold rounded-2xl p-1 bg-red-600 cursor-pointer"
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    );
}

export default OrderCard;