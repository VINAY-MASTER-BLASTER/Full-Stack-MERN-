const reducer = (state,action) => {
    switch(action.type){
        // case "ADD" : return {count: state.count + 1}
        case "ADD" : return {...state, count : state.count + 1}
        case "SUB" : return {...state, count : state.count - 1}
        default : return state
    }
        
}
export default reducer
