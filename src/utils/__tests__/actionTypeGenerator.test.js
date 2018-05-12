import actionTypeGenerator from '../actionTypeGenerator';

describe('Action type generator', () => {
  describe('When passing in "RANDOM_TYPE"', () => {
    it('Should return the three action types', () => {
      const [type1, type2, type3] = actionTypeGenerator('RANDOM_TYPE');
      expect(type1).toEqual('RANDOM_TYPE');
      expect(type2).toEqual('RANDOM_TYPE_SUCCESS');
      expect(type3).toEqual('RANDOM_TYPE_FAILURE');
    });
  });
});
