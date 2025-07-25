import request from 'supertest';
import app from '../http/app';

describe('Teste de apresentação', () => {
  it('deve responder com status 200 na rota raiz', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
