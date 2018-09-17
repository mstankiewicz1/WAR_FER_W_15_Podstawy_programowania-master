
//Napisz funkcję, która przyjmuje jako argumenty trzy
// liczby i zwraca największą z nich (zwraca, a
// nie wypisuje na ekranie). Wypisać możesz dopiero jak zwrócisz wynik z funkcji.

function porownanie (a,b,c) {
    if (a>b && a>c){
        return a;
    }
    if (b>a && b>c){
        return b;
    }
    if (c>a && c>b){
        return c;
    }
}

console.log(porownanie(1,2,3));