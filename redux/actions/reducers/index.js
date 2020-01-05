import {combineReducers} from "redux";

import Fetchlist from "./fetchlist";
import Fetchuser from "./fetchuser";


const reducers = combineReducers({Postlist: Fetchlist,postuser:Fetchuser});

export default reducers;