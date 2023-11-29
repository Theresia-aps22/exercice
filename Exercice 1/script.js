var fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi'];

// Affiche la liste des fruits disponibles
function Afficher() {
    document.getElementById('list').innerHTML = fruits.toString();
}

// Recherche de fruits
function Recherche() {
    // Prendre la valeur de l'input
    var fruitRecherche = document.getElementById("entrer").value;

    if (fruits.includes(fruitRecherche)) {
        var i = fruits.indexOf(fruitRecherche);
        fruits.splice(i, 1);
        document.getElementById('resultat').innerHTML = "OK";
    } else {
        document.getElementById('resultat').innerHTML = "Indisponible";
    }

    // Met à jour la liste affichée
    Afficher();
}
