import {combineReducers} from 'redux';

//Combine reducers from containers
import {fetchPhotosReducer} from '../containers/HomePage/reducer';
import {fetchUserDataReducer} from '../containers/UserPage/reducers';

export const reducers = combineReducers({
  fetchPhotos: fetchPhotosReducer,
  fetchUserData: fetchUserDataReducer
});