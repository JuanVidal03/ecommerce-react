// react hooks
import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) => {

    // cart counter
    const [cartCounter, setCartCounter] = useState(0);

    // checking if product detail is open
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    // open and close product detail
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // checking if checkout side menu is open
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    // open and close checkout side menu
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // showing product detail
    const [productToShow, setProductToShow] = useState({});

    // add product to cart
    const [cartProducts, setCartProducts] = useState([]);

    // creating a single order
    const [order, setOrder] = useState([]);

    // get all products
    const [items, setItems] = useState(null);
    // filtered items
    const [filteredItems, setFilteredItems] = useState(null);
    // search category
    const [searchCategory, setSearchCategory] = useState(null);

    const filteredItemsByTitle = (items, searchCategory) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchCategory.toLowerCase()));
    }

    useEffect(() => {
        if(searchCategory) setFilteredItems(filteredItemsByTitle(items, searchCategory))
    }, [items, searchCategory]);

    // getting all items
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        // values that will comunicate with card component
        <ShoppingCartContext.Provider value={{
            cartCounter,
            setCartCounter,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            searchCategory,
            setSearchCategory,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;