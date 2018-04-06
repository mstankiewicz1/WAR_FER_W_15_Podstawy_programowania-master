//Zadania rozwiazywane z wykladowca
//Wypisywanie tablicy
/*var tab = [1,2,3,3,5,6,6,8,9,9,9];
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

//Liczba znaków kazdego wyrazu
var string =  "My name is Bond, James Bond";

var tab = string.split(" ");

for (var i = 0 ; i<tab.length ; i++){
    console.log(tab[i].length);
}
*/

<!-- ********************************-->
//Zadania do samodzielnego wykonania
//Zadanie 1

var avg = [4, 4, 1, 2, 5, 40];
var suma = 0;
//var len = avg.length; - alternatywne rozwiazanie

    for(var i = 0 ; i<avg.length ; i++){
        suma +=avg[i];
    }

    console.log(suma/avg.length);




