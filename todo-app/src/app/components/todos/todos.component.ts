import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
 todos:Todo[];
  inputTodo:null;

  constructor( private toasterService:ToastrService) {}

  ngOnInit(): void {
    this.todos=[];
    
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
    if (this.inputTodo ==null) {
    
      this.toasterService.error("Boş bırakılamaz");
    }else{
      this.todos.push({
        content:this.inputTodo,
        completed:false
              }); 
    }

    
   

    }
      
  
}   

