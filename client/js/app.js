define(['configs', 'entities/lights'], function(configs, lights) {
  var renderer,     //this's the paint
      canvas,       //this's where we draw the picture
      scene,        //this's all contents of the picture ~ the picture
      camera,       //point of view
      fontMesh,     //the font ~ the black space and so far starts
      updateQueue,  //
      _focusObject; //this where we look at it, focus on it

  var width = window.innerWidth,
      height = window.innerHeight,
      windowHalfX = width / 2,
      windowHalfY = height / 2,
      cameraMaxRange = 10, cameraMinRange = 0.1, curentCameraRange;

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
  camera.position.z = curentCameraRange = (cameraMaxRange + cameraMinRange) / 2;
  //space font
  var geometry  = new THREE.SphereGeometry(90, 32, 32);
  var material  = new THREE.MeshBasicMaterial();
  material.map   = THREE.ImageUtils.loadTexture('img/galaxy_starfield.png');
  material.side  = THREE.BackSide;
  fontMesh  = new THREE.Mesh(geometry, material);
  scene.add(fontMesh);
  // console.log(THREEx);

  function render() {
    renderer.render( scene, camera );
  }

  // we do this 60 time per seconds
  updateQueue = [render];

  //
  var app = {
      renderer          : renderer,
      canvas            : canvas,
      scene             : scene,
      camera            : camera,
      lights            : lights,
      _focusObject      : _focusObject,
      updateQueue       : updateQueue,
      windowHalfX       : windowHalfX,
      windowHalfY       : windowHalfY,
      width             : width,
      height            : height,
      cameraMaxRange    : cameraMaxRange,
      cameraMinRange    : cameraMinRange,
      curentCameraRange : curentCameraRange,
      update            : null,
      updateCameraRange : null,
      setFocus          : null,
      mouseDown         : false
  };
  // call this once to start the update queue

  app.update = function(time) {
		requestAnimationFrame( app.update );
    updateQueue.forEach(function(updateFunc) {
      updateFunc();
    });
  }

  app.updateCameraRange = function() {
    var direction = _focusObject.position;
    camera.position.setLength(app.curentCameraRange);
    console.log(direction);
  }

  app.setFocus = function(obj) {
    return _focusObject = (obj && scene.children.indexOf(obj) >= 0) ? obj : scene;
  }

  return app;
})
