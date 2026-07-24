// --- 3D Floating Mesh Animation using Three.js ---
function init3D() {
    const container = document.getElementById('canvas-3d');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Floating Golden Geometry
    const geometry = new THREE.IcosahedronGeometry(2.5, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        wireframe: true,
        metalness: 0.8,
        roughness: 0.2
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Ambient and Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xD4AF37, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 6;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.003;
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // Screen Resize Handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

document.addEventListener('DOMContentLoaded', init3D);

// --- AI Chatbot & Modal Functions ---
function openAIChat() {
    document.getElementById('aiModal').classList.remove('hidden');
}

function closeAIChat() {
    document.getElementById('aiModal').classList.add('hidden');
}

function toggleCart() {
    alert("Baxora Luxury Cart: Item reserved in your private session.");
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    const container = document.getElementById('chatContainer');

    // Add User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'flex gap-3 justify-end';
    userDiv.innerHTML = `
        <div class="bg-yellow-500/20 border border-yellow-500/40 p-3 rounded-xl text-sm text-yellow-200 max-w-xs">
            ${text}
        </div>
    `;
    container.appendChild(userDiv);
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // AI Bot Reply
    setTimeout(() => {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'flex gap-3';
        aiDiv.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">B</div>
            <div class="bg-gray-800/80 p-3 rounded-xl text-sm max-w-xs text-gray-200">
                Searching verified luxury ateliers for "${text}"... Connecting with our bespoke desk.
            </div>
        `;
        container.appendChild(aiDiv);
        container.scrollTop = container.scrollHeight;
    }, 800);
}
