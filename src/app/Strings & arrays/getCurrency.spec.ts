import { getCurrency } from "./getCurrency";


describe('getCurrency', () => {
   it('should return all currency list', () => {
      expect(getCurrency()).toContain('USD');
      expect(getCurrency()).toContain('AUS');
      expect(getCurrency()).toContain('CAD');
   });
});
