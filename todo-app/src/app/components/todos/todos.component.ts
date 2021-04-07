import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
 todos:Todo[];
  inputTodo:null;

  searchTodo:"";

  constructor(private toasterService:ToastrService) {
    
  }

  ngOnInit(): void {
   let todo1= new Todo();
   todo1.content="adad";
   todo1.completed=false;
   
    this.todos=[];
    this.todos.push(todo1);
    
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
