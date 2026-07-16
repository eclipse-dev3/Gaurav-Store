
console.log('Working!');

let cardContainer = document.querySelector(".products");



// pop up 

const popUP = (operation, id) => {
  let pop = document.createElement('div')
  pop.classList.add('pop')

  if (operation === 'add') {
    pop.innerText = `Product with ID ${id} has been added!`
  }
  else {
    pop.innerText = `Product with ID ${id} has been deleted!`
  }

  document.body.appendChild(pop);

  setTimeout(() => {
    pop.remove();
  }, 2000)
}



// show cart items quentity on cart icon______________________________________________________________

const cartItemsQuentity = (data) => {
  let cartValue = document.querySelector('.cart p')
  return (cartValue.innerHTML = data.length)
}



// get products data from local storage________________________________________________________________

const getProductsDataFromLS = () => {
  let cartProducts = localStorage.getItem('cartProductsLS');
  if (!cartProducts) {
    return [];
  }

  cartItemsQuentity(JSON.parse(cartProducts))

  return JSON.parse(cartProducts);
};



// Add to cart function__________________________________________________________________________________


const addToCart = (event, id, stock) => {

  let productsFromLS = getProductsDataFromLS()

  let currElmCard = document.querySelector(`#card${id}`)
  let quentity = currElmCard.querySelector('.quentity').innerText.replace('₹', '');
  let price = currElmCard.querySelector('.acctuall_price').innerText

  price = price.replace('₹', '')

  let exestingProd = productsFromLS.find((currpod) => currpod.id === id)

  if (exestingProd && quentity > 1) {
    quentity = Number(exestingProd.quentity) + Number(quentity);
    price = price * quentity;
    let updatecart = { id, price, quentity }
    updatecart = productsFromLS.map((curpod) => {
      return (curpod.id === id ? updatecart : curpod)
    })
    localStorage.setItem('cartProductsLS', JSON.stringify(updatecart));

    popUP('add', id);

  }

  if (exestingProd) {
    return false
  }

  quentity = Number(quentity);
  price = price * quentity;
  productsFromLS.push({ id, quentity, price })

  localStorage.setItem('cartProductsLS', JSON.stringify(productsFromLS))

  popUP('add', id);

  // cartItemsQuentity(productsFromLS);

}



//  Quentity increment and Decrement togle function_______________________________________________________


const quentityTogle = (event, id, stock) => {
  let currElmCard = document.querySelector(`#card${id}`)
  let productQuentity = currElmCard.querySelector('.quentity')
  let quentity = parseInt(productQuentity.getAttribute('data_quentity')) || 1;

  if (event.target.className === 'btn2') {
    if (quentity < stock) {
      quentity += 1;
    }
    else if (quentity === stock) {
      quentity = stock;
    }
  }
  if (event.target.className === 'btn1') {
    if (quentity > 1) {
      quentity -= 1;
    }
  }

  productQuentity.innerHTML = quentity;
  productQuentity.setAttribute('data_quentity', quentity)
  return quentity;

}




// Function to show json data on accutall products___________________________________________________________________


const showProducts = (products) => {

  if (!products || !Array.isArray(products)) return;

  cardContainer.innerHTML = "";

  products.forEach(product => {
    const { name, id, category, price, stocks, image, fakePrice, description } = product;

    const cardHtml = `
      <div class="card flx" id="card${product.id}">
        <p id="computers">${category}</p>
        <img src="${image}" alt="${name}">
        <h1 id="ProductName">${name}</h1>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p>${description}</p>
        <div class="price flx">
          <p class="acctuall_price">₹${price}</p>
          <p id="line">₹${fakePrice}</p>
        </div>
        <div class="stocks flx">
          <p>Total Stocks Available:</p>
          <p>${stocks}</p>
        </div>
        <div class="productQuentity alflx">
          <p>Quantity(Pieces)</p>
          <div class="quentity_btns alflx">
            <button class="btn1">-</button>
            <p class="quentity" data_quentity="1">1</p>
            <button class="btn2">+</button>
          </div>
        </div>
        <button class="crt_btn">
          <i class="fa-solid fa-cart-shopping"></i>
          Add To Cart
        </button>
      </div>
    `;



    cardContainer.insertAdjacentHTML('beforeend', cardHtml);


    // Quentity increment and decrement______________________________

    const cardElement = document.querySelector(`#card${id}`);
    const quentityBtns = cardElement.querySelector('.quentity_btns');
    quentityBtns.addEventListener('click', (event) => {
      quentityTogle(event, id, stocks);
    });

    // Add to cart button___________

    cardElement.querySelector('.crt_btn').addEventListener('click', (event) => {
      addToCart(event, id, stocks);
    })


  });


};



// Function for get data from json file___________________________________________________________________


const getData = async () => {
  try {
    const res = await fetch('./api/products.json');
    const data = await res.json();
    showProducts(data);
  } catch (err) {
    console.error('Failed to load products:', err);
  }
};



getData();
getProductsDataFromLS()




// function to connect ecomerse.html to cartcard.html________________________________________________________________

function goToHome() {
  window.location.href = "#products";
}



// funcationaly for change theme_________________________________________________________________________

let body = document.querySelector('body')
let themeimg = document.querySelector('#theme img')

const changeTheme = () => {
  let themeimgSrc = themeimg.src.split('/').pop();
  if (themeimgSrc === "moon.svg") {
    body.style.backgroundColor = 'black'
    themeimg.src = 'assets/images/sun.svg'
  }
  else {
    body.style.backgroundColor = 'white'
    themeimg.src = 'assets/images/moon.svg'
  }
}


document.querySelector('#theme').addEventListener('click', changeTheme)
