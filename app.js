import express from 'express';
import { engine } from 'express-handlebars'
import fs from 'fs/promises';
import fetch from 'node-fetch';

export const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './pages');

const header = [
    {
        label: 'Biljetter',
        link: '/'
    },
    {
        label: 'Om oss',
        link: '/AboutUs'
    },
    {
        label: 'Filmer',
        link: '/movies'
    },

    {
        logo: '/static/assets/Logo.png',
        link: '/'
    }

]

const footer = [
    {
        label: 'Om oss',
        link: 'aboutus',
    },
    {
        label: ' Plats',
        link: '/'
    },

    {
        label: 'Facebook',
        link: '/'
    },
    {
        label: 'Twitter',
        link: '/'
    },
    {
        label: 'Instagram',
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



async function renderMainPages(request, response, page) {
    const moviesData = await getMovies();
    const currentRoute = request.path;
    const indexroute = '/index'
    const aboutUsRoute = '/aboutus'
    const moviesRoute = '/movies';

    if (currentRoute === moviesRoute) {
        response.render(page, {
            headerItems: header,
            footer: footer,
            moviesData: moviesData,
        });
    }
    else if (currentRoute === indexroute || aboutUsRoute) {
        response.render(page, {
            headerItems: header,
            footer: footer
        })
    }
    else {
        response.status(404).send('404 sidan hittades inte')
    }
}


app.get('/', async (request, response) => {
    renderMainPages(request, response, 'index')

})

app.get('/aboutus', async (request, response) => {
    renderMainPages(request, response, 'aboutus')
})

app.get('/movies', async (request, response) => {
    renderMainPages(request, response, 'movies')
});


app.get('/moviepage/:movieID', async (request, response) => {

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

export default app;
