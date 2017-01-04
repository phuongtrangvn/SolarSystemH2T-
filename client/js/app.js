define(['configs'], function(configs) {
  var renderer,   //this's the paint
      canvas,     //this's where we draw the picture
      scene,      //this's all contents of the picture ~ the picture
      camera,     //point of view
      light1,
      light2,
      fontMesh,   //the font ~ the black space and so far starts
      updateQueue,//
      update,
      _focusObject;//this where we look at it, focus on it

  var width = window.innerWidth,
      height = window.innerHeight,
      windowHalfX = width / 2,
      windowHalfY = height / 2,
      cameraMaxZ = 2, cameraMinZ = 0.5;

  renderer	= new THREE.WebGLRenderer();
  renderer.setSize( width, height );

  canvas = renderer.domElement;
  document.body.appendChild(canvas);

  scene = new THREE.Scene();
  scene.name = "My Space";
  _focusObject = scene;

  camera	= new THREE.PerspectiveCamera(45, width / height, 0.01, 1000 );
  camera.position.z = (cameraMaxZ + cameraMinZ) / 2;

  light1	= new THREE.AmbientLight( 0x888888 );
  scene.add( light1 );

  light2	= new THREE.DirectionalLight( 0xcccccc, 1 );
  light2.position.set(5,3,5)
  scene.add( light2 );

  //space font
  var geometry  = new THREE.SphereGeometry(90, 32, 32);
  var material  = new THREE.MeshBasicMaterial();
  material.map   = THREE.ImageUtils.loadTexture('img/galaxy_starfield.png');
  material.side  = THREE.BackSide;
  fontMesh  = new THREE.Mesh(geometry, material);
  scene.add(fontMesh);

  setInterval(render, 1000 / 60);

  function render() {
    renderer.render( scene, camera );
  }

  // we do this 60 time per seconds
  updateQueue = [render];

  // call this once to start the update queue
  update = function() {
    setInterval(function() {
      updateQueue.forEach(function(updateFunc) {
        updateFunc();
      })
    }, 1000 / 60);
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

      camera.position.x = _focusObject.position.x + -mouseX * 0.005;
      camera.position.y = _focusObject.position.y + mouseY * 0.005;

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
      _focusObject: _focusObject,
      setFocus: setFocus,
      updateQueue: updateQueue,
      update: update
  };
})
