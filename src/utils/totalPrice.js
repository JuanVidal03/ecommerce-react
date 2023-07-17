/*
    // calculates the total price of a new order
    @param {Array} products
    return the sumatory of all products prices inside the cart
*/

export const totalPrice = products => {
    let sumatoryPriceProducts = 0;
    products.forEach(product =>  sumatoryPriceProducts += product.productPrice);
    return sumatoryPriceProducts;

}