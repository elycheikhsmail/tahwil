import { Validators } from '@angular/forms';

/*
export const messageFormOptions = {
  id:[1,],
   year: [ 2020, ],
   month: [ 1,  ],
   day: [ 31, ],
   no: [ "irsal",], 
   destination: ["", Validators.required],
   tel: ["", [
     Validators.required,
     Validators.max(49999999),
     Validators.min(20000000)]],
   montant: ["", Validators.required],
   lemien: ["", Validators.required],
   lesien: ["", Validators.required],
     datetime : [null]
 }
*/


 export const messageFormOptions = {
  id:[1,],
   year: [ 2020, ],
   month: [ 1,  ],
   day: [ 31, ],
   no: [ "irsal",], 
   destination: ["kjhj", Validators.required],
   tel: ["22334455", [
     Validators.required,
     Validators.max(49999999),
     Validators.min(20000000)]],
   montant: ["5000", Validators.required],
   lemien: ["200", Validators.required],
   lesien: ["200", Validators.required],
     datetime : [null]
 }


