// react hooks
import { useState, useEffect } from "react";
// base strcuture
import Layout from "../../components/layout";
// card component
import Card from "../../components/Card";
import ProductDetail from '../../components/ProductDetail/index.jsx';

// home component
const Home = () => {

    const [items, setItems] = useState(null);

    // getting all items
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);


    return (
        <Layout>
            <h1 className="font-extrabold text-4xl text-zinc-800 uppercase">These are all our fantastic products!</h1>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-16">
            {
                items?.map(item => {
                    return <Card key={item.id} id={item.id} category={item.category.name} productImg={item.images[0]} productName={item.title} productPrice={item.price} description={item.description}/>
                })
            }
            </div>
            <ProductDetail/>
        </Layout>
    );
}

export default Home;