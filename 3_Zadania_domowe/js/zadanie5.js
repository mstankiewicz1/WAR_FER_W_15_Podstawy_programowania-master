function isPrimeNumber(n) {
    switch (true) {
        case n < 2 :
            return false;
            break;
        case n > 2 :
            for (var i = 2; i < Math.floor(Math.sqrt(n)); i++) {
                if (n % i == 0) {
                    return false;
                    break;
                }
            }
            deflaut :
                return true;
            break;
    }
}

var n = 9;
console.log(isPrimeNumber(n));