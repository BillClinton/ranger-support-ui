import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import clientReducer from "./clientReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  clients: clientReducer
});
