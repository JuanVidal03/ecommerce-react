// heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ totalPrice, totalProducts }) => {


    return (
        <div className='flex items-center border border-black rounded-lg gap-2'>
            <h5>Total Price: { totalPrice }</h5>
            <h6>Total Products: { totalProducts }</h6>
            <p>Date: 23/07/2023</p>
        </div>
    );
}

export default OrdersCard;
