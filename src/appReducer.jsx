import { createStore,combineReducers } from "redux";

function count(state = {count:0} ,action){
    switch(action.type){
        case"increment":
        return{count:state.count+1}
        case"decrement":
        return{count:state.count-1}
      default:
  return state;
    }


}
function theme(state = {background:"white"},action){
    switch(action.type){
case"white":
return{background:"white"}
case"black":
return{background:"black"}
default:
    return state
    }
}



const appReducer  = combineReducers({
counter:count,
theme,
})

export const store = createStore(appReducer);
