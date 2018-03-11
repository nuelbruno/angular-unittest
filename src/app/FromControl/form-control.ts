import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class Formmcontrol {

   fromGroup: FormGroup;

   constructor(fb: FormBuilder) {
       this.fromGroup = fb.group({
         name: ['', Validators.required],
         email: [''],
       });
   }

}
