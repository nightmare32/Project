export const cart = {
    items: [],
    quantity: 0,
    totalPrice: 0,
}

export const addProduct = (product) => {
    cart.items.push(product);
    cart.quantity += 1;

}



