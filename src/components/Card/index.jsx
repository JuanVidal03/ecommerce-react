
const Card = () => {
    return (
        <div className="border transition-all border-gray-500 bg-whitem rounded-t-lg cursor-pointer w-56 h-72 overflow-hidden hover:-translate-y-2 hover:shadow-lg">
            <figure className="relative mb-4 w-full h-4/5">
                <span className="absolute bottom-2 left-2 bg-zinc-800 px-3 text-white text-sm py-1 rounded-full z-50">Electronics</span>
                <img src="https://images.pexels.com/photos/7857202/pexels-photo-7857202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="absolute w-full h-full object-cover"/>
                <div className="absolute top-3 right-3 flex justify-center items-center bg-white w-6 h-6 rounded-full">+</div>
            </figure>
            <p className="px-3 flex justify-between items-center">
                <span className="text-sm">HeadPhones</span>
                <span className="font-bold text-lg">$300</span>
            </p>
        </div>
    );
}

export default Card;
