import { Component, inject } from '@angular/core';
import { CounterService } from '../counter';

@Component({
  selector: 'app-sub1',
  imports: [],
  templateUrl: './sub1.html',
})
export class Sub1 {
  private counterService = inject(CounterService);

  increment() {
    this.counterService.increment();
  }
}
