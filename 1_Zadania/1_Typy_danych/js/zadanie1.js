var numberOfUsers = 4.7;
var result = numberOfUsers/2;

console.log(Math.floor(result));
console.log(Math.ceil(result));

var myNumber = 144;
console.log(Math.sqrt(myNumber));

var postcode = "01-018";
var hasPausa = postcode.indexOf("-");
var splitted = postcode.split('-');
console.log(hasPausa);
console.log(splitted);

<!--Zadanie 1-->
var number = 10;
var text = "Marek";
var prawda = true;
var foo = null;

result = number + text;
result1 = text + prawda;
result2 = prawda + foo;

console.log(typeof(result)); <!--to jest string-->
console.log(typeof(result1)); <!--to jest string-->
console.log(typeof(result2)); <!--to jest typ liczbowy-->
console.log(typeof(number));
console.log(typeof(text));
console.log(typeof(prawda));
console.log(typeof(foo));

<!--Zadanie 2 -->
var firstNumber = 10;
var secondNumber = 7;

result = firstNumber/secondNumber;
console.log(Math.ceil(result));
console.log(Math.floor(result));

<!--Zadanie 3 -->
var min = 5;
var max = 100;

console.log("Wynik: ", Math.random()*(max - min) + min);


<!--Zadanie 4 -->
var widthBox = "23px";
var widthPanel = "2px";

console.log(Number(widthBox + widthPanel));

<!--Zadanie 5 -->
var mail = "adres@gmail.com";
var sign = mail.indexOf("@");
console.log(sign);





