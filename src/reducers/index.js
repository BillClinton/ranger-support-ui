import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import uiReducer from "./uiReducer";
import clientReducer from "./clientReducer";
import jobReducer from "./jobReducer";
import optionsReducer from "./optionsReducer";

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  clients: clientReducer,
  jobs: jobReducer,
  options: optionsReducer
});
