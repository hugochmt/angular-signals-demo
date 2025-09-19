import { Routes } from '@angular/router';
import { ControlFlowExample } from './control-flow-example/control-flow-example';
import { SignalsExample } from './signals-example/signals-example';
import { Home } from './home';

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
    path: 'signals',
    component: SignalsExample,
  },
];
