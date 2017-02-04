define([], function() {
  class TrajectoryMesh extends THREE.Line {
    constructor(configs, planet) {
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
      this.currentVerticesIndex = configs.startPosition || 0;
      if(planet) {
        this.planet = planet;
        this.setPlanetPosition();
      }
      this.rotation.x += Math.PI / 2;
      // this.next();
    }

    setPlanetPosition() {
      if(this.planet) {
        let currentVt = this.geometry.vertices[this.currentVerticesIndex]
                          .clone()
                          .applyAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/2);
        this.planet.position.set(currentVt.x, currentVt.y, currentVt.z);
      }
    }

    nextPosition() {
      return this.geometry.vertices[this.currentVerticesIndex < this.geometry.vertices.length - 2 ? ++this.currentVerticesIndex : (this.currentVerticesIndex = 0)];
    }
  }

  return TrajectoryMesh;
})
