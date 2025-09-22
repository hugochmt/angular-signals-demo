import { Component, inject } from '@angular/core';
import { CounterService } from '../counter';

@Component({
  selector: 'app-sub2',
  imports: [],
  templateUrl: './sub2.html',
})
export class Sub2 {
  private counterService = inject(CounterService);

  decrement() {
    this.counterService.decrement();
  }
}
