import { trigger, state, animate, transition, style } from '@angular/animations';

export const dropdownMenuAnimation =
  trigger('dropdownMenuAnimation', [
    transition(':enter', [
      style({ height: '0'}),
      animate(300, style({ height: '*'})),
    ]),
    transition(':leave', [
      style({ height: '*'}),
      animate(300, style({ height: '0'})),
    ]),
  ])
