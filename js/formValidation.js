

function formSubmit() {
	
	var pass = true;
	
	var alpha = /^[a-zA-Z]+$/;
	var emailRX = /^[a-zA-Z_\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]+$/;
	
	if(!document.getElementById("name").value.match(alpha)) {
		document.getElementById("name").style.backgroundColor = 'red';
		console.log("name invalid");
		pass = false;
	} else	{
		document.getElementById("name").style.backgroundColor = 'white';
	}
	
	if(!document.getElementById("email").value.match(emailRX)) {
		document.getElementById("email").style.backgroundColor = 'red';
		console.log("email invalid");
		pass = false;
	} else	{
		document.getElementById("email").style.backgroundColor = 'white';
	}
	
	// validate dropdown...
	return pass;
}

function dropDown()	{
	
	// console.log(document.getElementById("dropDownStuff").style.display);
	
	if(document.getElementById("dropDownStuff").style.display == 'none')	{
		document.getElementById("dropDownStuff").style.display = 'block';
	} else {
		document.getElementById("dropDownStuff").style.display = 'none';
		// console.log(document.getElementById("dropDownStuff").style.display);
	}
	// console.log(document.getElementById("dropDownStuff").style.display);
	// document.getElementById("dropDownStuff").classList.toggle("show");
}

function drop(str)	{
	document.getElementById("dropdown").value = str;
	dropDown();
}