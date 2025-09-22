import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.html',
})
export class SignalsCounter {
  count = signal(0);
  doubleCount = computed(() => (this.showDouble() ? this.count() * 2 : 0));
  showDouble = signal(true);

  constructor() {
    effect(() => {
      console.log(`Count is now: ${this.count()}`);
    });
  }

  increment() {
    this.count.update((c) => (c += 1));
  }
}
