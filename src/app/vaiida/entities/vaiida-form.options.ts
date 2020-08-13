import { Validators } from '@angular/forms';

export const vaiidaSearshFormOptions = {
  year: [ 2020, [Validators.required, Validators.max(2020), Validators.min(2020)]],
  month: [ 1, [Validators.required, Validators.max(12), Validators.min(1)]],
  day_start: [ 1, [Validators.required,  Validators.max(31),  Validators.min(1)]],
  day_end: [  1, [Validators.required,  Validators.max(31), Validators.min(1)]]

}

