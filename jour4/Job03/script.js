document.getElementById('filter-button').addEventListener('click', function () {
    // Récupérer les valeurs du formulaire
    const idFilter = document.getElementById('pokemon-id').value.trim();
    const nameFilter = document.getElementById('pokemon-name').value.trim();
    const typeFilter = document.getElementById('pokemon-type').value;

    // Appel Fetch pour récupérer le fichier JSON
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            // Filtrer les Pokémon selon les critères
            const filteredPokemon = data.filter(pokemon => {
                const matchesId = idFilter === "" || pokemon.id == idFilter;
                const matchesName = nameFilter === "" || pokemon.name.toLowerCase().includes(nameFilter.toLowerCase());
                const matchesType = typeFilter === "" || pokemon.type === typeFilter;

                return matchesId && matchesName && matchesType;
            });

            // Afficher les résultats dans la liste
            const pokemonList = document.getElementById('pokemon-list');
            pokemonList.innerHTML = ""; // Effacer les anciens résultats

            if (filteredPokemon.length === 0) {
                const li = document.createElement('li');
                li.textContent = "Aucun Pokémon ne correspond à vos critères.";
                pokemonList.appendChild(li);
            } else {
                filteredPokemon.forEach(pokemon => {
                    const li = document.createElement('li');
                    li.textContent = `#${pokemon.id} - ${pokemon.name} (Type: ${pokemon.type})`;
                    pokemonList.appendChild(li);
                });
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données :", error);
        });
});

