import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterService } from './counter';
import { Sub1 } from './sub1/sub1';
import { Sub2 } from './sub2/sub2';

@Component({
  selector: 'app-signal-multi-component',
  imports: [Sub1, Sub2, FormsModule],
  templateUrl: './signal-multi-component.html',
})
export class SignalMultiComponent {
  private counterService = inject(CounterService);
  public counterValue: number = 0;
  public text: string = '';
  public user: { name: string } = { name: 'John' };

  constructor() {
    this.counterService.getCount().subscribe((value) => {
      this.counterValue = value;
    });
  }

  changeUser() {
    if (this.text && this.text.trim()) {
      this.user = { name: this.text.trim() };
      this.text = '';
    }
  }
}
