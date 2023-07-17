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
// total price function
import { totalPrice } from '../../utils/totalPrice';

const CheckoutSideMenu = () => {
    // context to open or close the sidebar
    const context = useContext(ShoppingCartContext);

    // delete product
    const handleDelete = idProduct => {
        const filteredProducts = context.cartProducts.filter(product => product.id != idProduct);
        context.setCartProducts(filteredProducts); // updating cart
    }

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
                    // verifing if there is an element inside the cart
                    context.cartProducts.length > 0 ? (
                        // showing the elements inside the cart array
                        context.cartProducts.map(product => (
                            <OrderCard
                            key={product.id}
                            id={product.id}
                            img={product.productImg}
                            name={product.productName}
                            price={product.productPrice}
                            handleDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <h5 className='text-white font-bold flex justify-center items-center'>There's no products to show :(</h5>
                    )
                    
                }
            </div>
            <div className='mt-5 p-3 bg-white rounded-lg flex justify-between items-center'>
                <h6 className='font-bold'>Total price:</h6>
                <span className='text-green-500 font-bold text-2xl'>${totalPrice(context.cartProducts)} USD</span>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;