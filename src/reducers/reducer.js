// TODO import actions

const initialState = {
  firstColor: '#ffffff',
  lastColor: '#000000',
  direction: '90deg',
  nbColors: 0,
};

function reducer(state = initialState, action = {}) {
  console.log(`reducer: ${{ state, action }}`);
  // TODO switch cases of action types
}

export default reducer;
