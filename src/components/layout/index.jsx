// this component will be the structure to all pages

const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center mt-20 px-12">
            { children }
        </div>
    );
}

export default Layout;