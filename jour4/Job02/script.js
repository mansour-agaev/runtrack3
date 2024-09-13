// Fonction jsonValueKey
function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const jsonObj = JSON.parse(jsonString);

        // Vérifier si la clé existe dans l'objet
        if (jsonObj.hasOwnProperty(key)) {
            return jsonObj[key];
        } else {
            return "Clé introuvable dans le JSON.";
        }
    } catch (error) {
        return "Erreur : JSON invalide.";
    }
}

// Ajouter un écouteur d'événement pour le bouton
document.getElementById('search').addEventListener('click', function () {
    const key = document.getElementById('key').value; // Récupérer la clé entrée par l'utilisateur
    const jsonString = `
    {
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }`; // JSON formaté en chaîne

    // Appeler la fonction jsonValueKey et afficher le résultat
    const result = jsonValueKey(jsonString, key);
    document.getElementById('result').textContent = `Résultat : ${result}`;
});



