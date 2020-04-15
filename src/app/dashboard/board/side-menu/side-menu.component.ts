import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input()
  isCollapsed: boolean;

  menus = [];
  constructor() {}

  ngOnInit() {
    this.menus = [
      {
        level: 1,
        title: 'demo',
        icon: 'mail',
        open: true,
        selected: false,
        disabled: false,
        children: [
          {
            level: 2,
            title: '页面1',
            icon: 'bars',
            open: false,
            selected: false,
            disabled: false,
            children: [
              {
                level: 3,
                title: '页面1.1',
                selected: false,
                disabled: false,
                route: '',
              },
              {
                level: 3,
                title: '页面1.2',
                selected: false,
                disabled: true,
              },
            ],
          },
          {
            level: 2,
            title: '页面2',
            icon: 'bars',
            selected: false,
            disabled: false,
          },
          {
            level: 2,
            title: '页面3',
            icon: 'bars',
            selected: false,
            disabled: false,
          },
        ],
      },
      {
        level: 1,
        title: '计算器',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
          {
            level: 2,
            title: '复利计算器',
            icon: 'user',
            selected: false,
            disabled: false,
            link: 'calculator/compound',
          },
          {
            level: 2,
            title: '房贷计算器',
            icon: 'user',
            selected: false,
            disabled: false,
            link: 'calculator/houseloan',
          },
        ],
      },
    ];
  }
}
