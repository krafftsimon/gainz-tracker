import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideModalFormAnimation =
  trigger('slideModalFormAnimation', [
    state('in', style({opacity: 1})),
    state('out', style({opacity: 0})),
    transition('out => in', animate(600)),
  ]);
