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
