<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Создаем сцену
    const scene = new THREE.Scene();
    
    // Создаем камеру
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    camera.position.z = 5;
    
    // Создаем рендерер
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    document.getElementById('cube-container').appendChild(renderer.domElement);
    
    // Создаем геометрию куба
    const geometry = new THREE.BoxGeometry();
    
    // Создаем материалы для граней куба
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // красная грань
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // зеленая грань
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // синяя грань
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // желтая грань
      new THREE.MeshBasicMaterial({ color: 0xff00ff }), // фиолетовая грань
      new THREE.MeshBasicMaterial({ color: 0x00ffff })  // голубая грань
    ];
    
    // Создаем куб
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // Добавляем управление кубом
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    // Функция анимации
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    
    animate();
  });
</script>
