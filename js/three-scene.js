/**
 * ALFRED E. WILLIAMS — SPATIAL 3D WEBGL ENGINE (three-scene.js)
 * Powers the interactive 3D particle world globe and the holographic depth-reactive photo canvas.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. INTERACTIVE 3D PARTICLES WORLD GLOBE
  // --------------------------------------------------------------------------
  function init3DGlobe() {
    const canvas = document.getElementById('globeCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const width = canvas.parentElement.clientWidth || 500;
    const height = canvas.parentElement.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Sphere Geometry
    const globeRadius = 1.0;
    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const emberColor = new THREE.Color('#C86432');
    const mutedColor = new THREE.Color('#818D88');

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = globeRadius * Math.sin(theta) * Math.sin(phi);
      const z = globeRadius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color clustering near equator & key poles
      const mixed = (Math.sin(theta * 2) > 0.4) ? emberColor : mutedColor;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const globePoints = new THREE.Points(geometry, material);
    scene.add(globePoints);

    // Subtle orbital ring
    const ringGeo = new THREE.RingGeometry(1.22, 1.23, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xC86432,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    scene.add(ring);

    // City Nodes (Lagos: Lat 6.5N, Lon 3.3E; London: 51.5N, 0W; NY: 40.7N, 74W; Tokyo: 35.6N, 139E)
    const cities = [
      { name: 'Lagos', lat: 6.5, lon: 3.3 },
      { name: 'London', lat: 51.5, lon: -0.1 },
      { name: 'New York', lat: 40.7, lon: -74.0 },
      { name: 'Tokyo', lat: 35.6, lon: 139.6 }
    ];

    const nodeGroup = new THREE.Group();
    cities.forEach(city => {
      const phi = (90 - city.lat) * (Math.PI / 180);
      const theta = (city.lon + 180) * (Math.PI / 180);

      const x = -(globeRadius * Math.sin(phi) * Math.cos(theta));
      const z = globeRadius * Math.sin(phi) * Math.sin(theta);
      const y = globeRadius * Math.cos(phi);

      const dotGeo = new THREE.SphereGeometry(0.038, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xE28D56 });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.set(x, y, z);
      nodeGroup.add(dotMesh);
    });
    globePoints.add(nodeGroup);

    // Mouse Tracking & Inertia
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    canvas.addEventListener('mousedown', e => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    window.addEventListener('mousemove', e => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetX += deltaX * 0.005;
        targetY += deltaY * 0.005;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        const normX = (e.clientX / window.innerWidth) - 0.5;
        const normY = (e.clientY / window.innerHeight) - 0.5;
        globePoints.rotation.x += (normY * 0.4 - globePoints.rotation.x) * 0.05;
      }
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      globePoints.rotation.y += 0.0035;
      ring.rotation.z += 0.001;
      renderer.render(scene, camera);
    }
    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
      if (!canvas.parentElement) return;
      const newW = canvas.parentElement.clientWidth;
      const newH = canvas.parentElement.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });
  }

  // --------------------------------------------------------------------------
  // 2. 3D WEBGL DEPTH-REACTIVE PHOTO CANVAS
  // --------------------------------------------------------------------------
  function init3DPhotoDepth() {
    const canvas = document.getElementById('photoDepthCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const container = canvas.parentElement;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 480;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const textureLoader = new THREE.TextureLoader();
    let currentPhoto = 'assets/alfred-photo-home.jpg';

    // Plane mesh with subtle curved geometry for spatial depth
    const geometry = new THREE.PlaneGeometry(1.6, 2.0, 32, 32);

    const material = new THREE.MeshStandardMaterial({
      roughness: 0.4,
      metalness: 0.1,
      transparent: true
    });

    textureLoader.load(currentPhoto, tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      material.map = tex;
      material.needsUpdate = true;
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Dramatic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.85);
    scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0xC86432, 2.2);
    rimLight.position.set(3, 3, 2);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xE8A858, 1.2);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    // Interactive Tilt on Mouse Move
    let mouseX = 0;
    let mouseY = 0;

    container.addEventListener('mousemove', e => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.45;
      mouseY = -y * 0.45;
    });

    container.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    function animatePhoto() {
      requestAnimationFrame(animatePhoto);
      mesh.rotation.y += (mouseX - mesh.rotation.y) * 0.1;
      mesh.rotation.x += (mouseY - mesh.rotation.x) * 0.1;
      renderer.render(scene, camera);
    }
    animatePhoto();

    // Avatar / Photo Switcher Listener
    const switchBtn = document.getElementById('switchPhotoBtn');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        const isOriginal = currentPhoto.includes('alfred-photo-home.jpg');
        currentPhoto = isOriginal ? 'assets/alfred-3d-portrait.jpg' : 'assets/alfred-photo-home.jpg';

        textureLoader.load(currentPhoto, tex => {
          tex.colorSpace = THREE.SRGBColorSpace;
          material.map = tex;
          material.needsUpdate = true;
          switchBtn.textContent = isOriginal ? 'Show Editorial Photo' : 'Show 3D Hologram Avatar';
        });
      });
    }

    // Resize Handler
    window.addEventListener('resize', () => {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });
  }

  // --------------------------------------------------------------------------
  // INITIALIZE THREE.JS SCENES ON LOAD
  // --------------------------------------------------------------------------
  window.addEventListener('DOMContentLoaded', () => {
    init3DGlobe();
    init3DPhotoDepth();
  });

})();
