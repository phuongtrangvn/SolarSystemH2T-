define(['app', 'configs', 'entities/TrajectoryMesh'], function(app, configs, TrajectoryMesh) {
  var config = configs.mars;

  var geometry,
      material,
      mesh;
  //childrens
    //trajectory
  var trajectory;

  //earth
  geometry = new THREE.SphereGeometry(config.radiant, 32, 32);
  material = new THREE.MeshPhongMaterial();

  // material.map = THREE.ImageUtils.loadTexture('img/earthmap1k.jpg');
  //
  // material.bumpMap = THREE.ImageUtils.loadTexture('img/earthbump1k.jpg');
  // material.bumpScale = 0.05;
  //
  // material.specularMap = THREE.ImageUtils.loadTexture('img/earthspec1k.jpg');
  // material.specular = new THREE.Color('grey');

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
