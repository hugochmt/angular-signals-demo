import { Routes } from '@angular/router';
import { ControlFlowExample } from './control-flow-example/control-flow-example';
import { Home } from './home';
import { SignalMultiComponent } from './signal-multi-component/signal-multi-component';
import { SignalsCounter } from './signals-counter/signals-example';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'control-flow',
    component: ControlFlowExample,
  },
  {
    path: 'signals-counter',
    component: SignalsCounter,
  },
  {
    path: 'signals-multi-component',
    component: SignalMultiComponent,
  }
];
