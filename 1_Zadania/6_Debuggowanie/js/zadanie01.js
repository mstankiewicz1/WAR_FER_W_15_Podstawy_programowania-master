/* Ta funkcja nie robi nic sensownego.
*/
function doSomething(number) {
    var numberOfSlides = 5;
    var slideWidth = 400;
    var baz;

    var foo = 'Galeria ma ';
    console.log(foo + numberOfSlides + ' zdjęcic');

    var naj = "naj ";
    for(var i = 0; i <= numberOfSlides - 1; i++) {
        var baz = "Zdjęcie nr " + i + " lubię " + naj + " bardziej";
        console.log(baz)
        // naj += " naj";
    }
}
console.log(doSomething(10));