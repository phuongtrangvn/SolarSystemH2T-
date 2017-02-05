define(['configs', 'app'], function(configs, app) {
  var config = configs.sun;

  var geometry,
      material,
      sunMesh;

  var lights;

  geometry = new THREE.SphereGeometry(config.radiant, 32, 32);
  material = new THREE.MeshPhongMaterial();

  material.map = THREE.ImageUtils.loadTexture('img/sunmap.jpg');
	material.bumpMap = THREE.ImageUtils.loadTexture('img/sunmap.jpg');
	material.bumpScale = 0.05;

  sunMesh = new THREE.Mesh(geometry, material);

  light = new THREE.PointLight(0xffffff, 2, 20, 0.069);
  sunMesh.add(light);
  light.receiveShadow = true;

  // config.spotLight.positions.forEach(function(position) {
  //   var spotLight = new THREE.SpotLight(config.spotLight.color, config.spotLight.intensity,
  //     config.spotLight.distance, config.spotLight.angle);
  //   spotLight.target.position.set(0, 0, 0);
  //   spotLight.position.set(position.x, position.y, position.z);
  //   sunMesh.add(spotLight);
  // })


  // var spotLight = new THREE.SpotLight(config.spotLight.color, config.spotLight.intensity,
  //   config.spotLight.distance, config.spotLight.angle);
  // spotLight.target.position.set(0, 0, 0);
  // spotLight.position.set(position.x, position.y, position.z);
  // sunMesh.add(spotLight);


  sunMesh.update = function() {
    sunMesh.rotation.y += 0.01;
  }
  // console.log(app.domEvents.addEventListener);
  // sunMesh.addEventListener("click", function(e) {
  //   console.log("sun click");
  // })

  sunMesh.name = "Sun";

  return sunMesh;
})
