// react hooks
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) => {

    // cart counter
    const [cartCounter, setCartCounter] = useState(0);

    return (
        // values that will comunicate with card component
        <ShoppingCartContext.Provider value={{
            cartCounter,
            setCartCounter
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;