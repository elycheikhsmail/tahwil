import { Validators } from '@angular/forms';

export const caisseFormOptions = {
  id: [1,],
  year: [2020,  ],
  month: [1, ],
  day: [1, ],
  montant: ["", Validators.required],
  no: ["d",],
  commentaire: ["",],
  datetime: [null]
}

export const caisseSearshFormOptions = {
  year: [2020,],
  month: [7,],
  day: [ 1, ],
  datetime: [null]
}


export const SearchMonthFormOptions = {
  year: [2020,  ],
  month: [7,], 
  datetime: [null]
}

