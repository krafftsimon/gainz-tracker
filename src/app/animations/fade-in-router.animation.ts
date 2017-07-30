import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInRouterAnimation =
  trigger('fadeInRouterAnimation', [
    state('*', style({opacity: 1})),
    transition('void => *', [
      style({opacity: 0}),
      animate(400)
    ])
  ]);
