import 'whatwg-fetch';
import client from '../client';

describe('Client', async () => {
  describe('When executing a GET request', async () => {
    it('Should call the right URL and resolve the expected result', async () => {

      fetch = jest.fn();
      fetch.mockReturnValue(new Promise(resolve => resolve({ data: 'Some random data'})));
      const result = await client.get('https://randomurl.com/url');
      expect(fetch)
        .toHaveBeenCalledWith('https://randomurl.com/url', {'headers': {'Accept': 'application/json'}, 'method': 'GET'});
      expect(result.data).toEqual('Some random data');
    });
  });
});
