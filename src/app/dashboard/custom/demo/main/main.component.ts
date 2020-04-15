import { Component, OnInit } from '@angular/core';
import { DemoHttpService } from '../service/demo.http.service';
import { ITemplateListSearchRequest } from '../service/demo.type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private service: DemoHttpService) {}

  ngOnInit() {
    console.log('test request...');
    // 测试获取body数据并测试异常
    // this.service
    //   .getList()
    //   .subscribe({ next: res => console.log(res), error: error => console.error(error) });
    // 测试获取返回体数据
    // this.service
    //   .getList2()
    //   .subscribe({ next: res => console.log(res), error: error => console.error(error) });

    // 测试post 和另一种数据返回格式
    const params: ITemplateListSearchRequest = { pageNum: 1, pageSize: 10, creatorList: [] };
    this.service
      .querytest(params)
      .subscribe({ next: res => console.log(res), error: error => console.error(error) });

    // 测试读取文件
    this.service
      .testFile()
      .subscribe({ next: res => console.log(res), error: error => console.error(error) });
  }
}
