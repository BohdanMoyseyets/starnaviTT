const CHOOSE_MODE = 'CHOOSE_MODE';
const HOVER_MODE = 'HOVER_MODE';

let initial_state = {
  mode: "",
  size: null,
  squares: [
    // { id: 1, hovered: false}
  ]

}
function createMatrix (arr, size) {
  arr = [];
  for (let i=0; i<size; i++){
    arr.push({id: i, hovered: false})
  }
  return arr;
} 

const squaresReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CHOOSE_MODE: {
      console.log(32);

      return {
        ...state,
        mode: action.mode,
        size: action.size,
        squares: [...createMatrix(state.squares, action.size)]
      };
    }
    case HOVER_MODE: {
      console.log(31);
      return {
        ...state,
        squares: state.squares.map( s => {
          if(s.id === action.id){
            return {...s, hovered: !s.hovered};
          }
          return s;
        })
      };
    }
    default:
      return state;
  }

}
export const modeCreator = (text, number) => ({ type: CHOOSE_MODE, mode: text, size: number });
export const hoverCreator = (id) => ({ type: HOVER_MODE, id: id });

export default squaresReducer;