import { greet } from "./string_array";


describe('greet', () => {
   it('welcome with name will be output', () => {
     expect(greet('nuel')).toContain('nuel');
   });
});
