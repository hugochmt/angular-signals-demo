import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CounterService } from './counter';
import { Sub1 } from './sub1/sub1';
import { Sub2 } from './sub2/sub2';

@Component({
  selector: 'app-signal-multi-component',
  imports: [Sub1, Sub2, AsyncPipe],
  templateUrl: './signal-multi-component.html',
})
export class SignalMultiComponent {
  private counterService = inject(CounterService);
  public counterValue: number = 0;

  constructor() {
    this.counterService.getCount().subscribe((value) => {
      this.counterValue = value;
    });
  }
}
