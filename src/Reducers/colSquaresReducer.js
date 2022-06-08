function colSquaresReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'add_red':
      newState = [...state, 'red'];
      break;
    case 'add_blue':
      newState = [...state, 'blue'];
      break;
    case 'reset':
      newState = [];
      break;
    default:
      newState = state;
  }
  return newState;
}

export default colSquaresReducer;