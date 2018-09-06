var xPos = 50;
var yPos = 50;
var fs = 10;

function updateFollower()	{
	xPos = window.event.clientX;
	yPos = window.event.clientY;
	//console.log(xPos,yPos);
	var sty = document.getElementById("follower").style;
	sty.top = yPos;
	sty.left = xPos;
	// var foSi = sty.fontSize;
	if(window.event.altKey)	{
		fs++;
		//console.log("holding alt");
		//console.log(foSi);
		//console.log(sty.fontSize);
		//var interim = parseInt(foSi.substring(0,foSi.length-2)) + 25;
		//console.log(interim);
		//sty.fontSize =  interim + "px";
	}
	if(window.event.ctrlKey)	{
		fs--;
		//console.log("holding ctrl");
		//sty.fontSize =  foSi -20 + 'px';
	}
	sty.fontSize = fs;
	// sty.color = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

function mouseEntered()	{
	var swap = document.getElementById("follower").innerHTML
	document.getElementById("follower").innerHTML = document.getElementById("x").value;
	document.getElementById("x").value = swap;
}

function backColor(str)	{
	document.getElementById("follower").style.background = str;
	// console.log(str);
}

function toggleVisibility()	{
	if (document.getElementById("follower").style.display == 'block')	{
		document.getElementById("follower").style.display = 'none';
	}
	else document.getElementById("follower").style.display = 'block';
}