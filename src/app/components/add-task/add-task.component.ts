import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/task';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription

  constructor(
    //los servicios se agregan al constructor
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                                .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    //con el if hacemos una alerta para evitar las tareas en blanco.
    if(this.text.length === 0){
      alert("Please add a task!");
      return
    }
    //objeto con todos los datos
    const {text,day,reminder} = this
    const newTask = {text,day,reminder}
    this.onAddTask.emit(newTask);
  }


}
