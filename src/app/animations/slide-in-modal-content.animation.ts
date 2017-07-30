import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInModalContentAnimation =
  trigger('slideInModalContentAnimation', [
    state('in', style({transform: 'translate3d(0, 0, 0)'})),
    state('out', style({transform: 'translate3d(0, -100%, 0)'})),
    transition('out => in', animate(300)),
  ]);
