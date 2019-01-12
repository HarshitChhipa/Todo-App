import { Component, OnInit } from '@angular/core';
import {of, Observable} from 'rxjs';

import {TodoDataService} from "../service/todo-data-service.service";
import { Todo } from '../model/todo';
import {FetchTodos, AddTodoToServer} from "../store/actions";
import {TodoListState} from "../store/state";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoDataService]
})

export class TodoComponent implements OnInit{

  todos: Todo[] = [];
  todoListState$: Observable<Todo[]>;

  ngOnInit() {
    this.todoListState$ = this.store.select((state) =>  {
      return state.todos;
    });
  }

  constructor(private todoDataService: TodoDataService, private store: Store<TodoListState>) {
    this.store.dispatch(new FetchTodos());
  }

  todoEntered(event: any) {
    const todo = {id:Math.ceil(Math.random()*100), description: event.target.value, isCompleted: false};
    this.store.dispatch(new AddTodoToServer(todo));
  }

  toggleTodo(selectedTodo) {

    //toggling with service instead of actions (other approach) 
    this.todoDataService.toggleTodo(selectedTodo);
  }

}
