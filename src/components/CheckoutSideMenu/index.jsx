// heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';
// react hooks
import { useContext } from 'react';
// shopping cart cart context context
import { ShoppingCartContext } from "../../Context";
// product detail styles
import './styles.css';
// order card component
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    // context to open or close the sidebar
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-zinc-700 border-l-white z-50 p-6`}
        >
            <div className='relative flex justify-between items-center mb-10'>
                <div
                    className="absolute w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center font-bold top-0 right-0 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                >
                    <XMarkIcon className="h-6 w-6 text-white font-bold" />
                </div>
                <h2 className='font-medium text-xl text-white'>My Order</h2>
            </div>
            <div className='flex flex-col gap-4 scroll-bar pr-3'>
                {
                    // showing the elements inside the cart array
                    context.cartProducts.map(product => {
                        return <OrderCard key={product.id} img={product.productImg} name={product.productName} price={product.productPrice}/>
                    })
                }
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;