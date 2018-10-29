/*alert("hey dear");
var fristName
var lastName
console.log("angel");
console.log("mirembe")
prompt("enter your name");*/

/*var a = 2;
var b = 2;
if(a === b)
    {alert("Yeah.....its true");
}else{
    alert("No...a is not equal to b");
}
var x = 1;
var y = 1;
var z = 2;
if(x == y && y == z){
    alert("Yeah Yeah Yeah");}
    else{
        alert("Incorrect Incorrect Incorrect")
    }

    var fruits = "catu";
    switch(fruits){
        case "grapes":
        alert("grapes are not around")
        break;
        case "oranges":
        alert("orange cost shs.2000 each")
        break
        
        
        default:
        alert('sorry'+ ' '+fruits+ ' '+ 'does not belong here')


    }*/
/*function sumOfNumbers(number1, number2){
    return number1 + number2; 
}
console.log(sumOfNumbers(5,10));

function productOfNumber(number1, number2){
    return number1 * number2;
}
console.log(productOfNumber(6,5));

function differentOfNumber(number1, number2){
    return number1 - number2;
}
console.log(differentOfNumber(67,7));

function divisionOfNumber(number1, number2){
    return number1 / number2;
}
console.log(divisionOfNumber(36,6));
alert ('Defferent'+ ' '+differentOfNumber(67,7))*/


var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'purple'

})
var time = document.querySelector('div');
time.addEventListener('click', function () {
    time.innerHTML = Date();
})

var btn = document.getElementById('dog')

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
    var rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndcol;
}


var div = document.getElementById('cow')

document.onmouseover = function () {
    div.innerHTML ='get off me!';
}

document.onmouseout = function () {
    div.innerHTML ='thank you!';
}
document.onmouseout = function () {
    div.innerHTML ='Hi.....!';
}

