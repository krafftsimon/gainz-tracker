import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideModalFormAnimation =
  trigger('slideModalFormAnimation', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    state('out-left', style({opacity: 0, transform: 'translateX(-50%)'})),
    state('out-right', style({opacity: 0, transform: 'translateX(50%)'})),
    transition('out-left => in', animate(100)),
    transition('out-right => in', animate(100)),
    transition('in => out-left', animate(100)),
    transition('in => out-right', animate(100)),
  ]);
