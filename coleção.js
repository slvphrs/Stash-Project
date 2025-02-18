$(document).ready(function() {
    // Inicializa o Isotope
    var $grid = $('#products').isotope({
        itemSelector: '.col-md-6',
        layoutMode: 'fitRows'
    });

    // Filtros
    $('#filter-all').on('click', function() {
        $grid.isotope({ filter: '*' });
    });
    $('#filter-best').on('click', function() {
        $grid.isotope({ filter: '.best' });
    });
    $('#filter-new').on('click', function() {
        $grid.isotope({ filter: '.new' });
    });
    $('#filter-sale').on('click', function() {
        $grid.isotope({ filter: '.sale' });
    });

    // Função de pesquisa
    $('#search').on('input', function() {
        var searchValue = $(this).val().toLowerCase();

        // Filtrar itens com base no nome do produto
        $grid.isotope({
            filter: function() {
                var productName = $(this).find('p').text().toLowerCase();
                return productName.includes(searchValue);
            }
        });
    });
});
