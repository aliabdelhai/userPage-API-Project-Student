

class Renderer {
    constructor(data)
    {
        this.data = data
    }

    renderData = function () {
        const ourData = this.data
        $('.user-container').empty()
        var mainSource = $('#store-template-mainUser').html();
        var mainTemplate = Handlebars.compile(mainSource);
        const mainNewHTML = mainTemplate(ourData);
        $('.user-container').append(mainNewHTML);

        $('.friends-container').empty()
        var friendsSource = $('#store-template-friends').html();
        var friendsTemplate = Handlebars.compile(friendsSource);
        const friendsNewHTML = friendsTemplate(ourData);
        $('.friends-container').append(friendsNewHTML);

        $('.quote-container').empty()
        var quoteSource = $('#store-template-quote').html();
        var quoteTemplate = Handlebars.compile(quoteSource);
        const quoteNewHTML = quoteTemplate(ourData);
        $('.quote-container').append(quoteNewHTML);

        $('.pokemon-container').empty()
        var pokemonImageSource = $('#store-template-pokemonImage').html();
        var pokemonImageTemplate = Handlebars.compile(pokemonImageSource);
        const pokemonImageNewHTML = pokemonImageTemplate(ourData);
        $('.pokemon-container').append(pokemonImageNewHTML);

        var pokemonNameSource = $('#store-template-pokemonName').html();
        var pokemonNameTemplate = Handlebars.compile(pokemonNameSource);
        const pokemonNameNewHTML = pokemonNameTemplate(ourData);
        $('.pokemon-container').append(pokemonNameNewHTML);

        $('.meat-container').empty()
        var aboutMeSource = $('#store-template-aboutMe').html();
        var aboutMeTemplate = Handlebars.compile(aboutMeSource);
        const aboutMeNewHTML = aboutMeTemplate(ourData);
        $('.meat-container').append(aboutMeNewHTML);
        
    }
}