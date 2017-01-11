define([], function() {
  var lights = [];

  light1	= new THREE.AmbientLight( 0x888888 );
  lights.push(light1);
  //
  // light2	= new THREE.DirectionalLight( 0xcccccc, 1 );
  // light2.position.set(5,3,5);
  // lights.push(light2);

  return lights;
})
