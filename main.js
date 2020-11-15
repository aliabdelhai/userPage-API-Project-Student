
const apiManager = new APIManager()

$('#load').on('click', function(){
    apiManager.getUserAndFriends()
    apiManager.getFavoriteQuote()
    apiManager.getFavoritePokemon()
    apiManager.getAboutMe()
})

$('#display').on('click', function(){
    const render = new Renderer(apiManager.data)
    render.renderData()
})

