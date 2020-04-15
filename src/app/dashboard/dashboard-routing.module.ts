import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './board/layout/layout.component';

const dashRoutes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./custom/demo/index.module').then((m) => m.DemoModule),
      },
      {
        path: 'calculator',
        loadChildren: () =>
          import('./custom/calculator/index.module').then((m) => m.CalculatorModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
