import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DemoHttpService } from './service/demo.http.service';

const demoRoutes: Routes = [{ path: '', component: MainComponent, pathMatch: 'full' }];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(demoRoutes)],
  providers: [DemoHttpService],
})
export class DemoModule {}
