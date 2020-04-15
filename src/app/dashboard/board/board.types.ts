interface MenuItem {
  level: number;
  title: string;
  open: boolean; // 是否展开
  disabled: boolean;
  selected: boolean;
  icon: string;
  children: MenuItem[];
}
