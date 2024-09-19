$(document).ready(function () {
    // Rebooter le Monde avec une citation aléatoire
    const citations = [
        "I've seen things you people wouldn't believe...",
        "All those moments will be lost in time, like tears in rain.",
        "Time to die."
    ];

    $('#rebooter').on('click', function () {
        const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
        $('.jumbotron .lead').text(citationAleatoire);
    });

    // Pagination : Modifier le contenu du jumbotron
    $('.pagination .page-link').on('click', function () {
        const contenu = $(this).data('content');
        $('.jumbotron .lead').text(contenu);
    });

    // Liste groupée : Activer l'élément cliqué
    $('.list-group-item').on('click', function () {
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });

    // Progress Bar
    $('#progress-plus').on('click', function () {
        let currentValue = $('#progress-bar').attr('aria-valuenow');
        currentValue = Math.min(100, parseInt(currentValue) + 10);
        $('#progress-bar').css('width', currentValue + '%').attr('aria-valuenow', currentValue);
    });

    $('#progress-minus').on('click', function () {
        let currentValue = $('#progress-bar').attr('aria-valuenow');
        currentValue = Math.max(0, parseInt(currentValue) - 10);
        $('#progress-bar').css('width', currentValue + '%').attr('aria-valuenow', currentValue);
    });

    // Soumission du formulaire : Valider et changer la couleur du spinner
    $('#formulaire').on('submit', function (e) {
        e.preventDefault();
        const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('.jumbotron .spinner-border').css('color', randomColor);
    });
});



