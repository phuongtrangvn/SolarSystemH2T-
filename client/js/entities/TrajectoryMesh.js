define([], function() {
  class TrajectoryMesh extends THREE.Line {
    constructor(configs) {
      var curve = new THREE.EllipseCurve(
      	configs.aX,  configs.aY,            // ax, aY
      	configs.xRadius, configs.yRadius,           // xRadius, yRadius
      	0,  2 * Math.PI,  // aStartAngle, aEndAngle
      	false,            // aClockwise
      	0                 // aRotation
      );

      var path = new THREE.Path( curve.getPoints( configs.points ) );
      var geometry = path.createPointsGeometry( configs.points );
      var material = new THREE.LineBasicMaterial( { color : 0xffffff } );

      super( geometry, material );
      this.rotation.x += Math.PI / 2;
    }
  }

  return TrajectoryMesh;
})
