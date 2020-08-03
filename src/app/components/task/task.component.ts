import { Component, OnInit,Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import {TaskService} from '../../services/task.service'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:Task;

  constructor(
    public taskService:TaskService
  ) { }

  ngOnInit(): void {
  }

  deleteTask(task:Task){
    if (confirm('seguro de borrar la tarea?')){
      this.taskService.deleteTask(task);
    }

  }

}
