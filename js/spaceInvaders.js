var gameInterval;
var i = 0;
var gX = 100;
var gY = 250;
var dX = 100;
var dY = 50;
var direction = 'right';

function startGame()	{
	restart();
	document.getElementById("startButton").style.display = 'none';
	gameInterval = window.setInterval(x,50);
	
	for (index1 = 0; index1 < 4; index1++)	{
		for (index2 = 0; index2 < 10; index2++)	{
			createInvader();
			posX = dX + (index2 * 10);
			posY = dY + (index1 * 10);
			document.getElementById("invaders").lastChild.style.top = posY;
			document.getElementById("invaders").lastChild.style.left = posX;
		}
	}
	// console.log(document.getElementById("invaders").childNodes.length);
}

function restart()	{
	var element = document.getElementById("invaders");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	document.getElementById("gameOver").innerHTML = "";
	
	dX = 100;
	dY = 50;
	
	document.getElementById("invaders").style.top = dY;
	document.getElementById("invaders").style.left = dX;
}

function endGame()	{
	window.clearInterval(gameInterval);
	document.getElementById("startButton").style.display = 'block';
	document.getElementById("gameOver").innerHTML = "game over";
}

var x = function update()	{
	/* i++;
	  console.log(i); */
	 
	var rowLen = 10;
	  
	if (direction == 'right')	{
		dX += 2;
	} else {
		dX -= 2;
	}
	
	if(dY > 200) endGame();
	
	if (dX >= 700)	{
		direction = 'left';
		dY += 10;
		document.getElementById("invaders").style.top = dY;
		var count = 0;
		var drop = 0;
		for(a = 0; a < document.getElementById("invaders").childNodes.length; a++)	{
			if (count == (rowLen))	{
				drop ++;
				count = 0;
			}
			var relPos = dY + drop * 10;
			count++;
			document.getElementById("invaders").childNodes[a].style.top = relPos;
		} 
	} else if (dX <= 100)	{
		direction = 'right';
		dY += 10;
		document.getElementById("invaders").style.top = dY;
		var count = 0;
		var drop = 0;
		for(a = 0; a < document.getElementById("invaders").childNodes.length; a++)	{
			if (count == (rowLen))	{
				drop ++;
				count = 0;
			}
			var relPos = dY + drop * 10;
			count++;
			document.getElementById("invaders").childNodes[a].style.top = relPos;
		}  
	}
	var count = 0;
	for(a = 0; a < document.getElementById("invaders").childNodes.length; a++)	{
		if (count == rowLen) count = 0;
		var relPos = dX + count * 15;
		count++;
		document.getElementById("invaders").childNodes[a].style.left = relPos;
	} 
	document.getElementById("invaders").style.left = dX;
}

function createInvader()	{
	var para = document.createElement("span");
	var node = document.createTextNode(" x ");
	para.appendChild(node);
	
	var element = document.getElementById("invaders");
	element.appendChild(para);
	para.style.position = 'absolute';
}

function newLine()	{
	var para = document.createElement("p");
	var node = document.createTextNode(" ");
	para.appendChild(node);
	
	var element = document.getElementById("invaders");
	element.appendChild(para);
}

onkeypress = function keyReader()	{
	// document.getElementById("keyReader").value = window.event.keyCode;
	if (window.event.keyCode == 97 && parseInt(document.getElementById("gun").style.left) >= 75)	{
		gX -= 5;
		document.getElementById("gun").style.left = gX;
	} else if (window.event.keyCode == 100 && parseInt(document.getElementById("gun").style.left) <= 725)	{
		gX += 5;
		document.getElementById("gun").style.left = gX;
	} else if (window.event.keyCode ==  32)	{
		
	} else {
		console.log("not a vaild button");
	}
	/*	space = 32
		a = 97
		d = 100
	*/
}