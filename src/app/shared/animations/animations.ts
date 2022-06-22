import {animate, state, style, transition, trigger} from "@angular/animations";

export const animationsClick =
  trigger('fadeInOut', [
  state('start', style([
    {width: '0%'}
  ])),
  state('end', style([
    {width: '100%'}
  ])),
  transition('* => end', [animate('1000ms ease-out')]),
  transition('end => start', [animate('1000ms ease-out')])
])
