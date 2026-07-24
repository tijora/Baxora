// GSAP Entrance Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#heroBadge", { opacity: 0, y: -20, duration: 1, delay: 0.2 });
    gsap.from("#heroTitle", { opacity: 0, y: 30, duration: 1.2, delay: 0.4 });
    gsap.from("#heroDesc", { opacity: 0, y: 20, duration: 1, delay: 0.6 });
    gsap.from(".product-card", { opacity: 0, y: 40, duration: 0.8, stagger: 0.2, delay: 0.8 });
});

// Theme Switcher (Dark / Light Mode)
function toggleTheme() {
    const html = document.getElementById('htmlTag');
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = 'fa-solid fa-sun';
        text.innerText = 'Light';
    } else {
        html.classList.add('dark');
        icon.className = 'fa-solid fa-moon';
        text.innerText = 'Dark';
    }
}

// Tab Navigation (Marketplace / Dashboard)
function switchTab(tabName) {
    const marketplace = document.getElementById('marketplaceTab');
    const dashboard = document.getElementById('dashboardTab');

    if (tabName === 'dashboard') {
        marketplace.classList.add('hidden');
        dashboard.classList.remove('hidden');
    } else {
        dashboard.classList.add('hidden');
        marketplace.classList.remove('hidden');
    }
}

// Load More Products ("See More")
function loadMoreProducts() {
    const grid = document.getElementById('productGrid');
    
    const newItems = [
        {
            title: "Vintage Chrono Gold",
            category: "Rare Watches",
            price: "$98,000",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
            desc: "1970s solid gold vintage chronograph in original box."
        },
        {
            title: "Bespoke Sapphire Pendant",
            category: "High Jewelry",
            price: "$45,000",
            img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
            desc: "Custom-cut Royal Blue Sapphire with surrounding diamonds."
        }
    ];

    newItems.forEach(p => {
        const card = document.createElement('div');
        card.className = "product-card bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]";
        card.innerHTML = `
            <div class="relative overflow-hidden h-64">
                <img src="${p.img}" class="w-full h-full object-cover hover:scale-110 transition duration-700" alt="Product">
            </div>
            <div class="p-6">
                <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider">${p.category}</span>
                <h3 class="text-lg font-bold text-white mt-1">${p.title}</h3>
                <p class="text-xs text-slate-400 mt-2 line-clamp-2">${p.desc}</p>
                <div class="flex justify-between items-center mt-6 pt-4 border-t border-slate-800">
                    <span class="text-amber-400 font-extrabold text-lg">${p.price}</span>
                    <button onclick="addToCart()" class="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-xs rounded-xl hover:brightness-110 transition">Add to Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
        gsap.from(card, { opacity: 0, y: 30, duration: 0.6 });
    });

    document.getElementById('visibleCount').innerText = "5";
    document.getElementById('seeMoreContainer').classList.add('hidden');
}

// Cart Management
let count = 1;
function addToCart() {
    count++;
    document.getElementById('cartCount').innerText = count;
    alert("Item successfully added to Baxora Vault!");
}

function toggleCart() {
    alert("Baxora Vault contains " + count + " item(s).");
}

// AI Modal Functions
function openAIChat() { document.getElementById('aiModal').classList.remove('hidden'); }
function closeAIChat() { document.getElementById('aiModal').classList.add('hidden'); }

function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    const container = document.getElementById('chatContainer');
    
    const userMsg = document.createElement('div');
    userMsg.className = "bg-amber-500/20 text-amber-200 p-2.5 rounded-xl text-xs ml-auto max-w-[80%]";
    userMsg.innerText = text;
    container.appendChild(userMsg);

    input.value = '';

    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = "bg-slate-900 text-slate-200 p-2.5 rounded-xl text-xs max-w-[80%]";
        aiMsg.innerText = `Baxora AI: Sourcing records for "${text}"... One moment.`;
        container.appendChild(aiMsg);
        container.scrollTop = container.scrollHeight;
    }, 600);
}

