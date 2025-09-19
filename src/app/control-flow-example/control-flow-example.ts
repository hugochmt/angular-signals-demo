import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow-example',
  imports: [CommonModule],
  templateUrl: './control-flow-example.html',
})
export class ControlFlowExample {


  public users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
}
