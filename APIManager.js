
class APIManager {
    constructor() {
        this.data = {}
    }

    getUserAndFriends(){
        $.ajax({
            method: 'GET',
            url: `https://randomuser.me/api/?results=7`,
            success: (response) => {
                const users = response.results.map(p => { return {firstName: p.name.first, lastName: p.name.last, city: p.location.city, state: p.location.state, photo: p.picture.medium}})
                this.data.mainUser = users[0]
                this.data.friends = users.splice(1, 6)
            },
            error: function (xhr, text, error) {
                console.log('error');
            }
        });     
    }

    getFavoriteQuote(){
        $.ajax({
            method: 'GET',
            url: `https://api.kanye.rest`,
            success: (response) => {
                this.data.quote = response.quote
            },
            error: function (xhr, text, error) {
                alert('error');
            }
        })
    }

    getRandomId = function() {
        const randomPosition = Math.floor(Math.random() * 80); 
        return randomPosition
    }

    getFavoritePokemon(){
        const id = this.getRandomId()
        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/type/10`,
            success: (response) => {
                this.data.pokemonName = response.pokemon[id].pokemon.name
                const pokemonUrl = response.pokemon[id].pokemon.url
                $.ajax({
                    method: 'GET',
                    url: pokemonUrl,
                    success: (response) => {
                        this.data.img = response.sprites.front_default
                    },
                    error: function (xhr, text, error) {
                        alert('error');
                    }
                })
            },
            error: function (xhr, text, error) {
                alert('error');
            }
        })
    }

    getAboutMe(){
        $.ajax({
            method: 'GET',
            url: `https://baconipsum.com/api/?type=meat-and-filler`,
            success: (response) => {
                this.data.text = response[Math.floor(Math.random() * 5)]
            },
            error: function (xhr, text, error) {
                alert('error');
            }
        })
    }
}
    


