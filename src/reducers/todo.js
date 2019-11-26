import { SHOW_ALL, SET_VISIBILITY_FILTER,ADD_TODO,COMPLETE_TODO } from "../actions";

export const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};


export const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,{text:action.text,complete:false}];
        case COMPLETE_TODO:
            return state.map((todo,index)=>{
                if(index===action.index){
                    return {text:todo.text,complete:true};
                }
                return todo;
            });
        default:
            return state;
    }
}