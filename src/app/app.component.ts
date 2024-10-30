import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  standalone: true,
  imports: [TodoComponent], // Import TodoComponent here
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
}
