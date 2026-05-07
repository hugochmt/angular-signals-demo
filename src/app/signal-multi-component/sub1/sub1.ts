import { Component, computed, inject, input, Input } from '@angular/core';
import { CounterService } from '../counter';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-sub1',
  imports: [],
  templateUrl: './sub1.html',
})
export class Sub1 {
  private counterService = inject(CounterService);

  public userSignal = input<{ name: string } | null>();

  public upperUser = computed(() => this.userSignal()?.name.toUpperCase());

  private _user!: { name: string };

  @Input() set user(value: { name: string }) {
    if (value.name.length > 5) {
      return;
    }
    this._user = value;
  }

  get user() {
    console.log('Getting user:', this._user);
    return this._user;
  }

  increment() {
    this.counterService.increment();
  }
}
