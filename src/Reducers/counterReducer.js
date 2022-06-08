function counterReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'plus':
      newState = state + 1;
      break;
    case 'minus':
      newState = state - 3;
      break;
    default:
      newState = state;
  }
  return newState;
}

export default counterReducer;