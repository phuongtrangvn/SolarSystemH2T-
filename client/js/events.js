define(['app', 'configs'], function(app, configs) {
  var rangeChange = Math.PI / 360,
      mouseLastX, mouseLastY,
      xAxis = THREE.Vector3(1, 0, 0),
      yAxis = THREE.Vector3(0, 1, 0),
      wheelSpeed = 0.1,
      intersect = null;

  //resizing >> resize world
  function onWindowResize() {
      app.windowHalfX = (app.width = window.innerWidth) / 2;
      app.windowHalfY = (app.height = window.innerHeight) / 2;

      app.camera.aspect = app.width / app.height;
      app.camera.updateProjectionMatrix();
      app.renderer.setSize(app.width, app.height);
  }

  //mouse down
  function onMouseRightDown(e) {
      switch (app.view) {
        case configs.view.SYSTEM: {
          app.mouseDown = true;
          break;
        }
        case configs.view.PLANET: {

          break;
        }
      }
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

  //mouse click
  function onMouseLeftClick(e) {
    switch (app.view) {
      case configs.view.SYSTEM: {
        if(app.view == configs.view.SYSTEM) {
          app.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
          app.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
          intersect = null;
          var intersects = app.raycaster.intersectObjects( app.intersectsChecking, false);
          if(intersects.length > 0) {
            $(document).trigger("changeview", [configs.view.PLANET, intersects[0]]);
          }
        }
        break;
      }
      case configs.view.PLANET: {

        break;
      }
    }
  }

  function onMouseClick(e) {
    switch(e.which) {
      case 1: {
        onMouseLeftClick(e);
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

  //mouse up
  function onMouseRightUp(e) {
    switch (app.view) {
      case configs.view.SYSTEM: {
        app.mouseDown = false;
        break;
      }
      case configs.view.PLANET: {

        break;
      }
    }
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

  //mouse out
  function onMouseOut(e) {
    e.preventDefault();
    switch (app.view) {
      case configs.view.SYSTEM: {
        app.mouseDown = false;
        break;
      }
      case configs.view.PLANET: {

        break;
      }
    }
  }

  //mouse move
  function onMouseMove(e) {
    e.preventDefault();
    switch (app.view) {
      case configs.view.SYSTEM: {
      	app.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
      	app.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
        if(app.mouseDown) {
          app.camera.position.x -= mouseLastX > e.clientX ? -rangeChange : rangeChange;
          app.camera.position.y += mouseLastY > e.clientY ? -rangeChange : rangeChange;
          mouseLastX = e.clientX;
          mouseLastY = e.clientY;
          app.camera.lookAt(app._focusObject.position);
          //updateCameraRange
          app.updateCameraRange();
        }
        break;
      }
      case configs.view.PLANET: {

        break;
      }
    }
  }

  //mouse wheel
  function onMouseWheel(e) {
    switch (app.view) {
      case configs.view.SYSTEM: {
        let newRange = app.currentCameraRange += e.deltaY > 0 ? wheelSpeed : -wheelSpeed;
        app.currentCameraRange = newRange > app.cameraMaxRange ? app.cameraMaxRange : newRange < app.cameraMinRange ? app.cameraMinRange : newRange;
        //updateCameraRange
        app.updateCameraRange();
        break;
      }
      case configs.view.PLANET: {

        break;
      }
    }
  }

  // change view
  function onChangeView(e, viewTarget, object) {
    if(app.view != viewTarget) {
      switch (viewTarget) {
        case configs.view.SYSTEM: {


          app.view = viewTarget;
          break;
        }
        case configs.view.PLANET: {
          app.planetView.onFocus(object.object);
          app.setFocus(app.planetView);

          app.view = viewTarget;
          break;
        }
      }
    }
  }

  $(window).on('resize', onWindowResize);
  $(document).on('contextmenu', function() { return false; }); //disable default event/ preventDefault not working so use it
  $(document).on('click', onMouseClick);
  $(document).on('mousedown', onMouseDown);
  $(document).on('mouseup', onMouseUp);
  $(document).on('mouseout', onMouseOut);
  $(document).on('mousemove', onMouseMove);
  $(document).on('changeview', onChangeView);
  window.addEventListener('wheel', onMouseWheel, false);
})
