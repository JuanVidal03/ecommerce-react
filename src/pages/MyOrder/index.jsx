// reack hooks
import { useContext } from "react";
// react router dom
import { Link } from "react-router-dom";
// components
import Layout from "../../components/layout";
import OrderCard from '../../components/OrderCard/index.jsx';
// import cart context
import { ShoppingCartContext } from "../../Context";
// heroicons
import { ChevronLeftIcon } from '@heroicons/react/24/solid';


const MyOrder = () => {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    if (index === 'last') index = context.order?.length - 1;

    return (
        <Layout>
            <div className="flex justify-between items-center gap-5">
                <Link to='/my-orders'>
                    <ChevronLeftIcon className="h-8 w-8 text-white font-bold bg-zinc-600 rounded-full p-1 cursor-pointer" />
                </Link>
                <h1 className="font-extrabold text-4xl text-zinc-800">My Order</h1>
            </div>

            <div className="bg-zinc-800 p-5 mt-5 rounded gap-2 flex flex-col">
                {
                    // verifing if there is an element inside the cart
                    context.order.length > 0 ? (
                        // showing the elements inside the cart array
                        context.order?.[index]?.products.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                img={product.productImg}
                                name={product.productName}
                                price={product.productPrice}
                            />
                        ))
                    ) : (
                        <h5 className='text-white font-bold flex justify-center items-center'>There's no products to show :(</h5>
                    )
                    
                }
            </div>
        </Layout>
    );
}

export default MyOrder;