require.config({
  paths: {
    entities: "js/entities",
    configs: "js/configs",
    app: "js/app"
  }
});

require(['app', 'entities/earth', 'entities/sun'], function(app, earth, sun) {

  app.scene.add(earth);
  app.updateQueue.push(earth.update);

  app.scene.add(sun);
  app.updateQueue.push(sun.update);

  console.log(app.setFocus(earth));

  app.update();
})
