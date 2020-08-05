import {combineReducers} from 'redux';
import dashbaordReducer from './reducers/dashboardReducer';
const appReducer = combineReducers({
  dashbaordReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'error') {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
