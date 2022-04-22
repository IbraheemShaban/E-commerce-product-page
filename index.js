let orderCount = 0;
let cartIsOpen = false;
showOrHide('hide', 'cart-open-screen');
showOrHide('hide', 'cart-is-empty');
showOrHide('hide', 'number-on-cart-icon');
showOrHide('hide', 'lightbox');
showOrHide('hide', 'lightbox2');
let addedItemsCount = 0;

// + - functuality
document.getElementById('orderCount').innerHTML = orderCount;
document.getElementById('plus').onclick = function () {
  orderCount += 1;
  document.getElementById('orderCount').innerHTML = orderCount;
};
document.getElementById('minus').onclick = function () {
  if (orderCount != 0) {
    orderCount -= 1;
    document.getElementById('orderCount').innerHTML = orderCount;
  }
};

// adding items then opeining cart functuality
document.getElementById('add-button').onclick = function () {
  addedItemsCount += orderCount;
  if (orderCount > 0) {
    showOrHide('hide', 'cart-is-empty');
    showOrHide('show', 'cart-has-items');

    document.getElementById(
      'items-bought-description-summary'
    ).innerHTML = `Fall Limited Edition Sneakers $125 x ${addedItemsCount} <b style = "color: black">$${
      addedItemsCount * 125
    }.00<b>`;

    document.getElementById('number-on-cart').innerHTML = addedItemsCount;
    showOrHide('show', 'cart-open-screen');
    showOrHide('show', 'number-on-cart-icon');
    cartIsOpen = true;
  }
};
// opening and closing cart when cart button pressed
document.getElementById('cart').onclick = function () {
  if (addedItemsCount == 0) {
    showOrHide('hide', 'cart-has-items');
    showOrHide('hide', 'number-on-cart-icon');
    showOrHide('show', 'cart-is-empty');
  }
  if (cartIsOpen) {
    showOrHide('hide', 'cart-open-screen');
    cartIsOpen = false;
  } else if (!cartIsOpen) {
    showOrHide('show', 'cart-open-screen');
    cartIsOpen = true;
  }
};
// delete button functuality
document.getElementById('delete').onclick = function () {
  addedItemsCount = 0;
  showOrHide('hide', 'cart-has-items');
  showOrHide('hide', 'number-on-cart-icon');
  showOrHide('show', 'cart-is-empty');
};

function showOrHide(state, div) {
  if (state.toLowerCase() === 'show') {
    document.getElementById(div).classList.remove('hide-div');
  }
  if (state.toLowerCase() === 'hide') {
    document.getElementById(div).classList.add('hide-div');
  }
}
let order = 1;
document.getElementById('thumbnail1').onclick = function () {
  document.getElementById('big-image').src = '/images/image-product-1.jpg';
};
document.getElementById('thumbnail2').onclick = function () {
  document.getElementById('big-image').src = '/images/image-product-2.jpg';
};
document.getElementById('thumbnail3').onclick = function () {
  document.getElementById('big-image').src = '/images/image-product-3.jpg';
};
document.getElementById('thumbnail4').onclick = function () {
  document.getElementById('big-image').src = '/images/image-product-4.jpg';
};
///////
document.getElementById('lightbox-thumbnail1').onclick = function () {
  document.getElementById('gallery-big-image').src =
    '/images/image-product-1.jpg';
  document.getElementById('gallery-big-image2').src =
    '/images/image-product-1.jpg';
  order = 1;
};
document.getElementById('lightbox-thumbnail2').onclick = function () {
  document.getElementById('gallery-big-image').src =
    '/images/image-product-2.jpg';
  document.getElementById('gallery-big-image2').src =
    '/images/image-product-2.jpg';
  order = 2;
};
document.getElementById('lightbox-thumbnail3').onclick = function () {
  document.getElementById('gallery-big-image').src =
    '/images/image-product-3.jpg';
  document.getElementById('gallery-big-image2').src =
    '/images/image-product-3.jpg';
  order = 3;
};
document.getElementById('lightbox-thumbnail4').onclick = function () {
  document.getElementById('gallery-big-image').src =
    '/images/image-product-4.jpg';
  document.getElementById('gallery-big-image2').src =
    '/images/image-product-4.jpg';
  order = 4;
};
document.getElementById('next').onclick = function () {
  if (order != 4) {
    order++;
    document.getElementById(
      'gallery-big-image'
    ).src = `/images/image-product-${order}.jpg`;
    document.getElementById(
      'gallery-big-image2'
    ).src = `/images/image-product-${order}.jpg`;
  }
};
document.getElementById('previous').onclick = function () {
  if (order != 1) {
    order--;
    document.getElementById(
      'gallery-big-image'
    ).src = `/images/image-product-${order}.jpg`;
    document.getElementById(
      'gallery-big-image2'
    ).src = `/images/image-product-${order}.jpg`;
  }
};
document.getElementById('close').onclick = function () {
  showOrHide('hide', 'lightbox');
  showOrHide('hide', 'lightbox2');
};
document.getElementById('big-image').onclick = function () {
  showOrHide('show', 'lightbox');
  showOrHide('show', 'lightbox2');
  document.getElementById('gallery-big-image').src =
    document.getElementById('big-image').src;
  document.getElementById('gallery-big-image2').src =
    document.getElementById('big-image').src;
  order = parseInt(
    document.getElementById('big-image').src[
      document.getElementById('big-image').src.length - 5
    ]
  );
  console.log(order);
  console.log(document.getElementById('big-image').src);
};
