import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundComponent } from './main/compound/compound.component';
import { HouseloanComponent } from './main/houseloan/houseloan.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'compound',
        component: CompoundComponent,
      },
      {
        path: 'houseloan',
        component: HouseloanComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [MainComponent, CompoundComponent, HouseloanComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CalculatorModule {}
