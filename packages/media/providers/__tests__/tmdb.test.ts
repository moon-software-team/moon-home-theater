/** Dependencies */
import { tmdbClient } from '../src';

describe('getConfiguration', () => {
  it('Should get the configuration', async () => {
    /** Send the request */
    const promise = tmdbClient
      .getConfiguration()
      .then((data) => {
        expect(data).toBeDefined();
        expect(data.images).toBeDefined();
        expect(data.change_keys).toBeDefined();
      })
      .catch((reason) => expect(reason).not.toBeDefined());

    /** Await for the promise completion */
    await promise;
  });
});

describe('searchMovie', () => {
  it('Should find the "Your Name." movie', async () => {
    /** Send the request */
    const promise = tmdbClient
      .searchMovie('Your Name.', { year: 2016 })
      .then((data) => {
        expect(data.page).toBe(1);
        expect(data.total_results).toBeGreaterThanOrEqual(0);
        expect(data.results[0]).toBeDefined();
        expect(data.results[0].id).toBe(372058);
      })
      .catch((reason) => expect(reason).not.toBeDefined());
    
    /** Await for the promise completion */
    await promise;
  });

  it('Shouldn\'t find any movie', async () => {
    /** Send the request */
    const promise = tmdbClient
      .searchMovie('THISMOVIEDOESNTEXISTS')
      .then((data) => {
        expect(data.page).toBe(1);
        expect(data.total_results).toBe(0);
      })
      .catch((reason) => expect(reason).not.toBeDefined());
    
    /** Await for the promise completion */
    await promise;
  })
});
