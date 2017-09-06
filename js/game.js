// some variables that we gonna use in this demo
var initId = 0;
var player = function(){
	this.object = null;
	this.canJump = false;
};
var world;
var ctx;
var canvasWidth;
var canvasHeight;
var keys = [];

// HTML5 onLoad event
Event.observe(window, 'load', function() {
	world = createWorld(); // box2DWorld 
	ctx = $('game').getContext('2d'); // 2
	var canvasElm = $('game');
	canvasWidth = parseInt(canvasElm.width);
	canvasHeight = parseInt(canvasElm.height);
	initGame(); // 3
	step(); // 4
	
// 5
	window.addEventListener('keydown',handleKeyDown,true); 
	window.addEventListener('keyup',handleKeyUp,true);
});
