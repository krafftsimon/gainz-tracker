import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInErrorAnimation =
  trigger('fadeInErrorAnimation', [
    transition(':enter', [
      style({ width: '0'}),
      animate(600, style({ width: '380px'})),
    ])
  ])
