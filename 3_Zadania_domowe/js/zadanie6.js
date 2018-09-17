function getPi(n) {
    var pi = 0
    for (var i = 1 ; i <= n ; i += 4){
        pi += ( 1 / i - 1 / (i + 2));
    }
    return 4 * pi;
}

var n = 9;
console.log(getPi(n));