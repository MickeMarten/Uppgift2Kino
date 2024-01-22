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
})

app.get('/moviepage', async (request, respons) => {
    respons.send('Hello! Shit goes here')

})

app.use('/static', express.static('./static'));

app.listen(3000, () => {
    console.log('Deploying at 3000')

})