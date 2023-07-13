// react hooks
import { createContext, useState } from "react";

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

    // add product ti cart
    const [cartProducts, setCartProducts] = useState([]);

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
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;