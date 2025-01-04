const cart = [];
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const product = {
            name: productElement.querySelector('h3').innerText,
            price: parseFloat(button.getAttribute('data-price')),
        };

        cart.push(product);
        updateCartUI();
    });
});

function updateCartUI() {
    const cartContainer = document.querySelector('.cart-container');
    if (!cartContainer) {
        const cartModal = document.createElement('div');
        cartModal.className = 'cart-container';
        cartModal.style.position = 'fixed';
        cartModal.style.right = '10px';
        cartModal.style.top = '10px';
        cartModal.style.background = '#fff';
        cartModal.style.padding = '20px';
        cartModal.style.border = '1px solid #ccc';
        cartModal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

        const title = document.createElement('h3');
        title.innerText = 'Cart Items';
        cartModal.appendChild(title);

        const itemList = document.createElement('ul');
        itemList.className = 'cart-items';
        cartModal.appendChild(itemList);

        const totalPrice = document.createElement('p');
        totalPrice.className = 'cart-total';
        cartModal.appendChild(totalPrice);

        document.body.appendChild(cartModal);
    }

    const itemList = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.cart-total');

    itemList.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = '${ item.name } - ${ item.price.toFixed(2) }';
        itemList.appendChild(li);
        total += item.price;
    });

    totalPriceElement.innerText = 'Total: ${ total.toFixed(2) }';
}