import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ANISION_DEFAULT_HEADER } from '../constant/app.const';
import {
  APIProperty,
  APIRequest,
  APIRequestHeader,
  APIResponseTypeA,
  APIResponseTypeB,
} from '../interface/app.types';

import { createApi } from '../utils/services';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // 测试url返回不同形态的数据
  testBaseUrl1 = 'http://59.111.90.154:7000/api/'; // 返回IHttpResponseTypeB 数据
  testBaseUrl2 = 'http://172.16.100.112:10001/CIP/callGeneralServiceByJson.jsoncall'; // 返回IHttpResponseTypeA 数据
  apis: any;
  constructor(private http: HttpClient) {
    this.apis = createApi('1', {
      baseUrl: this.testBaseUrl2,
    });
  }
  /**
   * @description get简单实现
   */
  get<T>(url: string): Observable<T> {
    return this.http.get<APIResponseTypeB<T>>(this.testBaseUrl1 + url).pipe(
      map<APIResponseTypeB<T>, T>((realRes) => {
        if (realRes.code === 200) {
          console.log('get success');
          const expected: T = { ...realRes.data };
          return expected;
        } else {
          // 异常处理逻辑
          throw Error('测试错误');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message);
      })
    );
  }
  /**
   * @description 包含对全部响应体HttpResponse的处理
   */
  getFull<T>(url: string): Observable<T> {
    return this.http
      .get<T>(this.testBaseUrl1 + url, { observe: 'response' }) // option告诉angular 请求返回的类型范围是什么
      .pipe(
        map<HttpResponse<T>, T>((resp) => {
          const keys = resp.headers.keys();
          const headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);
          console.log(headers);
          if (resp.ok) {
            return resp.body;
          }
        })
      );
  }

  /**
   *
   * 统一接口
   * @description 设计思路
   * 应用所有接口调这个方法， 具体api接口名称在这里拼接作为angular的post的body参数。
   * 这个形态由后台业务决定，这里后台调的接口就是callGeneralServiceByJson，具体哪个接口由前端传参数决定。
   * 这个方法进行封装后再调用angular的post方法
   */
  anisionCall<T>(api: APIProperty, params: any): Observable<T> {
    const header: APIRequestHeader = { ...ANISION_DEFAULT_HEADER, ...api };
    const request: APIRequest = {
      Service: {
        Header: header,
        Body: params,
      },
    };
    return this.post(api, request);
  }

  // post请求实现
  private post<T>(api: APIProperty, body: any): Observable<T> {
    // 根据具体接口规则合并自定义的请求体
    // console.log(request);
    return this.http.post<APIResponseTypeA<T>>(this.testBaseUrl2, body).pipe(
      map((res) => {
        return res.Service.Body;
      })
    );
  }

  /**
   * @todo 在开发模式下访问其他目录的json文件?实现在生产模式和开发模式都能访问同一个json文件？或者保证在生产模式下能够访问指定目录的json文件
   */
  getJson(): Observable<any> {
    // const host = window.location.host;
    // const href = window.location.href;
    // const index = href.indexOf(`${host}/#/`);
    // let proxyPath = '';
    // if (index === -1) {
    //   proxyPath = href.split(`${host}/`)[1].split('/#/')[0];
    // }
    // const fileurl = `http://${host}/${proxyPath}/config/api.json`;
    // console.log(fileurl);
    return this.http.get('/assets/api.json');
  }
}
