
const Card = ({category, productImg, productName, productPrice }) => {
    return (
        <div className="border transition-all border-gray-500 bg-whitem rounded-t-lg cursor-pointer w-56 h-72 overflow-hidden hover:-translate-y-2 hover:shadow-lg">
            <figure className="relative mb-4 w-full h-4/5 overflow-hidden">
                <span className="absolute bottom-2 left-2 bg-zinc-800 px-3 text-white text-sm py-1 rounded-full z-50">{category}</span>
                <img src={productImg} alt="" className="absolute w-full h-full object-cover transition hover:scale-110"/>
                <div className="absolute top-3 right-3 flex justify-center items-center bg-white w-6 h-6 rounded-full">+</div>
            </figure>
            <p className="px-3 flex justify-between items-center">
                <span className="text-sm">{productName}</span>
                <span className="font-bold text-lg">${productPrice}</span>
            </p>
        </div>
    );
}

export default Card;
