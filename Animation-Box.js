/* An infinite animation by halving the second setInterval time (from 8 to 4) in line 12. */
/* 8/4 is the smallest pair. From 6/3, it does not look smooth. */
/* Julia Hiyeon Kim (2021) */

window.onload = function() {
	var box = document.getElementById('box');
	var posX = 0;

	var tX = setInterval(moveX, 8);
	function moveX() {
		if (posX == 150) {
			var tX = setInterval(moveX, 4);
			function moveX() {
				if (posX == 0) {
					clearInterval(tX);
				}
				else {
					posX = posX - 1;
					box.style.left = posX + 'px';
				}
			}
		}
		else {
			posX = posX + 1;
			box.style.left = posX + 'px';
		}
	}

};
