//ROBOCZE
//TYPY DANYCH

/*var numberOfUsers = 15;
result = numberOfUsers/2;
console.log(Math.floor(result));

//Obliczanie pierwiastka

var number = 144;
console.log(Math.sqrt(number));

//Metody dla stringów jak używać

var postcode = "01-018";

if (postcode.indexOf("-")){
        console.log("Kod posiada znak");
}else{
        console.log("Kod nie posiada znaku ");
}

//Zadanie 1
var number = 2;
var name  = "Marek";
var prawda = true;
var bar  = undefined;

var result = number + name;
console.log(typeof(result));
var result1 = name + prawda;
console.log(typeof(result1));
var result2 = prawda + bar;
console.log(typeof(result2));

//Zadanie 2
var firstNumber = 10;
var secondNumber = 7;
result3 = firstNumber/secondNumber;
console.log(Math.ceil(result3));
console.log(Math.floor(result3));

//Zadanie 3
var min = 5;
var max = 100;
result4 =  Math.random() * (max - min) + min;
console.log(result4);

//Zadanie 4
var widthBox = "23px";
var widthPanel = "2px";
result5 = widthBox + widthPanel;
console.log(result5);

//Zadanie 5
var mail = "marek@gmail.com";

if (mail.indexOf("@")){
        console.log("Tam jest znak @")
        }else{
        console.log("Tam nie ma @");
}

//INSTRUKCJE WARUNKOWE
//Losowanie
var min = 1;
var max = 100;
var result = Math.random() * (max - min) + min;
console.log(result);
if (result>50){
        console.log("Hura");
}else{
        console.log("Liczba mniejsza od 50");
}

//Zadanie 1
var a = 10;
var b = 5;
if (a>b){
        console.log("Większa jest liczba a");
}else{
        console.log("Większa jest liczba b");
}

//Zadanie 3
var menAge = 32;
var pet = "pies";

switch(pet) {
    case "pies":
            console.log("Wiek człowieka to " + menAge*7)
        break;
    case "cat":
            console.log("Wiek człowieka to " + menAge*2);
        break;
    case "chicken":
            console.log("Wiek czlowieka " + menAge*3);
        break;
    default:
            console.log("Wiek człowieka " + menAge);
}


//PĘTLE
//Silnia
var x = 5;
var silnia = 1;
for (var i = 1 ; i<=x ; i++){
        silnia *= i;
}
console.log(silnia);

//Rysunki w konsoli
var n = 5;
var string = "";
for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < n ; j++){
                if(i===0 || i === n-1 || j===0 || j === n-1){
                        string = string + "*";
                }else{
                        string = string + " ";
                }
        }
        string = string + "\n";
}
console.log(string);

//Zadania do samodzielnego wykonania
//Zadanie 1
var n = 10;
        for (var i = 1 ; i<=n ; i++){
                if(i%2 === 0){
                        console.log(i + " - liczba parzysta");
                }else{
                        console.log(i + " - liczba nieparzysta");
                }
        }

//Zadanie 2
var x = 5;
var y = 10;
var suma = 0;
for (var i = x ; i<=y ; i++){
        suma = suma + i;
}
console.log(suma);

//Zadanie 3
var n = 5;
var string = "";
        for (var i = 0 ; i < n ; i++) {
            for (var j = 0; j < n; j++) {
                if ((i + j) % 2 === 0) {
                    string = string + " ";
                } else {
                    string = string + "*";
                }
            }
            string = string + "\n";
        }
console.log(string);

//TABLICE
//Zadania rozwiązywane z wykładowca

//Wypisywanie tablicy
var tab = [0,2,3,4,5,6,7,8,9,10,11];
for (var i = 0 ; i<=tab.length ; i++){
        console.log(i);
}

//Powtórki w tablicy
var min = 1;
var max = 10;
var randomEl = [];
var doubled = [];

for(var i=1 ; i<=10 ; i++){
    randomEl.push(Math.ceil(Math.random()*(max-min) + min));
}
for(var i = 0 ; i<randomEl.length ; i++){
    if(randomEl.lastIndexOf(randomEl[i]) !== randomEl.indexOf(randomEl[i])){
        if(doubled.indexOf(randomEl[i])===-1){
            doubled.push(randomEl[i]);
        }
    }
}
console.log("doubled", doubled);
console.log("random", randomEl);


//Liczba znaków każdego wyrazu

var string =  "My name is Bond, James Bond";
var tab = string.split(" ");

        for (var i = 0 ; i<tab.length ; i++) {
            console.log(tab[i].length);
        }

//Zadania do samodzielnego wykonania

//Zadanie 1
var avg = [4, 4, 1, 2, 5, 40];
var suma = 0
        for(var i = 0 ; i < avg.length ; i++){
                suma = suma + avg[i];
        }
        console.log(suma/avg.length);

//Zadanie 2
var min = 1;
var max =60;
var tab = [];

    for(var i = 0 ; i < 10 ; i++){
        tab.push(Math.ceil(Math.random() * (max - min) + min));
    }
    console.log(tab);
    for (var i = 0 ; i <10 ; i++) {
        if(tab[i]%2 != 0){
        tab[i]++;
        }
    }
    console.log(tab);

//Zadanie 3
var arr1 = [4, 55, 17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20];

    for (var i = 0 ; i<arr1.length ; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }

//FUNKCJE
//Zadania rozwiązywane z wykładowcą
//FooBar ...FOOBAR
function fooBar(x) {
    if (typeof x === "underfined" || typeof x !=="number"){
        return;
    }
    var str = " ";
    for(var i = 1 ; i <=x ; i++){
        if(i%3 === 0 && i%5 === 0){
            str += "FOOBAR";
        }else if (i%3 === 0){
            str += "Foo";
        }else if (i%5 === 0) {
            str += "Bar";
        }else if (i%3 === 0 && i%5 === 0){
            str += "FOOBAR";
        }
    }
    return str;
}
console.log(string);

//Obliczanie potęgi
function power(a,n) {
    var score = 1;
    for (var i =1 ; i<=n ; i++){
        score*=a;
    }
    return score;
}
console.log(power(2,3));


//Zadania do samodzielnego wykonania

//Zadanie 1
function miksowanie (napis) {
    return "zmiksowana " + napis;
}
    console.log(miksowanie("ogórek"));

//Zadanie 2
function seeSentence(n) {
    for(var i = 1 ; i <=n ; i++){
        console.log(i + " Programowanie jest fajne!");
    }
}
console.log(seeSentence(7));

//Zadanie 3
function numbersArguments(a,b,c) {
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else if (c>a && c>a){
        return c;
    }
}
console.log(numbersArguments(10,7,4));
*/
//Zadanie 4
function sumTable(tab) {
    var sum = 0;
    for(var i = 0; i<tab.length ; i++){
        sum+=tab[i];
    }
    return sum;
 }

 var arr = [1,2,3,4];
