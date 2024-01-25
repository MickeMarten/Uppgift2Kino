import { expect, test } from '@jest/globals';
import request from "supertest";
import app from '../../app.js';
// request = fejka en httprequest. pratar direkt med "express" eller liknande.

test('Response.status(code) is correct on mainmoviepage', async () => {
    const response = await request(app).get('/moviepage/Ejnåbarsida').expect(404)

    expect(response.text).toBe('Film hittades inte')
})

test('Isle of dogs page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/1')

    expect(response.text).toMatch('Isle of dogs')

})

test('Encanto page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/2')

    expect(response.text).toMatch('Encanto')

})

test('The Shawshank Redemption page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/3')

    expect(response.text).toMatch('The Shawshank Redemption')

})

test('Min granne Totoro page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/4')

    expect(response.text).toMatch('Min granne Totoro')

})

test('The Muppets page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/5')

    expect(response.text).toMatch('The Muppets')

})

test('Forrest Gump page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/6')

    expect(response.text).toMatch('Forrest Gump')

})

test('Pulp fiction page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/8')

    expect(response.text).toMatch('Pulp Fiction')

})





