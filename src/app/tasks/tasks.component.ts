import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-task';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;
  tasks = dummyTasks;

  constructor (private tasksService : TasksService){}   // ? 
  
  // private task=inject(TasksService)

  get selectedUserTask() {
    return this.tasksService.getUserTask(this.userId)
  } 
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
