import {combineReducers, createStore} from "redux";
import announcementSecondReducer from "./announcementSecond-reducer";
import announcementFirstReducer from "./announcementFirst-reducer";

let reducers = combineReducers({
    announcementPage: announcementSecondReducer,
    annPage:announcementFirstReducer,

});
const store = createStore(reducers);

export default store;
