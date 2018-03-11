import { FormBuilder } from '@angular/forms';
import { Formmcontrol } from "./form-control";


describe('formValidation', () => {

   let fromcontrol: Formmcontrol;

   beforeEach(() => {
     fromcontrol = new Formmcontrol(new FormBuilder);
   });

   it('from contains 2 elements', () => {
     expect(fromcontrol.fromGroup.contains('name')).toBeTruthy();
     expect(fromcontrol.fromGroup.contains('email')).toBeTruthy();
   });
   it('Name element is required in the form', () => {
     let nameElm = fromcontrol.fromGroup.get('name');
     nameElm.setValue('');
     expect(fromcontrol.fromGroup.valid).toBeFalsy();
   })
});
