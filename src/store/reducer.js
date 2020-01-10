const initialState = {
  combination: 9486,
  value: '',
  displayColor: 'general',
};

const reducer = (state = initialState, action) => {
  if(action.type === 'ADD_NUMBER' && state.value.length < 4){
    return {...state, value: state.value + action.number}
  }

  if(action.type === 'CONFIRM_CODE' && state.value.length === 4){
    if(state.value === String(state.combination)){
      return {...state, value: 'ACCESS GRANTED', displayColor: 'success'}
    }else{
      return {...state, value: 'ACCESS DENIED', displayColor: 'failure'}
    }
  }
  if(action.type === 'DELETE_LAST'){
    if(state.value === 'ACCESS DENIED' || state.value === 'ACCESS GRANTED'){
      return {...state, value: '', displayColor: 'general'}
    }else{
      let newValue = state.value;
      const res = newValue.slice(0, newValue.length - 1);

      return{...state, value: res};
    }
  }
  return state;
};

export default reducer;