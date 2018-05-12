// @flow
import 'whatwg-fetch';

const get = (url: string): Promise<*> => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

export default {
  get,
};
