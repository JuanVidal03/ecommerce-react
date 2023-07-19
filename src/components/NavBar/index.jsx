import { ShoppingCartIcon } from '@heroicons/react/24/solid';
// react hooks
import { useContext } from "react";
// react router dom
import { NavLink } from "react-router-dom";
// import cart context
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
    // cart counter context
    const cartContext = useContext(ShoppingCartContext);
    // what page is active
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-50 w-full py-4 px-10 font-light text-lg bg-zinc-800 top-0 shadow-lg">
            {/* Left sideBar */}
            <ul className="flex justify-center items-center gap-3">
                <li className="font-bold text-2xl text-white">
                    <NavLink
                    to='/'
                    >
                        OpenMind
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/clothes'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/electronics'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/furnitures'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/toys'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/others'
                    
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* Rigth sideBar */}
            <ul className="flex justify-center items-center gap-3">
                <li className="text-white">
                    juan@openmind.com
                </li>
                <li className="text-white">
                    <NavLink
                    to='/my-orders'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/my-account'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li className="text-white">
                    <NavLink
                    to='/sign-in'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li
                    className={`${cartContext.isCheckoutSideMenuOpen ? 'block': 'hidden'}text-white flex gap-1 items-center justify-center cursor-pointer`}
                    onClick={() => cartContext.openCheckoutSideMenu()}
                >
                    <ShoppingCartIcon className='h-6 w-6 text-white font-bold' />
                    <div className='text-white'>
                        {cartContext.cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;