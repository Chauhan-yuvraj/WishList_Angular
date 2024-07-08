import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  OnClose() {
    this.close.emit();
    console.log(this.enteredTitle);
  }
  Onsubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        Summary: this.enteredSummary,
        Date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
