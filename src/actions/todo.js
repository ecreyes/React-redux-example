import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './index';

export const addTodoAction = (text) => {
    return {
        type: ADD_TODO,
        text
    };
}

export const completeTodoAction = (index) => {
    return {
        type: COMPLETE_TODO,
        index
    };
}

export const setVisibilityFilterAction = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}