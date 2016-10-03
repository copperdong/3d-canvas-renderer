/* global Stage, Shape, get, getObjectProperties */

'use strict';

(function () {

  var stage = new Stage(document.getElementById('canvas'));

  get(
    'objs/teapot.obj',
    function (response) {
      console.log('Loaded');

      var rotationX = 0;
      var rotationY = 0;
      var rotationZ = 0;

      var obj = getObjectProperties(response);
      var teapot = new Shape(obj.vertices, obj.faces);
      teapot.invert();
      teapot.setScale(100, 100, 100);
      teapot.setRotation(rotationX, rotationY, rotationZ);

      stage.add(teapot);

      setInterval(function () {
        // rotationX += 1;
        rotationY += 1;
        rotationZ += 1;
        teapot.setRotation(rotationX, rotationY, rotationZ);
        stage.draw();
      }, 1000 / 30);
    },
    function (error) {
      throw new Error(error);
    }
  );

})();
