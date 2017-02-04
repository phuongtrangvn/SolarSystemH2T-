define(['app', 'configs', 'entities/TrajectoryMesh'], function(app, configs, TrajectoryMesh) {
  var config = configs.mercury;

  var geometry,
      material,
      mesh;
  //childrens
    //trajectory
  var trajectory;

  //earth
  geometry = new THREE.SphereGeometry(0.0063710, 32, 32);
  material = new THREE.MeshPhongMaterial();

	material.map = THREE.ImageUtils.loadTexture('img/mercurymap.jpg');
	material.bumpMap = THREE.ImageUtils.loadTexture('img/mercurybump.jpg');
	material.bumpScale = 0.005;

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
