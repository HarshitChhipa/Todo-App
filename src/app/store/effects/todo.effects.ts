import { Injectable } from '@angular/core';
import { Actions, Effect, ofType  } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { UpdateTodosState, FETCH_TODOS, ADD_TODO_TO_SERVER } from '../actions';
import { Observable } from 'rxjs';
import {Action} from "@ngrx/store";
import { map, mergeMap } from 'rxjs/operators';
import { Todo } from 'src/app/model/todo';



@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  fetchTodos$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_TODOS),
    mergeMap(() => {
      return this.http.get("http://localhost:3000/data")
        .pipe(map((todos: Todo[]) => {
            return new UpdateTodosState(todos);
          })
        )
    })
  );

  @Effect()
  addTodoToServer$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_TODO_TO_SERVER),
    mergeMap((action: any) => {
      return this.http.post("http://localhost:3000/data", action.payload)
        .pipe(map((todos: Todo[]) => {
            return new UpdateTodosState(todos);
          })
        )
    })
  );
}
