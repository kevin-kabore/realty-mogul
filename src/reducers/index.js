
let defaultState = {
  headerData: [],
  contentA: '',
  contentB: '',
  displayA: true
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_PANEL':
      console.log('PANEL TOGGLED')
      return {
        ...state,
        displayA: !state.displayA
      };
    case 'PARSE_JSON':
      console.log('JSON PARSED')
      return {
        ...state,
        headerData: action.data.headerData,
        contentA: action.data.contentA,
        contentB: action.data.contentB
      };
    default:
      return state;
  }
};
 export default reducer;
