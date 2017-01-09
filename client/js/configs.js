define([], function() {

  var mercury = {
    distance: 0.057,
    radiant: 0.0063710,
    Trajectory : {
      aX: 0,
      aY: 0,
      xRadius: 0.057,
      yRadius: 0.05,
      points: 50
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
      points: 50
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
      points: 50
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
      points: 150
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
      points: 250
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
      points: 350
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
      points: 450
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
      points: 550
    }
  }

  var distance = [
    5.906,
    4.498,
    2.870,
    1.426,
    0.778,
    0.227, //mars
    0.149,
    0.108,
    0.057,
    0
  ]; // * 1 000 000 000

  var radiant = [
    0.001195,
    0.024622,
    0.025362,
    0.058232,
    0.0026312,
    0.00339,  //mars
    0.0063710,
    0.0060518,
    0.002439,
    0.0696 // sun size was division by 10
  ]; // * 1 000 000


  return {
    mercury: mercury,
    venus: venus,
    earth: earth,
    mars: mars,
    jupiter: jupiter,
    saturn: saturn,
    uranus: uranus,
    neptune: neptune
  }
})
