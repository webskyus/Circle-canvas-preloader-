window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let canvas = document.querySelector('#canvas'),
			max = 100, 
			x = 0,
			pi = Math.PI, 
			degreeConverter = 2 * pi / 100,
			ctx = canvas.getContext('2d'), 
			timeout;

	function getDraw() {

		// clear path 
		ctx.clearRect(0, 0, 250, 250); 

		// start path 
		ctx.beginPath(); 

		// stroke style 
		ctx.strokeStyle = '#cbc3c3';

		// stroke size 
		ctx.arc(125, 125, 100, 0, x * degreeConverter, false);

		// line width 
		ctx.lineWidth = 5;

		// line cap 
		ctx.lineCap = 'round';

		// stroke draw 
		ctx.stroke();

		// close path 
		ctx.closePath(); 

		// change x number 
		x++;

		if (x <= max) {
			requestAnimationFrame(getDraw);
		} 

		// add text 
		ctx.font = 'bold 30px sans-serif';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#cbc3c3';
		ctx.textBaseline = 'middle'
		ctx.fillText(`${x-1}%`, 125, 125);
	}

	getDraw();

});

