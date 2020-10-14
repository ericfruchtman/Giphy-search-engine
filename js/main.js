$(function (){
    let APIKEY = "0UHE4Z54XIX2WL3myjyzUfq16JbzWYLZ";
    $('#submit').click(function ( event ){
        event.preventDefault();
        $('#output').empty();
        let userInput = $('#search').val();
        let urlSent = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${userInput}&limit=15`;
        if (userInput === '') {
            $('.error').text('You forgot to type something in the box');
            return
        }
        $.get( urlSent )
            .done(function( result ) {
                for(let thing of result.data) {
                    let item = `<img class="col-sm-6 col-md-4" src="${thing.images.downsized_large.url}" alt="${thing.title}"/>`;
                    $('#output').append(item);
                }
            });
    });
});
