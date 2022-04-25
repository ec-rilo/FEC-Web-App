// Assets
import getSingleProduct from './apiFunctions';

describe('custom api tests', () => {

  it('should return a single product', async () => {
    const response = await getSingleProduct(1);
    await expect(response.status).toBe(200);
  })

  it('should return a array of length 6 objects', async () => {
    const response = await getSingleProduct(1);
    await expect(response.data.results.length).toBe(6);
  });
});