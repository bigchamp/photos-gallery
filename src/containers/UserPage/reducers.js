import * as types from '../../constants/actionTypes';

export const fetchUserDataReducer = (state={data:[], isDataLoading: true}, action)=>{
  switch (action.type){
    case types.USER_DATA_START:
      return {
        isDataLoading: true
      };
    case types.USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isDataLoading: false
      };
    default:
      return state;
  }
};