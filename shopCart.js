import { insurance_plans } from './json.js';

const title = document.getElementById('titles__product');
const description = document.getElementById('titles__description');
const price = document.getElementById('titles__price');
const quantity = document.getElementById('titles__quantity');
const button = document.getElementById('titles__empty');
const shopCart = document.getElementById('#shop-cart');

localStorage.setItem(
    'shop-cart',
    JSON.stringify([insurance_plans[0], insurance_plans[1], insurance_plans[2]])
);

const cartFromStorage = JSON.parse(localStorage.getItem('shop-cart'));

for (let item of cartFromStorage) {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'product';

    const titleAndImg = document.createElement('div');
    titleAndImg.className = 'product__title-img';

    const itemTitle = document.createElement('h3');
    itemTitle.className = 'product__title';

    const itemPhoto = document.createElement('img');
    itemPhoto.className = 'product__img';

    const itemDescription = document.createElement('ul');
    itemDescription.className = 'product__description-list';

    const itemPrice = document.createElement('p');
    itemPrice.className = 'product__price';

    const itemQuantity = document.createElement('p');
    itemQuantity.innerHTML = '1';
    itemQuantity.className = 'product__itemQuantity';

    const addButton = document.createElement('button');
    addButton.className = 'product__addButton';

    itemTitle.innerHTML = item.title;
    itemPhoto.src =
        'https://comunidad.wiri.la/wp-content/uploads/2021/10/Blog-Wiri-Ar-Fotos-destacadas-1.jpg';
    itemPhoto.style.width = '150px';

    for (let description of item.description) {
        const listItem = document.createElement('li');
        listItem.innerHTML = description;
        itemDescription.appendChild(listItem);
    }

    itemPrice.innerHTML = item.price;
    addButton.innerHTML = 'Quitar';
    addButton.id = item.id;

    addButton.addEventListener('click', (evt) => {
        const newShopCart = cartFromStorage.filter(
            (el) => el.id !== Number(evt.target.id)
        );
        evt.stopPropagation();
        localStorage.removeItem('shop-cart');
        localStorage.setItem('shop-cart', JSON.stringify(newShopCart));
        location.reload();
    });

    titleAndImg.appendChild(itemPhoto);
    titleAndImg.appendChild(itemTitle);

    title.appendChild(titleAndImg);
    description.appendChild(itemDescription);
    price.appendChild(itemPrice);
    itemContainer.appendChild(itemQuantity);
    quantity.appendChild(itemQuantity);
    button.appendChild(addButton);
    shopCart.appendChild(itemContainer);
}
