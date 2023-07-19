// reack hooks
import { useContext } from "react";
import Layout from "../../components/layout";
// import cart context
import { ShoppingCartContext } from "../../Context";
// order card component
import OrderCard from '../../components/OrderCard/index.jsx';


const MyOrder = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <h1 className="font-extrabold text-4xl text-zinc-800">My Order</h1>

            <div className="bg-zinc-800 p-5 mt-5 rounded gap-2 flex flex-col">
                {
                    // verifing if there is an element inside the cart
                    context.order.length > 0 ? (
                        // showing the elements inside the cart array
                        context.order?.slice(-1)[0].products.map(product => (
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