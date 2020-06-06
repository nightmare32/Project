import { createMarkup } from '../pages/games.js';
import { games, programs } from '../../data.js';
import { addProduct } from '../cart/cart.js';
import { openCart } from '../modal/modal.js';
import { openCard } from '../modal/modalCard.js';
import { cart } from '../cart/cart.js';


const header = () => {
    const navigationList = document.querySelector('.navigationList'); //ul
    const listItems = document.querySelector('.listItems'); //ul
    const user = document.querySelector('.user');

    const headerCart = document.querySelector('.modalCart');
    headerCart.addEventListener('click', openCart);

    const cartCount = document.querySelector('.cartCount');

    const currentActivePage = document.querySelector('.activeLink'); //a
    const currentPageName = document.querySelector('.currentPageName'); //p
    listItems.innerHTML = createMarkup(games);


    const setActiveLink = (event) => {
        if (event.target === event.currentTarget) {
            return
        }
        const currentActiveLink = document.querySelector('.activeLink');
        currentActiveLink && currentActiveLink.classList.remove('activeLink');
        event.target.classList.add('activeLink');

        switch (event.target.dataset.page) {
            case 'games':
                listItems.innerHTML = createMarkup(games);
                break;
            case 'programs':
                listItems.innerHTML = createMarkup(programs)
                break;
            case 'news':
                listItems.innerHTML = createMarkup(programs)
                break;
            default:
                break;
        }
    }

    const setUser = (event) => {
        event.currentTarget.classList.toggle('activeUser');
    }

    const openModal = (event) => {
        if (event.target === event.currentTarget) {
            return
        }
        if (event.target.dataset.image) {
            const category = event.target.dataset.category;
            const id = event.target.dataset.id;
            if (category === "games") {
                for (const item of games) {
                    if (item.id === id) {
                        addProduct(item);
                        cartCount.textContent = cart.quantity;
                    }
                }
            }
            if (category === "programs") {
                for (const item of programs) {
                    if (item.id === id) {
                        addProduct(item);
                        cartCount.textContent = cart.quantity;
                    }
                }
            }
        } else {
            const element = event.target.closest('[data-licategory]'); //li
            const id = element.dataset.liid;
            const category = element.dataset.licategory;
            if (category === 'games') {
                const item = games.find(game => game.id === id);
                // let item; 
                // for (const game of games) {
                //     if (game.id === id) {
                //         item = game
                //     }
                // }
                openCard(item);
            }
            if (category === 'programs') {
                const item = programs.find(item => item.id === id);
                openCard(item);
            }
        }

    }

    navigationList.addEventListener('click', setActiveLink); //ul 
    user.addEventListener('click', setUser);
    listItems.addEventListener('click', openModal);


}

export default header;


















// const navigationList = document.querySelector('.navigationList');
// // console.log(navigationList);

// // ============= styled elements ===================

// // navigationList.style.backgroundColor = 'green';
// // navigationList.classList.add('backgroundStyle');
// // navigationList.classList.remove('backgroundStyle');
// // navigationList.classList.toggle('navigationList');

// // const stylesToggle = document.querySelector('.stylesToggle');
// // stylesToggle.addEventListener('click', () => navigationList.classList.toggle('navigationList'))

