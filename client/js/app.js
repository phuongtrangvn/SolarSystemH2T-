define(['configs', 'entities/lights'], function(configs, lights) {
  var renderer,     //this's the paint
      canvas,       //this's where we draw the picture
      scene,        //this's all contents of the picture ~ the picture
      camera,       //point of view
      mouse,        //mouse location on canvas
      raycaster,    //this for detect click event
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
  camera.position.y = 1;

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();
  //space font
  var geometry  = new THREE.SphereGeometry(90, 32, 32);
  var material  = new THREE.MeshBasicMaterial();
  material.map   = THREE.ImageUtils.loadTexture('img/galaxy_starfield.png');
  material.side  = THREE.BackSide;
  fontMesh  = new THREE.Mesh(geometry, material);
  scene.add(fontMesh);
  // console.log(THREEx);
  function render() {

    raycaster.setFromCamera( mouse, camera );
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
      mouse             : mouse,
      raycaster         : raycaster,
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
      mouseDown         : false,
      lastUpdate        : Date.now(),
      view              : configs.view.SYSTEM,
      intersectsChecking: []
  };
  // call this once to start the update queue

  app.update = function(time) {
		requestAnimationFrame( app.update );
    updateQueue.forEach(function(updateFunc) {
      updateFunc();
    });
    app.camera.lookAt(app._focusObject.position);
    app.lastUpdate = Date.now();
  }

  app.updateCameraRange = function() {
    camera.position.setLength(app.curentCameraRange);
  }

  app.updateCameraRange();

  app.setFocus = function(obj) {
    _focusObject = (obj && scene.children.indexOf(obj) >= 0) ? obj : scene;
  }

  return app;
})
