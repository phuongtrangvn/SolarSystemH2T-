require.config({
  paths: {
    entities: "js/entities",
    configs: "js/configs",
    app: "js/app"
  }
});

require(['app', 'entities/sun',
    'entities/mercury',
    'entities/venus',
    'entities/earth',
    'entities/mars',
    'entities/jupiter',
    'entities/saturn',
    'entities/uranus',
    'entities/neptune']
    , function(app, sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune) {

  app.scene.add(sun);
  app.updateQueue.push(sun.update);

  app.scene.add(mercury);
  app.updateQueue.push(earth.update);

  app.scene.add(venus);
  app.updateQueue.push(earth.update);

  app.scene.add(earth);
  app.updateQueue.push(earth.update);

  app.scene.add(mars);
  app.updateQueue.push(earth.update);

  app.scene.add(jupiter);
  app.updateQueue.push(earth.update);

  app.scene.add(saturn);
  app.updateQueue.push(earth.update);

  app.scene.add(uranus);
  app.updateQueue.push(earth.update);

  app.scene.add(neptune);
  app.updateQueue.push(earth.update);

  app.setFocus(earth);
  app.update(0);
})
