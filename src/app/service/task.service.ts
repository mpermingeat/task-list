import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/task';
  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable <Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl)
  }
}
