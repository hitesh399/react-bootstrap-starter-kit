import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { sidebarReducer } from './sidebar.reducer';
import { authReducer } from './auth-reducer';

export const rootReducer = combineReducers({
  form: formReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
});
