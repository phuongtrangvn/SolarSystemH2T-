define(['app'], function(app) {
  var rangeChange = Math.PI / 360,
      mouseLastX, mouseLastY,
      xAxis = THREE.Vector3(1, 0, 0),
      yAxis = THREE.Vector3(0, 1, 0);

  function onWindowResize() {

      app.windowHalfX = (app.width = window.innerWidth) / 2;
      app.windowHalfY = (app.height = window.innerHeight) / 2;

      app.camera.aspect = app.width / app.height;
      app.camera.updateProjectionMatrix();
      app.renderer.setSize(app.width, app.height);
  }

  function onMouseRightDown(e) {
    app.mouseDown = true;
    mouseLastX = e.clientX;
    mouseLastY = e.clientY;
  }

  function onMouseDown(e) {
    e.preventDefault();
    switch(e.which) {
      case 1: {

        break;
      }
      case 2: {
        break;
      }
      case 3: {
        onMouseRightDown(e);
        break;
      }
    }
  }

  function onMouseClick(e) {
    e.preventDefault();
    switch(e.which) {
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
  }

  function onMouseRightUp(e) {
    app.mouseDown = false;
  }

  function onMouseUp(e) {
    e.preventDefault();
    switch(e.which) {
      case 1: {

        break;
      }
      case 2: {
        break;
      }
      case 3: {
        onMouseRightUp(e);
        break;
      }
    }
  }

  function onMouseOut(e) {
    e.preventDefault();
    app.mouseDown = false;
  }

  function onMouseMove(e) {
    e.preventDefault();
    if(app.mouseDown) {
      app.camera.position.x += mouseLastX > e.clientX ? -rangeChange : rangeChange;
      app.camera.position.y += mouseLastY > e.clientY ? -rangeChange : rangeChange;

      mouseLastX = e.clientX;
      mouseLastY = e.clientY;
      app.camera.lookAt(app._focusObject.position);
      //updateCameraRange
      app.updateCameraRange();
    }
  }

  function onMouseWheel(e) {
      let newRange = app.curentCameraRange += e.deltaY * 0.001;
      app.curentCameraRange = newRange > app.cameraMaxRange ? app.cameraMaxRange : newRange < app.cameraMinRange ? app.cameraMinRange : newRange;
      app.camera.lookAt(app._focusObject.position);
      //updateCameraRange
      app.updateCameraRange();
  }

  $(window).on('resize', onWindowResize);
  $(document).on('contextmenu', function() { return false; }); //disable default event/ preventDefault not working so use it
  $(document).on('mousedown', onMouseDown);
  $(document).on('mouseup', onMouseUp);
  $(document).on('mouseout', onMouseOut);
  $(document).on('mousemove', onMouseMove);
  window.addEventListener('wheel', onMouseWheel, false);
})
