import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public todo: any = ""
  public todoList = [{ todo: "hello", done: false }, { todo: "world", done: true }, { todo: "fuck", done: false }]
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    let todoObj = {
      todo: this.todo,
      done: false
    }
    console.log(!!this.todo)
    if(!this.todo){
      alert("You must write something!")
      return
    }
    this.todoList.push(todoObj)
    this.todo = ''
  }
  onKey(e) {
    if (e.key === "Enter") {
      this.addTodo()
    }
  }
  isDo(index){
    this.todoList[index].done = !this.todoList[index].done
  }
  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }
}
