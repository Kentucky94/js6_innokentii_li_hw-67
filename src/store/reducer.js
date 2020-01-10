const initialState = {
  combination: 9486,
  value: '',
  displayColor: 'general',
};

const reducer = (state = initialState, action) => {
  if(action.type === 'ADD_ONE' && state.value.length < 4){
    return {...state, value: state.value + 1}
  }
  if(action.type === 'ADD_TWO' && state.value.length < 4){
    return {...state, value: state.value + 2}
  }
  if(action.type === 'ADD_THREE' && state.value.length < 4){
    return {...state, value: state.value + 3}
  }
  if(action.type === 'ADD_FOUR' && state.value.length < 4){
    return {...state, value: state.value + 4}
  }
  if(action.type === 'ADD_FIVE' && state.value.length < 4){
    return {...state, value: state.value + 5}
  }
  if(action.type === 'ADD_SIX' && state.value.length < 4){
    return {...state, value: state.value + 6}
  }
  if(action.type === 'ADD_SEVEN' && state.value.length < 4){
    return {...state, value: state.value + 7}
  }
  if(action.type === 'ADD_EIGHT' && state.value.length < 4){
    return {...state, value: state.value + 8}
  }
  if(action.type === 'ADD_NINE' && state.value.length < 4){
    return {...state, value: state.value + 9}
  }
  if(action.type === 'ADD_ZERO' && state.value.length < 4){
    return {...state, value: state.value + 0}
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