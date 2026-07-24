function openAIChat() {
    document.getElementById('aiModal').classList.remove('hidden');
}

function closeAIChat() {
    document.getElementById('aiModal').classList.add('hidden');
}

function toggleAISearch() {
    openAIChat();
}

function toggleCart() {
    alert("Baxora Luxury Cart: 2 items currently reserved in your private session.");
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    const container = document.getElementById('chatContainer');

    // User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'flex gap-3 justify-end';
    userDiv.innerHTML = `
        <div class="bg-gold-500/10 border border-gold-500/30 p-3.5 rounded-xl text-gold-200 max-w-md">
            ${text}
        </div>
    `;
    container.appendChild(userDiv);
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // Simulated AI Response
    setTimeout(() => {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'flex gap-3';
        aiDiv.innerHTML = `
            <div class="w-7 h-7 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 font-bold">B</div>
            <div class="bg-dark-700/80 border border-gray-700/50 p-3.5 rounded-xl text-gray-200 max-w-md">
                Analyzing 150+ verified ateliers for "${text}"... I recommend checking out our <strong>Vanguard Horology</strong> collection or contacting our bespoke artisan desk.
            </div>
        `;
        container.appendChild(aiDiv);
        container.scrollTop = container.scrollHeight;
    }, 800);
}

