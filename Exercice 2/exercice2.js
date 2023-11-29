// Fonction pour vérifier si un nombre est pair
function estPair(nombre) {
    return nombre % 2 === 0;
}

// Fonction principale
function programme() {
    var nombres = [];
    var nombresPairs = [];
    var nombresImpairs = [];
    var erreurs = 0;

    for (var i = 0; i < 5; i++) {
        var saisie = parseInt(prompt("Entrez un nombre entier entre 9 et 99 :"), 10);

        while (isNaN(saisie) || saisie < 9 || saisie > 99) {
            // En cas d'erreur, redemande la saisie
            saisie = parseInt(prompt("Erreur ! Entrez un nombre entier entre 9 et 99 :"), 10);
            erreurs++;
        }

        nombres.push(saisie);

        if (estPair(saisie)) {
            nombresPairs.push(saisie);
        } else {
            nombresImpairs.push(saisie);
        }
    }

    // Affiche les résultats
    console.log("Nombres pairs saisis : " + nombresPairs.length);
    console.log("Nombres impairs saisis : " + nombresImpairs.length);
    console.log("Nombre d'itérations fausses : " + erreurs);
    console.log("Tableau des nombres pairs : " + nombresPairs.join(', '));
    console.log("Tableau des nombres impairs : " + nombresImpairs.join(', '));
}

// Exécute le programme
programme();