console.log(sumTable(arr));

//Zadanie 5 ?????????????????????????????????????????????????????

//Zadanie 6
function rentCost(days) {
    var cost = 0;
    var numbersOfWeeks = Math.floor(days / 7);
    if (days >7){
        cost = (days*150) - (numbersOfWeeks*50);
    }else if (days === 1){
        cost = days*200;
    }else if (days>1 && days<4){
        cost = days*180;
    }else if(days>3 && days<7){
        cost = days*160;
    }else if (days === 7){
        cost = (days*160)-50;
    }
    return cost;
}
console.log(rentCost(8));

//Zadanie 7
function rockPaperScissors(player1, player2) {
    var score = null;
    if(player1 === player2) {
            score = "Remis";
    }else if(player1 === "kamien" && player2 !== "papier"){
            score = "Gracz 1 wygrał";
    }else if (player1 === "nozyce" && player2 !== "kamien"){
            score = "Gracz 1 wygrał";
    }else if (player1 === "papier" && player2 !== "nozyce") {
            score = "Gracz 1 wygrał";
    }else if(player1 === "kamien" && player2 === "papier"){
        score = "Gracz 2 wygrał";
    }else if (player1 === "nozyce" && player2 === "kamien"){
        score = "Gracz 2 wygrał";
    }else if (player1 === "papier" && player2 === "nozyce") {
        score = "Gracz 2 wygrał";
    }else{
        score = "Błędne informacje";
    }
    return score;
}
console.log(rockPaperScissors("papier","nozyce"));


//Zadanie 8
function calculateTip(amount,raiting){
    var tip = 0;
    if(raiting === "Bardzo dobra obsluga"){
        tip = tip + ((amount*25)/100);
    }else if(raiting === "Dobra obsluga"){
        tip = tip + ((amount*20)/100);
    }else if (raiting === "Srednia obsluga"){
        tip = tip + ((amount*15)/100);
    }else if (raiting === "Zla obsluga"){
        tip = tip + ((amount*0)/100);
    }else{
        tip = "Opis jest nieczytelny";
    }
    return tip;
}
console.log(calculateTip(100,"Bardzo dobra obsluga"));