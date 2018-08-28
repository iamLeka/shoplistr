import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const redgreenanimation = trigger('increaseTrigger', [
  state('normal', style({})),
  state('green', style({})),
  state('red', style({})),
  transition('normal => green', [
    animate('200ms', keyframes([
      style({ offset: 0 }),
      style({ backgroundColor: '#6FAB42', color: '#fff', offset: 0.1 }),
      style({ offset: 1 })
    ]))]),
  transition('normal => red', [
    animate('200ms', keyframes([
      style({ offset: 0 }),
      style({ backgroundColor: '#BF2727', color: '#fff', offset: 0.1 }),
      style({ offset: 1 })
    ]))])
]);

export const openclose = trigger('slideOpen', [
  state('closed', style({ height: 0, opacity: 0, overflow: 'hidden' })),
  state('open', style({})),
  transition('closed <=> open', animate('150ms'))
]);
