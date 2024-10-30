import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from './todo.model';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule and CommonModule here
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTask = ''; // Clear the input field
    }
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
