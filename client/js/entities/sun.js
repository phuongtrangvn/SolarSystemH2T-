define(['configs'], function(configs) {
  var geometry,
      material,
      sunMesh;

  geometry = new THREE.SphereGeometry(0.0696, 32, 32);
  material = new THREE.MeshPhongMaterial();

  material.map = THREE.ImageUtils.loadTexture('img/sunmap.jpg');

  sunMesh = new THREE.Mesh(geometry, material);

  sunMesh.update = function() {
    sunMesh.rotation.y += 0.01;
  }

  sunMesh.name = "Sun";

  return sunMesh;
})
