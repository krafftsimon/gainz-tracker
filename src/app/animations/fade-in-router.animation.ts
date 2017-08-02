import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInRouterAnimation =
  trigger('fadeInRouterAnimation', [
    transition(':enter', [
      style({opacity: 0, transform: 'translate3d(0, -80%, 0)'}),
      animate(250, style({opacity: 1 , transform: 'translate3d(0, 0, 0)'}))
    ])
  ]);
