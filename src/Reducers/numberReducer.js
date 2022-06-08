function numberReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'randomNumber':
      newState = action.payload;
      break;
    default:
      newState = state;
  }
  return newState
}

export default numberReducer;