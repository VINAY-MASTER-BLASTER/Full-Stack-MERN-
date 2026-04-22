const initialState = []

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD" :{
            return [...state,{id: Date.now(), text: action.payload}]
        }
        case "DEL" : {
            let filtertodo = state.filter((ele)=>{
                return ele.id !== action.payload
            })
            return filtertodo
        }
        case "EDIT" : {
            let editid = state.map((ele)=>{
                return ele.id == action.payload.id ? {...ele,text:action.payload.todo} : ele
            })
            return editid
        }
        default:
            return  state
    }

}
export {initialState,reducer}