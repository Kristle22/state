function squaresReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'add':
      newState = [...state, action.payload]
      break;
    default:
      newState = state;
  }
  return newState;
}

export default squaresReducer;