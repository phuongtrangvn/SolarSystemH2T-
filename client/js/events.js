define(['app'], function(app) {
  var mouseX, mouseY,
      mouseDownX, mouseDownY;

  function onWindowResize() {

      app.windowHalfX = (app.width = window.innerWidth) / 2;
      app.windowHalfY = (app.height = window.innerHeight) / 2;

      app.camera.aspect = app.width / app.height;
      app.camera.updateProjectionMatrix();
      app.renderer.setSize(app.width, app.height);
  }

  function onMouseRightDown(e) {
    app.mouseDown = true;
    mouseDownX = e.clientX;
    mouseDownY = e.clientY;
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
      mouseX = e.clientX - mouseDownX;
      mouseY = e.clientY - mouseDownY;

      app.camera.position.x = app._focusObject.position.x + -mouseX * 0.005;
      app.camera.position.y = app._focusObject.position.y + mouseY * 0.005;

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
  window.addEventListener('mousewheel', onMouseWheel, false);
})
