import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETE, SHOW_NOT_COMPLETE } from '../actions/index';
import { addTodoAction, completeTodoAction, setVisibilityFilterAction } from '../actions/todo';
import { visibilityFilter, todos } from '../reducers/todo';


describe('TODO ACTIONS TEST', () => {
    it('ADD_TODO', () => {
        const res = { type: ADD_TODO, text: "Esta es una tarea" };
        expect(addTodoAction("Esta es una tarea")).toEqual(res);
    });

    it('COMPLETE_TODO', () => {
        const res = { type: COMPLETE_TODO, index: 2 };
        expect(completeTodoAction(2)).toEqual(res);
    });

    it('SHOW_ALL', () => {
        const res = { type: SET_VISIBILITY_FILTER, filter: SHOW_ALL };
        expect(setVisibilityFilterAction(SHOW_ALL)).toEqual(res);
    });

    it('SHOW_COMPLETE', () => {
        const res = { type: SET_VISIBILITY_FILTER, filter: SHOW_COMPLETE };
        expect(setVisibilityFilterAction(SHOW_COMPLETE)).toEqual(res);
    });

    it('SHOW_NOT_COMPLETE', () => {
        const res = { type: SET_VISIBILITY_FILTER, filter: SHOW_NOT_COMPLETE };
        expect(setVisibilityFilterAction(SHOW_NOT_COMPLETE)).toEqual(res);
    });

});


describe('TODO REDUCERS TEST', () => {
    it('visibilityFilter initial state', () => {
        const nextState = SHOW_ALL;
        expect(visibilityFilter(undefined, {})).toEqual(nextState);
    });

    it('visibilityFilter SHOW_ALL', () => {
        const state = SHOW_ALL;
        const action = setVisibilityFilterAction(SHOW_ALL);
        const nextState = SHOW_ALL;
        expect(visibilityFilter(state, action)).toEqual(nextState);
    });

    it('visibilityFilter SHOW_COMPLETE', () => {
        const state = SHOW_ALL;
        const action = setVisibilityFilterAction(SHOW_COMPLETE);
        const nextState = SHOW_COMPLETE;
        expect(visibilityFilter(state, action)).toEqual(nextState);
    });

    it('visibilityFilter SHOW_NOT_COMPLETE', () => {
        const state = SHOW_ALL;
        const action = setVisibilityFilterAction(SHOW_NOT_COMPLETE);
        const nextState = SHOW_NOT_COMPLETE;
        expect(visibilityFilter(state, action)).toEqual(nextState);
    });

    it('visibilityFilter action not defined', () => {
        const state = SHOW_ALL;
        const action = {};
        const nextState = SHOW_ALL;
        expect(visibilityFilter(state, action)).toEqual(nextState);
    });

    it('todos initial state', () => {
        const nextState = [];
        expect(todos(undefined, {})).toEqual(nextState);
    });

    it('todos conserve state', () => {
        const state = [{ text: "Mi primera tarea", complete: false }];
        const action = {};
        const nextState = state;
        expect(todos(state, action)).toEqual(nextState);
    });

    it('todos add todo', () => {
        const state = [];
        const action = addTodoAction("Mi primera tarea");
        const nextState = [{ text: "Mi primera tarea", complete: false }];
        expect(todos(state, action)).toEqual(nextState);
    });

    it('todos complete todo', () => {
        const state = [{ text: "Mi primera tarea", complete: false }];
        const action = completeTodoAction(0);
        const nextState = [{ text: "Mi primera tarea", complete: true }];
        expect(todos(state, action)).toEqual(nextState);
    });

    it('todos complete todo in the middle', () => {
        const state = [{ text: "Mi primera tarea", complete: false },
        { text: "Mi segunda tarea", complete: false },
        { text: "Mi tercera tarea", complete: false }];
        const action = completeTodoAction(1);
        const nextState = [{ text: "Mi primera tarea", complete: false },
        { text: "Mi segunda tarea", complete: true },
        { text: "Mi tercera tarea", complete: false }];
        expect(todos(state, action)).toEqual(nextState);
    });

    it('todos complete todo out of index', () => {
        const state = [{ text: "Mi primera tarea", complete: false }];
        const action = completeTodoAction(3);
        const nextState = state;
        expect(todos(state, action)).toEqual(nextState);
    });

});

