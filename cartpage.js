

let cardItems = document.querySelector(".card_items");



// updata total price of card products___________________________________________________________________________

const updateCartProductTotal = () => {

    let cartProducts = getProductsDataFromLS()

    let totalProductsPrice = cartProducts.reduce((accum, elm) => {
        let prodPrice = parseInt(elm.price) || 0;
        return accum + prodPrice;
    }, 0)

    document.querySelector('.sub_total').innerText = `₹${totalProductsPrice}`;
    document.querySelector('.final_price').innerText = `₹${totalProductsPrice + 50}`;
    
}




// Increment & Decrement of quentity in cart sec__________________________________________________________________

const quentityIncDectogal = (event, id, stock, price) => {
    let currElmCard = document.querySelector(`#card${id} `)
    let productQuentity = currElmCard.querySelector('.quentity')
    let prodPrice = currElmCard.querySelector('.price p')

    let quentity = 1;
    LsStoragePrice = 0;

    let cartProducts = getProductsDataFromLS()

    let exestingProd = cartProducts.find((currpod) => currpod.id === id)

    if (exestingProd) {
        quentity = exestingProd.quentity;
        LsStoragePrice = exestingProd.price;
    } else {
        LsStoragePrice = price;
        price = price;
    }

    if (event.target.className === 'btn2') {
        if (quentity < stock) {
            quentity += 1;
        }
        else if (quentity === stock) {
            quentity = stock;
            LsStoragePrice = price * stock;
        }
    }

    if (event.target.className === 'btn1') {
        if (quentity > 1) {
            quentity -= 1;
        }
    }

    LsStoragePrice = price * quentity;

    let updatecart = { id, quentity, price: LsStoragePrice }
    updatecart = cartProducts.map((curpod) => {
        return (curpod.id === id ? updatecart : curpod)
    })
    localStorage.setItem('cartProductsLS', JSON.stringify(updatecart))

    productQuentity.innerHTML = quentity;
    prodPrice.innerHTML = LsStoragePrice;

    updateCartProductTotal();
}





// remove selected cart from LS $ web_____________________________________________________________________________________

const removeCartFromLs = (id) => {

    let cartProducts = getProductsDataFromLS()

    cartProducts = cartProducts.filter((currpod) => currpod.id !== id)
    localStorage.setItem('cartProductsLS', JSON.stringify(cartProducts))

    let removeDiv = document.querySelector(`#card${id} `)

    if (removeDiv) {
        removeDiv.remove()
        popUP('delete', id)
    }
    cartItemsQuentity(cartProducts);

}



//  function to fetch stored data from LS to show in cart section___________________________________________________


const fetchDataFromLs = (id, price) => {

    let cartProducts = getProductsDataFromLS()

    let exestingProd = cartProducts.find((currpod) => currpod.id === id)

    let quentity = 1;

    if (exestingProd) {
        quentity = exestingProd.quentity;
        price = exestingProd.price;
    }
    return { quentity, price }
}



// Function for show localStorage data on cart section___________________________________________________________________

const showProductsInCartSec = (products) => {

    let cartProducts = getProductsDataFromLS()

    let filterProducts = products.filter((curPod) => {
        return cartProducts.some((curElm) => curElm.id === curPod.id)
    })

    filterProducts.forEach((product) => {

        const { name, id, category, price, stocks, image } = product;

        let LsAcctuallData = fetchDataFromLs(id, price);

        // cardItems.innerHTML = ''

        let cardHtml = ` <div div class="cart_card" id = "card${product.id}" >
        <div class="cart_card_items" id="card1">
            <p id="computers">${category}</p>
            <img src="${image}" alt="${name}">
                <h1>${name}</h1>
                <div class="price flx">
                    <p>${LsAcctuallData.price}</p>
                </div>
                <div class="productQuentity alflx">
                    <div class="quentity_btns alflx">
                        <button class="btn1">-</button>
                        <p class="quentity">${LsAcctuallData.quentity}</p>
                        <button class="btn2">+</button>
                    </div>
                </div>
                <button class="crt_btn crt_btn_remove">Remove</button>
        </div>
                          </div > `;




        cardItems.insertAdjacentHTML('beforeend', cardHtml);

        // popUP('add', id)

        const cardElement = document.querySelector(`#card${id} `);

        // remove product from LS & web also______________________________

        cardElement.querySelector('.crt_btn_remove').addEventListener('click', () => {
            removeCartFromLs(id)
        })

        // Increment & Decrement of quentity in cart sec____________________ 

        cardElement.querySelector('.quentity_btns').addEventListener('click', (event) => {
            quentityIncDectogal(event, id, stocks, price)
        })


    });


}




const getData2 = async () => {
    try {
        const res = await fetch('./api/products.json');
        const data = await res.json();
        showProductsInCartSec(data);
    } catch (err) {
        console.error('Failed to load products:', err);
    }
};

getData2()

updateCartProductTotal()