import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo:string="";

  searchTodo:"";

  constructor(private toasterService:ToastrService) {
    
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }

  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
content:this.inputTodo,
completed:false
    });

    this.inputTodo="";
    if (this.inputTodo == null) {
     // alert("Boş olamaz")
      this.toasterService.error("Boş Bırakılamaz!");
    }else{
      this.todos.push({
        content:this.inputTodo,
        completed:false
            });
            this.inputTodo=null;
    }
   
  }
}
