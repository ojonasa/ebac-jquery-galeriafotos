// expandir o form.
$('#expandbox').click(function (e) {
    $('form').slideDown({
        start: function ()
        {
            $(this).css({ display: "flex" })
        }
});
})


// resetar o input e esconder o form.
$('form').on('reset', function (e) {
    e.preventDefault();
    $('form').slideUp();

})


// função do botão adc.
$('form').on('submit', function (e) { 
    e.preventDefault();

    //constates que pegara os dados dos inputs.
    const imagemurl = $('#url-imagem').val();
    const imagemtitulo = $('#titulo-imagem').val();

    // constante para apontar em que lugar vamos inserir o novo conteudo/imagem.
    const novoItem = $('<li style="display: none"></li>')

    $(`<img src="${imagemurl}" alt="${imagemtitulo}">`).appendTo(novoItem);
    $(`
        <div class="overlink-imagemlink">
            <a href="${imagemurl}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000, function () {
        $('form').slideUp();
    })
    
    
    $('#url-imagem').val('');
    $('#titulo-imagem').val('');

    $("#prev-imagem").attr({
        display: "block",
        src: "",
    });
    

});


$('#url-imagem').change(function (e) { 
    console.log('teste')

    //constates que pegara os dados dos inputs.
    const imagemurl = $('#url-imagem').val();

    $("#prev-imagem").attr({
        display: "block",
        src: `${imagemurl}`,
    });
    
    
});