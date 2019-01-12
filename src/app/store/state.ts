import {Todo} from "../model/todo"

export interface TodoListState{
    todos: Todo[];
    loading: boolean;
    pending: number;
}
