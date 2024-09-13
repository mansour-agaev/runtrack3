<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche Valeur JSON</title>
    <script defer src="script.js"></script>
</head>

<body>
    <h1>Recherche d'une valeur dans un objet JSON</h1>

    <p>Entrez une clé pour trouver sa valeur dans le JSON suivant :</p>

    <pre id="json">
    {
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }
    </pre>

    <label for="key">Clé :</label>
    <input type="text" id="key" placeholder="Ex: city">

    <button id="search">Rechercher</button>

    <p id="result"></p>
</body>

</html>