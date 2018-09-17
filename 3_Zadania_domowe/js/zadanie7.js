function whatNumber(n) {
    var number = 0;
    for (var i = 0 ; i < n ; i++){
        if (n % i == 0){
            number += i;
        }
    }
    switch (true){
        case (number == n) : return 'doskonała';
        case (number < n) : return 'niekompletna';
        default : return false;
    }
}

var n = 6;
console.log(whatNumber(n));