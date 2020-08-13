import { Validators } from '@angular/forms';

export const loginFormOptions = {  
  name: ["", [Validators.required ]],
  password: ["",[Validators.required ]],
  
}
