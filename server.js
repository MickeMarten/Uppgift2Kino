import express from 'express';
import { engine } from 'express-handlebars'
import fs from 'fs/promises';
import fetch from 'node-fetch';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './pages');


const Menu = [
    {
        label: 'Filmer',
        link: '/'
    },
    {
        label: 'Om oss',
        link: '/AboutUs'
    },
    {
        label: 'biljetter',
        link: '/movies'
    },

    {
        logo: '/static/assets/Logo.png',
        link: '/'
    }

]



async function getMovies() {
    try {
        const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/movies')
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('I am Error', error)
        return null;
    }

}



async function renderMainPages(response, page) {
    const moviesData = await getMovies();
    response.render(page, {
        menuItems: Menu,
        moviesData: moviesData,


    });
}


app.get('/', async (request, response) => {
    renderMainPages(response, 'index')

})

app.get('/aboutus', async (request, response) => {
    renderMainPages(response, 'aboutus')
})
app.get('/movies', async (request, response) => {
    renderMainPages(response, 'movies')
});


app.get('/moviepage/:movieID', async (request, response) => {
    // renderMoviePages(response, 'moviepage', 'mainmoviepage');

    const movieID = parseInt(request.params.movieID);
    const moviesData = await getMovies()

    const selectedMovie = moviesData.data.find(movie => movie.id === movieID);

    if (selectedMovie) {
        response.render('moviepage', {
            selectedMovie: selectedMovie,
            layout: 'mainmoviepage',
        });
    } else {
        response.status(404).send('Film hittades inte');
    }

})



app.use('/static', express.static('./static'));
const port = 5080;
app.listen(port, () => {
    console.log(`Gate open at: ${port}`)

})