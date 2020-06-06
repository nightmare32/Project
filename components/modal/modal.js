import { cart } from '../cart/cart.js';

const createItemsCartMarkup = () => {

    let markup = '';
    for (const item of cart.items) {
        markup += `
        <li class="cartListItem">
            <span><b>Title:</b> ${item.title}</span>
            <span><b>Price:</b> ${item.price}</span>
        </li>
        `
    }
    return markup
}

const getQuantity = () => {
    return `Total quantity: ${cart.items.length}`
}

const getTotalPrice = () => {
    let count = 0;
    for (const item of cart.items) {
        count += item.price
    }
    return `Total price: ${count}`
}

const instance = basicLightbox.create(`
    <div class="modal">
        <h2 class="modalTitle">Product in cart: </h2>
        <ul class="cartList">
        </ul>
        <div class="modalProperties">
            <h3 class="totalQuantity">Total quantity:</h3>
            <h3 class="totalPrice">Total price:</h3>
        </div>
        <button class="cartButton">Get order</button>
    <button class="cartClose">Close</button>
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('.cartClose').onclick = instance.close;
    }
})

const getOrder = () => {
    cart.items = [];
}

export const openCart = () => {
    instance.show();
    const cartList = document.querySelector('.cartList')
    cartList.innerHTML = createItemsCartMarkup();
    const totalQuantity = document.querySelector('.totalQuantity');
    totalQuantity.textContent = getQuantity();
    const totalPrice = document.querySelector('.totalPrice');
    totalPrice.textContent = getTotalPrice();
    const cartButton = document.querySelector('.cartButton');
    cartButton.addEventListener('click', getOrder);
    cartButton.onclick = instance.close;
}





