const container = document.querySelector('.cards-container');
const API = 'https://api.escuelajs.co/api/v1/products';

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailClose = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardContainer = document.querySelector('.card-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeAsideProductDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive'); 
    }
}

function openAsideProductDetail(){
    productDetailContainer.classList.remove('inactive')

    const isCarritoAsideClose = shoppingCartContainer.classList.contains('inactive');
  
    if (!isCarritoAsideClose) {
        shoppingCartContainer.classList.add('inactive'); 
    }
}

function closeAsideProductDetail() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];

async function getProds() {
    const response = await fetch(API)
    const data = await response.json()
    const dataArray = Object.values(data)

    for (let index = 0; index < 50; index++) {
        const element = dataArray[index];
        productList.push({
            name: element.title,
            price: element.price,
            image: element.category.image,
        })
    }

    function renderProducts(arr) {
        for (product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            productImg.addEventListener('click', openAsideProductDetail)
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            productInfoDiv.appendChild(productPrice)
            productInfoDiv.appendChild(productName);
        
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
            productInfoFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardContainer.appendChild(productCard);
        }
    }
    
    renderProducts(productList)
}

getProds()



