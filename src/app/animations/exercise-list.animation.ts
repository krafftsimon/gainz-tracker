import { trigger, state, animate, transition, style } from '@angular/animations';

export const exerciseListAnimation =
  trigger('exerciseListAnimation', [
    transition(':enter', [
      style({ opacity: '0', transform: 'translate3d(-50%, 0, 0)'}),
      animate('0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: '1', transform: 'translate3d(0, 0, 0)'})),
    ]),
    transition(':leave', [
      style({ opacity: '1', transform: 'translate3d(0, 0, 0)'}),
      animate(150, style({ opacity: '0', transform: 'translate3d(50%, 0, 0)'})),
    ]),
  ])
