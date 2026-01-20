import request from 'supertest';
import app from '../../app'; // Adjust import based on how app is exported

describe('GET /healthz', () => {
  it('returns 200 OK with status JSON', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
