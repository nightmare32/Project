import { addProduct, cart } from "../cart/cart.js";

export const openCard = (item) => {
    const cartCount = document.querySelector('.cartCount');

    const instance = basicLightbox.create(`
        <div class="modalCard">
            <li class="ModalListItem" data-id=${item.id} data-category=${item.category}>
                <h2 class="ModalListItemTitle">${item.title}</h2>
                <div class="ModalListItemImgContainer">
                    <img src=${item.url} alt="${item.title}" class="ModalListItemImg">
                </div>
                <p class="ModalListItemDescription"><b>Description: </b>${item.description}</p>
                <div class="ModalOrder">
                    <p class="ModalListItemPrice"><b>Price: </b>${item.price} $ </p>
                    <div class="ModalListItemCart">
                        <img src="../../assets/cart.png" alt="cartIcon" data-image="cart"  data-category=${item.category} data-id=${item.id} class="modalCartProduct">
                    </div>
                </div>
            </li>
            <button class="cartClose">Close</button>
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('.cartClose').onclick = instance.close;
        }
    })

    const addToBigCart = () => {
        addProduct(item);
        instance.close();
        cartCount.textContent = cart.quantity;
    }

    instance.show();
    const modalCart = document.querySelector('.modalCartProduct');
    modalCart.addEventListener('click', addToBigCart)
}
