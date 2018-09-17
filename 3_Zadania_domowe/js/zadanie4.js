function getFibonacciNumbers (n) {
    var tablica = [];

    if (n <= 0){
        return 0;
    }

    if (n === 1){
        return 1;
    }

    return getFibonacciNumbers(n-1) + getFibonacciNumbers(n-2);
    tablica.push(n-1);
}
console.log(getFibonacciNumbers(9));

/*function getFibonacciNumbers(n) {
    tabFib = [];
    tmp = 0;
    switch (n) {
        case 0 :
            tabFib.push(0);
            break;
        case 1 :
            tabFib.push(0, 1);
            break;
        default :
            tabFib.push(0, 1);
            for (var i = 0 ; i <= n-2 ;  i++) {
                tmp = tabFib[i] + tabFib[i + 1];
                tabFib.push(tmp);
            }
        }
    tabFib.splice(n,1);
    return tabFib;
}

var n = 9;
console.log(getFibonacciNumbers(n));*/