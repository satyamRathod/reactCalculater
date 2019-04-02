import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import logger from "redux-logger";

export default createStore(reducer, applyMiddleware(thunk, logger));
