function shapeReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'toCircle':
      newState = state === 50 ? 5 : 50;
      break;
    default:
      newState = state;
  }
  return newState;
}

export default shapeReducer;