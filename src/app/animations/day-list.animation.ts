import { trigger, state, animate, transition, style } from '@angular/animations';

export const dayListAnimation =
  trigger('dayListAnimation', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('.5s ease-out', style({ opacity: '1' })),
    ]),
  ])
