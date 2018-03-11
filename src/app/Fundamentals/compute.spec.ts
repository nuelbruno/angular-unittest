// tslint:disable-next-line:import-spacing
import { compute }  from './compute';

describe('compute', () => {

     it('should return 0 if negative number', () => {
       const result = compute(-1);
       expect(result).toBe(0);
     });
     it('should increment by 1 & postive value', () => {
       const result = compute(1);
       expect(result).toBe(2);
     });
});
