import * as TodoActions from "../store/actions"
import { TodoDataService } from '../service/todo-data-service.service';
import { Todo } from '../model/todo';

const initialState: Todo[] = [];

export function TodoReducer(state = initialState, action) {

    switch (action.type) {

        case TodoActions.UPDATE_TODOS_STATE: {
            const todos = action.payload;
            return state.concat(todos);
        }

        default: {
            return state;
        }
    }
}