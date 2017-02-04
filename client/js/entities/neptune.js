define(['app', 'configs', 'entities/TrajectoryMesh'], function(app, configs, TrajectoryMesh) {
  var config = configs.neptune;

  var geometry,
      material,
      mesh;
  //childrens
    //trajectory
  var trajectory;

  //earth
  geometry = new THREE.SphereGeometry(config.radiant, 32, 32);
  material = new THREE.MeshPhongMaterial();

	material.map = THREE.ImageUtils.loadTexture('img/neptunemap.jpg');
	material.bumpMap = THREE.ImageUtils.loadTexture('img/neptunemap.jpg');
	material.bumpScale = 0.05;

  mesh = new THREE.Mesh(geometry, material);

  //childrens
    //trajectory

  trajectory = new TrajectoryMesh(config.Trajectory, mesh);
  mesh.trajectory = trajectory;
  app.scene.add(trajectory);
  //setup

  mesh.update = function() {
    mesh.rotation.y += 0.01;
    trajectory.nextPosition();
    trajectory.setPlanetPosition();
  }

  mesh.name = "Mercury";

  return mesh;
})
