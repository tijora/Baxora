/* main.js - Shooz Premium Footwear Logic */

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// State Management
let cart = [];
let wishlist = new Set();

// 1. Theme Toggle (Dark / Light Mode)
const themeToggle = document.getElementById('themeToggleBtn') || document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      html.classList.add('light');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
  });
}

// 2. Wishlist Toggle Functionality
function toggleWishlist(btn, productId) {
  const icon = btn.querySelector('i') || btn;
  
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    btn.classList.remove('text-shooz-accentgold', 'text-shooz-rose');
    btn.classList.add('text-slate-400');
  } else {
    wishlist.add(productId);
    btn.classList.add('text-shooz-accentgold');
    btn.classList.remove('text-slate-400');
  }

  const wishlistCountElem = document.getElementById('wishlistCount');
  if (wishlistCountElem) {
    wishlistCountElem.innerText = wishlist.size;
  }
}

// 3. Cart Functions (Add, Remove, Update UI)
function addToCart(name, price, img) {
  cart.push({ name, price, img });
  updateCartUI();
  toggleCartDrawer();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const cartCountElem = document.getElementById('cartCount');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotalElem = document.getElementById('cartTotal');

  if (cartCountElem) cartCountElem.innerText = cart.length;

  if (cartTotalElem) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElem.innerText = `$${total}`;
  }

  if (cartItemsList) {
    if (cart.length === 0) {
      cartItemsList.innerHTML = `<p class="text-xs text-slate-400 text-center py-8">Your cart is currently empty.</p>`;
      return;
    }

    cartItemsList.innerHTML = cart.map((item, index) => `
      <div class="flex items-center justify-between glass p-3 rounded-xl border border-shooz-accentgold/20">
        <div class="flex items-center gap-3">
          <img src="${item.img}" class="w-12 h-12 object-cover rounded-lg" alt="${item.name}">
          <div>
            <h4 class="text-xs font-bold text-white dark:text-white light:text-slate-900">${item.name}</h4>
            <span class="text-xs text-shooz-accentgold font-semibold">$${item.price}</span>
          </div>
        </div>
        <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300 text-xs">Remove</button>
      </div>
    `).join('');
  }
}

function quickBuy(name, price, img) {
  addToCart(name, price, img);
  alert(`Proceeding directly to Buy Now for: ${name}`);
}

function checkoutAlert() {
  if (cart.length === 0) {
    alert("Aapka cart khali hai!");
  } else {
    alert("Order process ho raha hai! Thank you for shopping with Shooz.");
  }
}

// 4. Drawers Toggle Logic
function toggleCartDrawer() {
  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer) cartDrawer.classList.toggle('translate-x-full');
}

function toggleAiDrawer() {
  const aiDrawer = document.getElementById('aiDrawer');
  if (aiDrawer) aiDrawer.classList.toggle('translate-x-full');
}

// 5. AI Assistant Engine
function askAiAssistant() {
  const input = document.getElementById('aiInput');
  const chatBox = document.getElementById('aiChatBox');
  if (!input || !chatBox) return;

  const query = input.value.trim().toLowerCase();
  if (!query) return;

  chatBox.innerHTML += `<div class="bg-shooz-accentgold/20 p-2.5 rounded-lg text-right text-shooz-lightgold"><strong>Aap:</strong> ${input.value}</div>`;

  let reply = "Aapke style ke hisab se Zara Velvet Stilettos ya Zara Royal Leather Boots best rahenge!";

  if (query.includes("height") || query.includes("short") || query.includes("tall")) {
    reply = "Moderate/short height ke liye high-heel stiletto aids ya ankle leather boots stylish lagte hain.";
  } else if (query.includes("black") || query.includes("color")) {
    reply = "Black outfits par Metallic Gold boots aur Zara Stilettos attractive lagte hain.";
  } else if (query.includes("boot")) {
    reply = "Zara aur Bata ke leather boots durable aur classic look dete hain.";
  } else if (query.includes("size")) {
    reply = "Shooz standard European sizes (36 se 44) provide karta hai.";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bg-shooz-deepteal p-2.5 rounded-lg border border-shooz-accentgold/20"><strong>AI Stylist:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);

  input.value = '';
}
