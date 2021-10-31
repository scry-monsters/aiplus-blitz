import { combineReducers } from "redux"
import { featuresReducer } from "./slices/features.slice"
import { menuReducer } from "./slices/menu.slice"

export const rootReducer = combineReducers({
  features: featuresReducer,
  menu: menuReducer,
})
