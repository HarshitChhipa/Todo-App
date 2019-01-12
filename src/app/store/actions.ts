import {Action} from "@ngrx/store";
import { Todo } from '../model/todo';

export const ADD_TODO = 'ADD_TODO' ;
export const UPDATE_TODOS_STATE = 'UPDATE_TODOS_STATE' ;
export const FETCH_TODOS = 'FETCH_TODOS' ;
export const ADD_TODO_TO_SERVER = 'ADD_TODO_TO_SERVER' ;

export class FetchTodos implements Action {
    readonly type = FETCH_TODOS;
}

export class AddTodoToServer implements Action {
    readonly type = ADD_TODO_TO_SERVER;
    constructor(readonly payload: Todo) {};
}

export class UpdateTodosState implements Action {
    readonly type = UPDATE_TODOS_STATE;
    constructor(readonly payload: Todo[]) {};
}