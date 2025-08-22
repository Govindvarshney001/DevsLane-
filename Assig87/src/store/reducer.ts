import { INCREMENT_HAPPY, INCREMENT_SAD, EmotionActionTypes } from './actionTypes';

export interface EmotionState {
  happy: number;
  sad: number;
}

const initialState: EmotionState = {
  happy: 0,
  sad: 0,
};

const emotionReducer = (state = initialState, action: EmotionActionTypes): EmotionState => {
  switch (action.type) {
    case INCREMENT_HAPPY:
      return {
        ...state,
        happy: state.happy + 1,
      };
    case INCREMENT_SAD:
      return {
        ...state,
        sad: state.sad + 1,
      };
    default:
      return state;
  }
};

export default emotionReducer;