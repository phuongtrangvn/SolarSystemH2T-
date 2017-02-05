define([], function() {
  // distance was division by 1 000 000 000
  // radiant  was division by 1 000 000

  var planetView = {
    distance: 0.5,
    radiant: 0.1
  }

  var sun = {
    radiant: 0.0696 * 0.5, // sun size was division by 10
    lightPower: 1,
    lightColor: "#ffffff",
    spotLight: {
      color: "#ffffff",
      intensity: 10,
      distance: 0.1,
      angle: Math.PI / 16,
      positions: [
        {x: 0, y: 0, z: 0.1},
        {x: 0, y: 0, z: -0.1},
        {x: 0, y: 0.1, z: 0},
        {x: 0, y: -0.1, z: 0},
        {x: 0.1, y: 0, z: 0},
        {x: -0.1, y: 0, z: 0}
      ]
    }
  }

  var mercury = {
    distance: 0.057,
    radiant: 0.0063710,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 0.057,
      yRadius: 0.05,
      points: 50,
      startPosition: 0
    }
  }

  var venus = {
    distance: 0.108,
    radiant: 0.0063710,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 0.108,
      yRadius: 0.10,
      points: 50,
      startPosition: 25
    }
  }

  var earth = {
    distance: 0.149,
    radiant: 0.0063710,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 0.149,
      yRadius: 0.14,
      points: 50,
      startPosition: 0
    }
  }

  var mars = {
    distance: 0.227,
    radiant: 0.00339,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 0.227,
      yRadius: 0.22,
      points: 150,
      startPosition: 25
    }
  }

  var jupiter = {
    distance: 0.778,
    radiant: 0.0026312,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 0.778,
      yRadius: 0.77,
      points: 250,
      startPosition: 0
    }
  }

  var saturn = {
    distance: 1.426,
    radiant: 0.058232,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 1.426,
      yRadius: 1.42,
      points: 350,
      startPosition: 25
    }
  }

  var uranus = {
    distance: 2.870,
    radiant: 0.025362,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 2.870,
      yRadius: 2.8,
      points: 450,
      startPosition: 0
    }
  }

  var neptune = {
    distance: 4.498,
    radiant: 0.024622,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 4.498,
      yRadius: 4.49,
      points: 550,
      startPosition: 25
    }
  }

  var pluto = {
    distance: 5.906,
    radiant: 0.001195,
    Trajectory: {
      aX: 0,
      aY: 0,
      xRadius: 5.906,
      yRadius: 5.9,
      points: 550,
      startPosition: 0
    }
  }

  return {
    planetView: planetView,
    sun       : sun,
    mercury   : mercury,
    venus     : venus,
    earth     : earth,
    mars      : mars,
    jupiter   : jupiter,
    saturn    : saturn,
    uranus    : uranus,
    neptune   : neptune,
    view      : {
      SYSTEM  : 0,
      PLANET  : 1
    }
  }
})
