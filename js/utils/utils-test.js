import * as Utils from 'utils';

describe('Utils', function() {
  describe('uuid', function() {
    it('should be 36 characters long',function() {
      const result = Utils.uuid();
      expect(result.length).toBe(36);
    });
  });
});
