import * as types from '../../constants/actionTypes';
import {fetchUserDataApi} from '../../api';

function fetchUserDataStart() {
  return{
    type: types.USER_DATA_START
  }
}

function fetchUserDataSuccess(data) {
  return{
    type: types.USER_DATA_SUCCESS,
    payload: data
  }
}

function fetchUserDataFailure(err) {
  return{
    type: types.USER_DATA_FAILURE,
    payload: err,
    error: true
  }
}

export const fetchUserData = (id) => async dispatch =>{
  dispatch(fetchUserDataStart());
  try{
    const data = await fetchUserDataApi(id);
    // console.log(data);
    dispatch(fetchUserDataSuccess(data));
  }catch (err){
    dispatch(fetchUserDataFailure(err))
  }
};