import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../task"
import { TASKS } from "../../mock-tasks"
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  // input y output para mandar o recibir datos o info, acompaniado del tipo de evento o dato q se maneja
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }
   //funcion con el tipo de dato q se modifica o recibe el evento, y retorna el tipo de evento q emite
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
  

}
