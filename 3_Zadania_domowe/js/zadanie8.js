
function pow(x,n) {
    var wynik = 1
    for (var i = n; i > 0; i--) {
        wynik *= x;
    }
    return wynik;
}

function str(x){
    var wynik = 1;
    for (var i = 1; i <= x; i++) {
        wynik = wynik * i;
    }
    return wynik;
}

function mySin(x, iterNum){

    var sin = 0;
    for (var j = 1 ; j <= iterNum ; j = j + 2 ){
        sin = sin + pow(x,j)/str(j) - pow(x,j+2)/str(j+2);
    }
    return sin;

}


function myCos(x, iterNum){
    var cos = 0;
    for (var j = 0 ; j <= iterNum ; j = j + 2){
        cos += pow(x,j)/str(j) - pow(x,j+2)/str(j+2);
    }
    return cos;
}