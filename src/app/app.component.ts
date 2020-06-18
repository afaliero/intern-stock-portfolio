import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intern Stock Picks';
  stockArray = [];

  addTodo(value){    
    this.stockArray.push(value)    
    console.log(value) } 
  }
  
