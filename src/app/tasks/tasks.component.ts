import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required : true}) userId?:string
  @Input ({required : true}) name?:string;

   tasks = dummyTasks;

   get selectedUserTask(){
    return this.tasks.filter((task)=>task.userId === this.userId);
   }
}