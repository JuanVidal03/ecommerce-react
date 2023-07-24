import Layout from "../../components/layout";
// ordersCard component
import OrdersCard from "../../components/OrdersCard";
// order context
import { ShoppingCartContext } from "../../Context";
// react hooks
import { useContext } from "react";
// react router dom
import { Link } from "react-router-dom";


const MyOrders= () => {

    // order context
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
                <h1 className="font-extrabold text-4xl text-zinc-800">My Orders</h1>
            {
                context.order.map((ordersCard, index) => (
                    <Link
                        key={index}
                        to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={ordersCard.totalPrice}
                            totalProducts={ordersCard.totalProducts}
                            />
                    </Link>
                ))
            }
        </Layout>
    );
}

export default MyOrders;
