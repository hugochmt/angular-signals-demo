import { Component } from '@angular/core';


@Component({
  selector: 'app-control-flow-example',
  imports: [],
  templateUrl: './control-flow-example.html',
})
export class ControlFlowExample {


  public users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
}
