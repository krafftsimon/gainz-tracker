import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInErrorAnimation =
  trigger('fadeInErrorAnimation', [
    transition(':enter', [
      style({ opacity: '0'}),
      animate(500, style({ opacity: '1'})),
    ])
  ])
