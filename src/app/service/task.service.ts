import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../task';

//constante para declarar que el tipo de objeto q se envia es un json
const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/task';
  constructor(
    private http:HttpClient
  ) { }
    //definimos un funcion de tipo observable q recibe un tipo de dato o datos, y retorna esos datos a la url
  getTasks(): Observable <Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable <Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task:Task): Observable <Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httOptions)//aca se usa la constante del objeto json
  }
  AddTask(task:Task): Observable <Task>{
    //mandamos con el metodo post la task, a la url q definimos de la base de datos, mas la task y usamos los httpOpitons
    return this.http.post<Task>(this.apiUrl,task,httOptions)
  }
}
