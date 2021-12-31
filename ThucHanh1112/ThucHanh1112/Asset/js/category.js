const cartBtn = document.querySelector('.header-right-right-item-cart .header-link')
const modalCart = document.querySelector('.block__cart')
const modalCartList = document.querySelector('.header__cart-list')
const closeCartList = document.querySelector('.minicart-top .minicart-close')
// phan them 
const giohang = document.querySelector('.gio-hang');
const delCart = document.querySelector('.delete-cart');
// console.log(closeCartList)

function showCartBlock() {
    modalCart.classList.add('open__cart-block')
    delCart.classList.add("open__cart-block");
}
function hideCartBlock() {
    modalCart.classList.remove('open__cart-block')
    delCart.classList.remove("open__cart-block");
}
cartBtn.addEventListener('click', showCartBlock);
modalCart.addEventListener('click', hideCartBlock);
closeCartList.addEventListener('click',hideCartBlock)
modalCartList.addEventListener('click', function(e) {
    e.stopPropagation();
})