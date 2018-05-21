import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInModalContentAnimation =
  trigger('slideInModalContentAnimation', [
    state('in', style({opacity: '1', transform: 'translateY(0)'})),
    state('out, void', style({opacity: '0', transform: 'translateY(-70%)'})),
    transition('out => in', animate('200ms ease-out')),
    transition('in => out', animate('200ms ease-out')),
  ]);
