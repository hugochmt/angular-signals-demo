import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div>
      <a routerLink="control-flow">Control Flow Example</a>
    </div>
    <div>
      <a routerLink="signals">Signals Example</a>
    </div>
  `,
})
export class Home {}
