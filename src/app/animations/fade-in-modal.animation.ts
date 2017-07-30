import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInModalAnimation =
  trigger('fadeInModalAnimation', [
    state('in', style({opacity: 1})),
    state('out', style({opacity: 0})),
    transition('in => out', animate(300)),
    transition('out => in', animate(300)),
  ]);
