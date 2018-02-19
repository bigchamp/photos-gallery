import * as types from '../../constants/actionTypes';
import {fetchPhotos} from '../../api';

function fetchPhotosStart() {
  return{
    type: types.DATA_FETCH_START
  }
}

function fetchDataSuccess(data) {
  return{
    type: types.DATA_FETCH_SUCCESS,
    payload: data
  }
}

function fetchDataFailure(err) {
  return{
    type: types.DATA_FETCH_FAILURE,
    payload: err,
    error: true
  }
}

export const fetchData = (per_page, searchText) => async dispatch =>{
  dispatch(fetchPhotosStart());
  try{
    const data = await fetchPhotos(per_page, searchText);
    // console.log(data);
    dispatch(fetchDataSuccess(data));
  }catch (err){
    dispatch(fetchDataFailure(err))
  }
};