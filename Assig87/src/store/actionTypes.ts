export const INCREMENT_HAPPY = 'INCREMENT_HAPPY';
export const INCREMENT_SAD = 'INCREMENT_SAD';

export interface IncrementHappyAction {
  type: typeof INCREMENT_HAPPY;
}

export interface IncrementSadAction {
  type: typeof INCREMENT_SAD;
}

export type EmotionActionTypes = IncrementHappyAction | IncrementSadAction;