import * as types from '../../constants/actionTypes';


export const fetchPhotosReducer = (state = {list: [], isLoading : true}, action) =>{
  switch (action.type){
    case types.DATA_FETCH_START:
      console.log("data fetching started");
      return{
        isLoading: true
      };
    case types.DATA_FETCH_SUCCESS:
      console.log("data fetching success");
      return{
        ...state,
        list: action.payload.data,
        isLoading: false
      };
    default:
      return state;
  }
};