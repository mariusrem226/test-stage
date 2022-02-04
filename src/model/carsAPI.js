require('./listCars.js');
function getCars(){
    return listCars;
}
function getPieces() {
    var listePieces = [];

    listCars.forEach(car => {

        addToList(listePieces, car.technique.frein, car.nom_modele);
        addToList(listePieces, car.technique.moteur, car.nom_modele);
        addToList(listePieces, car.technique.turbo, car.nom_modele);
        addToList(listePieces, car.technique.echappement, car.nom_modele);


    });
    console.log(listePieces);
    return listePieces;
}
function addToList(liste, piece, voiture) {
    console.log(voiture);
    var pieceInList = liste.find(element => element.id == piece.id)//on cherche la piece dans la liste de pieces
    if (typeof pieceInList === "undefined") { //si la piece n'existe pas encore dans la liste on l'ajoute
        piece.listeVoitures = [voiture] //on initialise la liste de voitures équipées
        liste.push(piece);//on ajoute la piece dans la liste
    }
    else {
        pieceInList.listeVoitures = [...pieceInList.listeVoitures, voiture];//on ajoute le nom de la a voiture a la liste de voitures équipées

    }
}

export {
    getPieces,getCars,
}