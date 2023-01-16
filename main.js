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


let productList = [];

productList.push({
    name: 'Bike',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Led Computer Screen',
    price: 600,
    image: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-24-lg-24mp400b-led-fhd-hdmi-vga-0.jpg',
});

productList.push({
    name: 'Gaming PC',
    price: 1300,
    image: 'https://bangho.vtexassets.com/arquivos/ids/161038/Pc-Gamer-GM-CARBIDE-i5-Nvidia-GTX-1660ti.jpg',
});


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

renderProducts(productList);