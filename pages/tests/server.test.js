import { expect, test } from '@jest/globals';
import request from "supertest";
import app from '../../app.js';
// request = fejka en httprequest. pratar direkt med "express" eller liknande.
test('Encanto page shows title of movie', async () => {
    const response = await request(app).get('/moviepage/2')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200)



    expect(response.text).toMatch('girl')

})


