// BAXORA - Luxury Marketplace - app.js
let lenis;
let scene, camera, renderer;
let products = [
    {id:1, name:"Obsidian Chronograph", price:"$48,500", brand:"BAXORA Atelier"},
    {id:2, name:"Emerald Silk Gown", price:"$28,900", brand:"Maison Hermès"},
    {id:3, name:"Diamond Nebula Ring", price:"$185,000", brand:"Cartier Legacy"}
];

function initLenis() {
    lenis = new Lenis({ smoothWheel: true, smoothTouch: false });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

function initThreeJS() {
    const canvas = document.getElementById('hero-canvas');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.TorusK
