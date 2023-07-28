// heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';
// react hooks
import { useContext } from 'react';
// react router dom
import { Link } from 'react-router-dom';
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

    // create an order 
    const handleCheckout = () => {
        // checkout schema
        const orderToAdd = {
            date: new Date().toLocaleTimeString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        // adding new order
        context.setOrder([...context.order, orderToAdd]);
        // cleaning cart product array
        context.setCartProducts([]);
        // closing checkout side menu
        context.closeCheckoutSideMenu();
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-zinc-700 border-l-white z-50 p-6`}
        >
            {/* text order and close btn */}
            <div className='relative flex justify-between items-center mb-10'>
                <div
                    className="absolute w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center font-bold top-0 right-0 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                >
                    <XMarkIcon className="h-6 w-6 text-white font-bold" />
                </div>
                <h2 className='font-medium text-xl text-white'>My Order</h2>
            </div>

            {/* products */}
            <div className='flex flex-col gap-4 scroll-bar pr-3 mb-32'>
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

            {/* total price and create checkout btn */}
            <div className='absolute w-80 bottom-0 mb-3 flex items-center justify-center gap-3 flex-col bg-zinc-700'>
                <div className='w-80 mt-5 p-3 bg-white rounded-lg flex justify-between items-center'>
                    <h6 className='font-bold'>Total price:</h6>
                    <span className='text-green-500 font-bold text-2xl'>${totalPrice(context.cartProducts)} USD</span>
                </div>
                <Link className='w-full' to='/my-order/last'>
                    <button
                        className='w-full transition-all p-3 text-center rounded bg-green-600 uppercase text-white font-bold hover:scale-105'
                        onClick={() => handleCheckout()}
                    >Checkout</button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;