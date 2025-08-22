import { INCREMENT_HAPPY, INCREMENT_SAD, IncrementHappyAction, IncrementSadAction } from './actionTypes';

export const incrementHappy = (): IncrementHappyAction => ({
  type: INCREMENT_HAPPY,
});

export const incrementSad = (): IncrementSadAction => ({
  type: INCREMENT_SAD,
});