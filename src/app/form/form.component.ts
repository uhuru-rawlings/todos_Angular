import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  todoText = "";
  complete = false;
  alltodos:any = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  addTodos(){
    if(this.todoText === ""){
      return alert("please add todo text");
    }
    this.alltodos.push(
      {texts:this.todoText,statuses:this.complete}
      );

  }
}
