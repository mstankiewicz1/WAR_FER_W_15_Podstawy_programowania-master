//zad 7

function rockPaperScissors(player1, player2) {

    if (player1 == 'papier' && player2 == 'kamien' || player2 == 'kamien' && player2 == 'nozyce' || player1 == 'nozyce' && player2 =='papier'){
        return 'Gracz 1 wygrał';
    }
    if (player1 == 'papier' && player2 == 'nozyce' || player2 == 'kamien' && player2 == 'papier' || player1 == 'nozyce' && player2 =='kamien'){
        return 'Gracz 2 wygrał';
    }
    if (player1 == 'papier' && player2 == 'papier' || player2 == 'kamien' && player2 == 'kamiien' || player1 == 'nozyce' && player2 =='nozyce'){
        return 'remis';
    }
    else {
        return "Błędne informacje";
    }
}

console.log(rockPaperScissors('papier', 'nozyce'));