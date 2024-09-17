$(docummet).ready(function(){
    $('#btnBuscar').click(function(e){
        e.preventDefault();
        let nombrePokemon = $('#canpoBuscar').val().toLowerCase();
        if(nombrePokemon){
            buscarPokemon(nombrePokemon);
        }
    });
    $('#btnLinpiar').click(function(e){
        e.preventDefault();
        $('#pokemon-container').empty();
        $('campo-Buscar').val('');
    });
    function buscarPokemon(pokemon){
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
            dataType: "Json",
            success: function(data){
                renderPokeData(data)
            }
        });
    }
})
