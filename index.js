let orderCount = 0;
let cartIsOpen = false;
// let deleteIsClicked = false;
document.getElementById('cart-open-screen').classList.add('hide-div');
document.getElementById('cart-is-empty').classList.add('hide-div');
document.getElementById('number-on-cart-icon').classList.add('hide-div');
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
    document.getElementById('cart-is-empty').classList.add('hide-div');
    document.getElementById('cart-has-items').classList.remove('hide-div');
    document.getElementById(
      'items-bought-description-summary'
    ).innerHTML = `Fall Limited Edition Sneakers $125 x ${addedItemsCount} <b>${
      addedItemsCount * 125
    }<b>`;
    document.getElementById('number-on-cart').innerHTML = addedItemsCount;
    document.getElementById('cart-open-screen').classList.remove('hide-div');
    document.getElementById('number-on-cart-icon').classList.remove('hide-div');

    cartIsOpen = true;
  }
};
// opening and closing cart when cart button pressed
document.getElementById('cart').onclick = function () {
  if (addedItemsCount == 0) {
    document.getElementById('cart-has-items').classList.add('hide-div');
    document.getElementById('number-on-cart-icon').classList.add('hide-div');

    document.getElementById('cart-is-empty').classList.remove('hide-div');
  }
  if (cartIsOpen) {
    document.getElementById('cart-open-screen').classList.add('hide-div');
    cartIsOpen = false;
  } else if (!cartIsOpen) {
    document.getElementById('cart-open-screen').classList.remove('hide-div');
    // document.getElementById('number-on-cart-icon').classList.remove('hide-div');
    cartIsOpen = true;
  }
};
// delete button functuality
document.getElementById('delete').onclick = function () {
  addedItemsCount = 0;
  //   deleteIsClicked = true;
  document.getElementById('items-bought-description-summary').innerHTML = '';
  document.getElementById('number-on-cart-icon').innerHTML = '';

  document.getElementById('cart-has-items').classList.add('hide-div');
  document.getElementById('number-on-cart-icon').classList.add('hide-div');

  document.getElementById('cart-is-empty').classList.remove('hide-div');
};
