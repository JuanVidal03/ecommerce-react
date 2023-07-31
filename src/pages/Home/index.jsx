// react hooks
import { useContext } from "react";
// base strcuture
import Layout from "../../components/layout";
// card component
import Card from "../../components/Card";
import ProductDetail from '../../components/ProductDetail/index.jsx';
// context
import { ShoppingCartContext } from "../../Context";

// home component
const Home = () => {

    // get context with items
    const context = useContext(ShoppingCartContext);

    // render view depend the filter
    const renderView = () => {
        if(context.filteredItems?.length > 0){

            return (
                context.filteredItems?.map(item => {
                    return <Card key={item.id} id={item.id} category={item.category.name} productImg={item.images[0]} productName={item.title} productPrice={item.price} description={item.description}/>
                })
            )
            
        } else {
            return (
                <h3>There's not anything with that name :(</h3>
            )
        }
    }

    return (
        <Layout>
            <h1 className="font-extrabold text-4xl text-zinc-800 uppercase">These are all our fantastic products!</h1>
            <div className="w-full flex justify-center items-center mt-5">
                <input className="border p-2 px-3 rounded-lg focus:outline-0 focus:bg-zinc-800 focus:text-white transition-all" type="text" placeholder="Search a Product" autoComplete="false"
                onChange={(e) => context.setSearchCategory(e.target.value)}/>
            </div>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-16">
                { renderView() }
            </div>
            <ProductDetail/>
        </Layout>
    );
}

export default Home;