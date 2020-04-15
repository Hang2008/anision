import { Injectable } from '@angular/core';
import { HttpService } from '@app/global/services/http.service';
import { Observable } from 'rxjs';
import { ITemplateListSearchRequest, DemoListItem, ITemplateListSearchResponse } from './demo.type';

@Injectable()
export class DemoHttpService {
  constructor(private service: HttpService) {}

  getList(): Observable<DemoListItem[]> {
    return this.service.get<DemoListItem[]>('ingress/getList');
  }

  getList2(): Observable<DemoListItem[]> {
    return this.service.getFull<DemoListItem[]>('ingress/getList');
  }

  querytest(params: ITemplateListSearchRequest): Observable<ITemplateListSearchResponse> {
    return this.service.anisionCall<ITemplateListSearchResponse>(
      {
        TranCode: 'rim_DEV/queryPageTemplateListService',
      },
      params
    );
  }

  testFile(): Observable<any> {
    return this.service.getJson();
  }
}
