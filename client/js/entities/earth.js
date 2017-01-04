define(['app', 'configs'], function(app, configs) {
  var geometry,
      material,
      earthMesh;

  geometry = new THREE.SphereGeometry(0.0063710, 32, 32);
  material = new THREE.MeshPhongMaterial();

  material.map = THREE.ImageUtils.loadTexture('img/earthmap1k.jpg');

  material.bumpMap = THREE.ImageUtils.loadTexture('img/earthbump1k.jpg');
  material.bumpScale = 0.05;

  material.specularMap = THREE.ImageUtils.loadTexture('img/earthspec1k.jpg');
  material.specular = new THREE.Color('grey');

  earthMesh = new THREE.Mesh(geometry, material);

  //childrens
    //-cloud
  var cloudGeometry,
      cloudMaterial,
      cloudMesh;

  cloudGeometry = new THREE.SphereGeometry(0.0063710, 32, 32);
  cloudMaterial = new THREE.MeshPhongMaterial({
    map         : THREE.ImageUtils.loadTexture('img/earthcloudmaptrans.jpg'),
    bumpMap     : THREE.ImageUtils.loadTexture('img/earthcloudmap.jpg'),
    bumpScale   : 0.05,
    side        : THREE.DoubleSide,
    opacity     : 0.1,
    transparent : true,
    depthWrite  : false
  });
  cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
  earthMesh.add(cloudMesh);

  earthMesh.position.x += 0.2;

  earthMesh.update = function() {
    earthMesh.rotation.y += 0.01;
    cloudMesh.rotation.y += 0.01;
  }

  earthMesh.name = "Earth";

  return earthMesh;
})
