var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();

request.onload = function () {
	var superHeroes = request.response;
	
	//for (detail in superHeroes)	{
		// console.log(detail);
		for (i in superHeroes.members)	{
			if (superHeroes.members[i].name == "Molecule Man")	{
				console.log(superHeroes.members[i].secretIdentity + " is " + superHeroes.members[i].name);
			}
		}
	//}
}

/*
window.event.clientY();
window.event.ctrlKey();
event.mouseEnter */