const cart = [];
function addToCart(productId, productName, productPrice) {
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }
  updateCartBox();
}
function updateCartBox() {
  const cartBox = document.getElementById('cart-box');
  if (cart.length === 0) {
    cartBox.textContent = "Your cart is empty.";
    return;
  }
  cartBox.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
    cartBox.appendChild(cartItem);
  });
}
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const productId = parseInt(this.dataset.id); 
    const productName = this.dataset.name;      
    const productPrice = parseFloat(this.dataset.price); 
    addToCart(productId, productName, productPrice);
        
  });
});
let namBtn= document.querySelectorAll('.add-to-cart');
namBtn.forEach(button => {
  button.addEventListener('click', showMsg);
});
function showMsg(){
  alert("Your item is added to the cart");
}
