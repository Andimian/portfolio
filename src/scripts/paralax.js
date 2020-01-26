      // паралакс по движению мышки
import Parallax from 'parallax-js';

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  // calibrateX: true,
  // calibrateY: true,
  // dataHoverOnly: true,
  // dataClipRelativeInput: true,
  // invertX: true,
  // invertY: true,
  limitX: 50,
  limitY: 50,
  // precision: 10,
  // scalarX: 2,
  // scalarY: 8,
  clipRelativeInput: true,
  hoverOnly: true,
  // frictionX: 0.1,
  // frictionY: 0.1,
  // originX: 0.5,
  // originY: 0.5
});

// parallaxInstance.disable();


      // паралакс по скроллу
var parallax = (function() {
  var parLayer1 = document.querySelector('.paralax__layer--1')
  var parLayer2 = document.querySelector('.paralax__layer--2')
  var parLayer3 = document.querySelector('.paralax__layer--3')
  var parLayer4 = document.querySelector('.paralax__layer--4')
  var parLayer5 = document.querySelector('.paralax__layer--5')
  
  return {
    move: function(block, windowScroll,strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var style = block.style;
      var transformString = 'translate3d(0, ' +strafe+', 0)';
      
      style.top = strafe;
      style.webkitTransform = transformString;
    },
    init: function(wScroll) {
      // var для нижнего паралакса = getoffsets('start-section').top,
      var startOffSet = getOffsets ('start-section').bottom;

      if(startOffSet > 0) {
        
        // this.move(parLayer1, wScroll, 500);
        this.move(parLayer2, wScroll, 120);
        this.move(parLayer3, wScroll, 100);
        this.move(parLayer4, wScroll, 90);
        // this.move(parLayer5, wScroll, 50);
      }

      // if(ниж пар > 0) {
      //   this.move(parLayer1, wScroll, 350);
      //   this.move(parLayer1, wScroll, 350);
      //   this.move(parLayer1, wScroll, 350);
      //   this.move(parLayer1, wScroll, 350);
      //   this.move(parLayer1, wScroll, 350);
      // }
    }
  }
}());

function getOffsets(block) {
  var element = document.querySelector('.' + block),
      rect = element.getBoundingClientRect();
  return rect;
}

// вот это запускается при скролле
window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
  

}