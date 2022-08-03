const CHOOSE_MODE = 'CHOOSE_MODE';

let initial_state = {
  mode: "",
  size: null

}

const formReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CHOOSE_MODE: {
      return {
        ...state,
        mode: action.mode,
        size: action.size
      };
    }
    default:
      return state;
  }

}
export const ModeCreator = (text, number) => ({ type: CHOOSE_MODE, mode: text, size: number });

export default formReducer;