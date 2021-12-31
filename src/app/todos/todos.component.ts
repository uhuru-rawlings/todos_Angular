import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  date = new Date();
  color = "";
  decoration = ""
  deletec = true;
  @Input() Todoss:any;
  constructor() { }

  ngOnInit(): void {
  }
  deleteTodo(){
    this.deletec = false;
  }

  completed(){
    this.color = "gray";
    this.decoration = "line-through"
  }
}
