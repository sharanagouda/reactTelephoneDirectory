export default (state={}, action)=>{
    switch(action.type){
        case "ADD_BOOK":
        return  "java book";
        

        default:
        return state;
    }
}