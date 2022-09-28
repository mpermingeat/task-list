import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

import { TaskService } from 'src/app/service/task.service';
import { Task } from "../../task"
 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
 

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>
      this.tasks = tasks
    );
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(
      ()=>(
        this.tasks = this.tasks.filter( t => t.id !== task.id)
      )
    );
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder//aca se cambian los datos del front
    //aca se avisa a los servicio para q actualicen los datos q se cambiaron en el front en la bd
    this.taskService.updateTaskReminder(task).subscribe();
  }
  //resivimos la tarea a traves del evento
  addTask(task:Task){
    this.taskService.AddTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ))
  }

}
