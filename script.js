// --- Theme Switcher (Dark / Light Mode) ---
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

// --- Tab Switcher (Marketplace vs Dashboard) ---
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

// --- See More Products Dynamic Loading ---
function loadMoreProducts() {
    const grid = document.getElementById('productGrid');
    
    const extraProducts = [
        {
            title: "Leather Travel Duffle",
            category: "Accessories",
            price: "$650",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
            desc: "Handcrafted full-grain Italian leather duffle bag."
        },
        {
            title: "Smart Ergonomic Chair",
            category: "Furniture",
            price: "$890",
            img: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?q=80&w=800&auto=format&fit=crop",
            desc: "Custom lumbar support with breathable mesh design."
        },
        {
            title: "Minimalist Mechanical Keyboard",
            category: "Electronics",
            price: "$180",
            img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
            desc: "Custom RGB mechanical switch aluminum body board."
        }
    ];

    extraProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-slate-800 dark:bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/60 hover:border-yellow-400/50 transition duration-300";
        card.innerHTML = `
            <img src="${p.img}" class="w-full h-56 object-cover" alt="Product">
            <div class="p-5">
                <span class="text-xs font-bold text-yellow-400 uppercase">${p.category}</span>
                <h3 class="text-lg font-bold text-white mt-1">${p.title}</h3>
                <p class="text-xs text-slate-400 mt-1 line-clamp-2">${p.desc}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-yellow-400 font-extrabold text-lg">${p.price}</span>
                    <button onclick="addToCart()" class="px-3.5 py-1.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-yellow-300 transition">Add to Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById('visibleCount').innerText = "6";
    document.getElementById('seeMoreContainer').classList.add('hidden');
}

// --- Cart Counter ---
let count = 2;
function addToCart() {
    count++;
    document.getElementById('cartCount').innerText = count;
    alert("Item added to cart!");
}

function toggleCart() {
    alert("Cart View: You have " + count + " items in your bag.");
}

// --- AI Chatbot Modal Functions ---
function openAIChat() {
    document.getElementById('aiModal').classList.remove('hidden');
}

function closeAIChat() {
    document.getElementById('aiModal').classList.add('hidden');
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    const container = document.getElementById('chatContainer');
    
    const userMsg = document.createElement('div');
    userMsg.className = "bg-yellow-400/20 text-yellow-200 p-2.5 rounded-xl text-xs ml-auto max-w-[80%]";
    userMsg.innerText = text;
    container.appendChild(userMsg);

    input.value = '';

    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = "bg-slate-800 text-slate-200 p-2.5 rounded-xl text-xs max-w-[80%]";
        aiMsg.innerText = `Orylo AI: Searching records for "${text}"... How else can I assist?`;
        container.appendChild(aiMsg);
        container.scrollTop = container.scrollHeight;
    }, 600);
}
