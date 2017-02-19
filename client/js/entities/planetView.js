define(['configs'], function(configs) {
  var config = configs.planetView;

  var geometry,
      material,
      mesh;

  var lights;

  geometry = new THREE.SphereGeometry(config.radiant, 32, 32);
  material = new THREE.MeshPhongMaterial();

	material.map = THREE.ImageUtils.loadTexture('img/sunmap.jpg');
	material.bumpMap = THREE.ImageUtils.loadTexture('img/sunmap.jpg');
	material.bumpScale = 0.5;

  mesh = new THREE.Mesh(geometry, material);
  mesh.configs = config;
  //this planet's update write on app.js file

  mesh.name = "PlanetView";

  mesh.onFocus = function(target) {
    mesh.material.map = target.material.map;
    mesh.material.bumpMap = target.material.bumpMap;
    mesh.material.bumpScale = target.material.bumpScale * 10;
  }

  return mesh;
})
