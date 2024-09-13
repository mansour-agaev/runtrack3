<!DOCTYPE html>
<html lang="fr">

<head>
    <link rel="stylesheet" href="pokemon.json">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrer Pokémon</title>
    <script defer src="script.js"></script>
</head>

<body>
    <h1>Filtrer les Pokémon</h1>

    <!-- Formulaire de filtre -->
    <form id="filter-form">
        <label for="pokemon-id">ID :</label>
        <input type="text" id="pokemon-id" name="pokemon-id" placeholder="Entrez l'ID"><br><br>

        <label for="pokemon-name">Nom :</label>
        <input type="text" id="pokemon-name" name="pokemon-name" placeholder="Entrez le nom"><br><br>

        <label for="pokemon-type">Type :</label>
        <select id="pokemon-type" name="pokemon-type">
            <option value="">--Sélectionnez un type--</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Electric">Electric</option>
        </select><br><br>

        <input type="button" id="filter-button" value="Filtrer">
    </form>

    <h2>Résultats du Filtre :</h2>
    <ul id="pokemon-list"></ul>
</body>

</html>