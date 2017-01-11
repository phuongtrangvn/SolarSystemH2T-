define(['configs', 'entities/lights'], function(configs, lights) {
  var renderer,   //this's the paint
      canvas,     //this's where we draw the picture
      scene,      //this's all contents of the picture ~ the picture
      camera,     //point of view
      fontMesh,   //the font ~ the black space and so far starts
      updateQueue,//
      update,
      _focusObject;//this where we look at it, focus on it

  var width = window.innerWidth,
      height = window.innerHeight,
      windowHalfX = width / 2,
      windowHalfY = height / 2,
      cameraMaxZ = 10, cameraMinZ = 0.1;

  renderer	= new THREE.WebGLRenderer();
  renderer.setSize( width, height );

  canvas = renderer.domElement;
  document.body.appendChild(canvas);

  scene = new THREE.Scene();
  scene.name = "My Space";
  _focusObject = scene;

  lights.forEach(function(light) {
    scene.add(light);
  })

  camera	= new THREE.PerspectiveCamera(45, width / height, 0.01, 1000 );
  camera.position.z = (cameraMaxZ + cameraMinZ) / 2;
  //space font
  var geometry  = new THREE.SphereGeometry(90, 32, 32);
  var material  = new THREE.MeshBasicMaterial();
  material.map   = THREE.ImageUtils.loadTexture('img/galaxy_starfield.png');
  material.side  = THREE.BackSide;
  fontMesh  = new THREE.Mesh(geometry, material);
  scene.add(fontMesh);

  function render() {
    renderer.render( scene, camera );
  }

  // we do this 60 time per seconds
  updateQueue = [render];

  // call this once to start the update queue

  update = function(time) {
		requestAnimationFrame( update );
    updateQueue.forEach(function(updateFunc) {
      updateFunc();
    });
  }

  function setFocus(obj) {
    return _focusObject = (obj && scene.children.indexOf(obj) >= 0) ? obj : scene;
  }

  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('mousewheel', onMouseWheel, false);
  document.addEventListener('mousemove', onDocumentMouseMove, false);

  function onWindowResize() {

      windowHalfX = (width = window.innerWidth) / 2;
      windowHalfY = (height = window.innerHeight) / 2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
  }

  function onDocumentMouseMove(e) {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;

      camera.position.x = _focusObject.position.x + -mouseX * 0.005 * camera.position.z;
      camera.position.y = _focusObject.position.y + mouseY * 0.005 * camera.position.z;

      camera.lookAt(_focusObject.position);
  }

  function onMouseWheel(e) {
      let newZ = camera.position.z += e.deltaY * 0.001;
      camera.position.z = newZ > cameraMaxZ ? cameraMaxZ : newZ < cameraMinZ ? cameraMinZ : newZ;
      camera.lookAt(_focusObject.position);
  }

  return {
      renderer: renderer,
      canvas: canvas,
      scene: scene,
      camera: camera,
      lights: lights,
      _focusObject: _focusObject,
      setFocus: setFocus,
      updateQueue: updateQueue,
      update: update
  };
})
