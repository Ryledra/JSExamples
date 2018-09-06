// variables

var p1 = {
	name: 'Bob',
	age: 3,
	occupation: 'builder'
};

var personArray = [];

var p2 = {
	name: '',
	age: 0,
	occupation: ''
};

var i = 1;

var num3 = 4;
var str = 'He said "my name is Elliot"';

// functions

function printPerson(person)	{
	return (person.name + ' ' + person.age + ' ' + person.occupation);
}

function square(number)	{
	return number*number;
}

function helloWorld()	{
	return 'hello world'
}

function square1()	{
	var num1 = document.getElementById('num').value;
	var out = (num1*num1);
	
	window.alert(out);
}

function sum(num1,num2,num3)	{
	var out = 0;
	out = num1+num2+num3;
	return out;
}

function sum2(num1,num2)	{
	return num1+num2;
}

function createPerson(name, age, occupation)	{
	p2.name = name;
	p2.age = age;
	p2.occupation = occupation;
	personArray.push(p2);
}

function strToCaps(string)	{
	return string.toUpperCase();
}

function checkAge(person){
	if (person.age >= 20 && person.age <= 40)	return true;
	else return false;
}

function count(num)	{
	var out = '';
	for(i = 1; i <= num; i++)	{
		out += i + ' ';
	}
	return out;
}

function countEven(num)	{
	var out = '';
	for(i = 1; i <= num; i++)	{
		if (i%2 == 0) out += i + ' ';
	}
	return out;
}

function fizzBuzz(num, fizz, FIZZ, buzz, BUZZ)	{
	var printed = false;
	for (i = 1; i <= num; i++)	{
		var printed = false;
		if(i%fizz == 0) {document.write(FIZZ); printed = true;}
		if(i%buzz == 0) {document.write(BUZZ); printed = true;}
		if(!printed) document.write(i);
		document.write(', ');
	}
}

function divide(num)	{
	var count = 0;
	while (num != 1)	{
		count++;
		if (num%3 == 0) num /= 3;
		else if (num%3 == 1) num -= 1;
		else num += 1;
	}
	return count;
}

function triple(str)	{
	var count = 0;
	for (i = 0; i < str.length-2; i++)	{
		if (str.charAt(i) == str.charAt(i+1) && str.charAt(i) == str.charAt(i+2)) count++;
	}
	return count;
}

function checkFilled()	{
	if (document.getElementById('calc1').value == '' && document.getElementById('calc2').value == '')	{
		return 1;
	} else if (document.getElementById('calc1').value == '') return 2;
	else if (document.getElementById('calc2').value == '') return 3
	else return 0;
}

function validate()	{
	var filled = checkFilled();
	if (filled == 0) {
		document.getElementById("error1").innerHTML="...";
		return true;
	}
	else if (filled == 1) document.getElementById("error1").innerHTML="Please fill in both values";
	else if (filled == 2) document.getElementById("error1").innerHTML="Please fill in calc1";
	else if (filled == 3) document.getElementById("error1").innerHTML="Please fill in calc2";
	return false;
}

function createPTag()	{
	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);
	
	var element = document.getElementById("addText");
	element.appendChild(para);
}

function changeTagFill(str)	{
	
}

function deleteTag()	{
	
}

// button update functions

function calculatorButtonAdd()	{
	if(validate()) 
		document.getElementById("calc3").value = 
		parseFloat(document.getElementById("calc1").value) +
		parseFloat(document.getElementById("calc2").value);
}
function calculatorButtonSubtract()	{
	if(validate()) 
		document.getElementById("calc3").value = 
		document.getElementById("calc1").value -
		document.getElementById("calc2").value;
}
function calculatorButtonMultiply()	{
	if(validate()) 
		document.getElementById("calc3").value = 
		document.getElementById("calc1").value *
		document.getElementById("calc2").value;
}
function calculatorButtonDivide()	{
	if(validate()) 
		document.getElementById("calc3").value = 
		document.getElementById("calc1").value /
		document.getElementById("calc2").value;
}

function bobButtonUpdate(person)	{
	person.age++;
	var x = document.getElementById('buttonBob');
	
	console.log(x.innerHTML);
	x.innerHTML = printPerson(person);
}

function sumButtonUpdate()	{
	window.alert(sum(parseInt(document.getElementById('num1').value),
								parseInt(document.getElementById('num2').value),
								parseInt(document.getElementById('num3').value)))
}

function sum2ButtonUpdate()	{
	document.getElementById('num6').value =
							sum2(parseInt(document.getElementById('num4').value),
									parseInt(document.getElementById('num5').value));
}

function personBuilderButtonUpdate()	{
	var name = document.getElementById("builderName").value;
	var age = parseInt(document.getElementById("builderAge").value);
	var occupation = document.getElementById("builderOccupation").value;
	createPerson(name,age,occupation);
	console.log(personArray);
	console.log(checkAge(p2));
}