import { Injectable } from "@angular/core";
import { dummyTasks } from "./dummy-task";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn : 'root'})   // ?
 
export class TasksService{
    tasks = dummyTasks

        constructor(){
            const taskss = localStorage.getItem('tasks');
            if(taskss){
                this.tasks = JSON.parse(taskss)
            }
        }
    getUserTask(userId : string){
       return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData : NewTaskData , userId:string){
        this.tasks.unshift({
            id : new Date().getTime().toString(),
            userId : userId,
            title : taskData.title,
            summary : taskData.Summary,
            dueDate : taskData.Date
        })
        this.saveTask();

    }

    removeTask(id : string){
        this.tasks = this.tasks.filter((task)=> task.id !== id)
        this.saveTask();
    }

    private saveTask(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}