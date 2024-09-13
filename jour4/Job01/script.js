document.getElementById('button').addEventListener('click', function () {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération du fichier.');
            }
            return response.text();
        })
        .then(data => {
            // Créer un élément <p> et insérer le contenu du fichier
            const p = document.createElement('p');
            p.textContent = data;

            // Ajouter le paragraphe au div #content
            document.getElementById('content').appendChild(p);
        })
        .catch(error => {
            console.error('Il y a eu un problème avec l\'opération Fetch :', error);
        });
});

