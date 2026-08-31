/* main.js */
lucide.createIcons();

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light');
});

let cart = 0;
let wishlist = 0;

function addToCart(item) {
  cart++;
  document.getElementById('cartCount').innerText = cart;
}

function toggleWishlist(btn) {
  const icon = btn.querySelector('i');
  if (btn.classList.contains('text-shooz-rose')) {
    btn.classList.remove('text-shooz-rose');
    wishlist--;
  } else {
    btn.classList.add('text-shooz-rose');
    wishlist++;
  }
  document.getElementById('wishlistCount').innerText = wishlist;
}

