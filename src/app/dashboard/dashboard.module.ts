import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent } from './board/layout/layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideMenuComponent } from './board/side-menu/side-menu.component';
import { CalculatorModule } from './custom/calculator/index.module';
import { DemoModule } from './custom/demo/index.module';

@NgModule({
  declarations: [LayoutComponent, SideMenuComponent],
  imports: [CommonModule, NgZorroAntdModule, DashboardRoutingModule, DemoModule, CalculatorModule],
})
export class DashboardModule {}
