  const cartBtn = document.querySelector(
    ".header-right-right-item.gio-hang"
  );
  const modalCart = document.querySelector(".block__cart");
  const modalCartList = document.querySelector(".header__cart-list");
  const closeCartList = document.querySelector(
    ".minicart-top .minicart-close"
  );
  const giohang = document.querySelector('.gio-hang');
  const delCart = document.querySelector('.delete-cart');


  function showCartBlock() {
    modalCart.classList.add("open__cart-block");
    delCart.classList.add("open__cart-block");
  }
  function hideCartBlock() {
    modalCart.classList.remove("open__cart-block");
    delCart.classList.remove("open__cart-block");
  }
  cartBtn.addEventListener("click", showCartBlock);
  modalCart.addEventListener("click", hideCartBlock);
  closeCartList.addEventListener("click", hideCartBlock);
  modalCartList.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  // phan tim kiem
  const mobileLayer = document.querySelector(".mobile-layer");
  const searchMobile = document.querySelector(".search-mobile");
  const closeSerch = document.querySelector(".close-search-vip");
  const modalOverlay = document.querySelector(".modal-overlay");
  function presentlyMobile() {
    mobileLayer.classList.add("block-mobile");
  }
  function hideMobile() {
    mobileLayer.classList.remove("block-mobile");
  }
  searchMobile.addEventListener("click", presentlyMobile);
  closeSerch.addEventListener("click", hideMobile);
  modalOverlay.addEventListener("click", hideMobile);


  const mnMobile = document.querySelector(".menu-mobile");
  const clMenuMB = document.querySelector(".close-menu");
  const showMenu = document.querySelector(".mobile-menu");
  const ovlMenu = document.querySelector(".overlay-mnu");

  console.log(ovlMenu);

  function showMenuMobile() {
    showMenu.classList.add("block-mobile");
    console.log(123);
  }
  function hideMenuMObile() {
    showMenu.classList.remove("block-mobile");
  }
  mnMobile.addEventListener("click", showMenuMobile);
  clMenuMB.addEventListener("click", hideMenuMObile);
  ovlMenu.addEventListener("click", hideMenuMObile);