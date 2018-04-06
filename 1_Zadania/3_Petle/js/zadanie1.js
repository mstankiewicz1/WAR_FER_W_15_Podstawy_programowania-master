/*var x =8;
var silnia = 1;
for( var i = 1 ; i<=x ; i++){
    silnia = silnia * i;
}
console.log(silnia);

var i = 1;
while(i<=x){
    silnia = silnia*i;
    i++;
}
console.log(silnia);

var zwierzaki = ["kot", "pies", "małpa"];
var ubrania = ["spodnie", "czapka", "swetr"];

    var rzeczy = [zwierzaki, ubrania];

        for (var i = 0 ; i<rzeczy.length ; i++) {
            for (var j = 0; j < rzeczy[i].length; j++) {
                console.log(rzeczy[i][j]);
            }
        }
<!--******************-->

var n = 5;

    for (var i = 1 ; i<=n ; i++){
            if(i===1 || i===n){
                console.log("*");
            }
        }
        console.log("*");
    }
}*/
//Rysunki w konsoli
    var n = 15;
    var string = " ";
    for(var i = 0 ; i<n ; i++){
        for(var j = 0 ; j<n ; j++){
            if (i === 0 || i === n-1 || j === 0 || j === n-1) {
                string = string + "*";
            }else {
                string += " ";
            }
        }
        string += "\n";
    }
    console.log(string);


<!--Zadanie1-->

var n = 25;
for (var i = 1 ; i<=n ; i++){
    if(i%2==0){
        console.log(i + " - parzysta");
    }else{
        console.log(i + " - nieparzysta");
    }
}



