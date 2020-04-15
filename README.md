# Anision开发日志

## 实现了:
* 左上接口布局
* 配置子模块菜单动态渲染路由
* 子模块独立实现(需要手动增加路由配置)
* 数据层封装

## 备注:
* [x] 路由架构问题
如果抽了模块后， 模块中的组件路由需要单独实现一个routing.module, 并引入到父模块中
* [x] 路由匹配问题
对于子应用的路由不需要写完整路径，只用关心应用内部路径，整个框架前缀是什么并不关心比如这里的link

```typescript
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
```
框架外部路径前置'/app'由框架自己维护

```typescript
const dashRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./custom/demo/index.module').then(m => m.DemoModule),
      },
      {
        path: 'calculator',
        loadChildren: () =>
          import('./custom/calculator/index.module').then(m => m.CalculatorModule),
      },
    ],
  },
];
```
* [ ] 无法实现angular中动态加载module路由
可插拔: 单独应用目录可随意删除增加，不用修改路由配置

```typescript
const routes = [];
const getRoutes = (name: string) => {
  const importFiles = require.context('./', true, /\.\.\/\/index.module.ts$/);
  const config = [];
  console.log(importFiles);
  importFiles.keys().forEach(key => {
    const moduleItem = importFiles(key).default;
    console.log(moduleItem);
    // if (moduleItem.routes) {
    //   routes.push(moduleItem.routes);
    // }
    // if (moduleItem.config) {
    //   if (!moduleItem.config.module) {
    //     console.error('must have module attr');
    //   }
    //   config.push(moduleItem.config);
    // }
  });
  // routes = routes.map(moduleRoutes => {
  //   if (typeof moduleRoutes === 'function') {
  //     return moduleRoutes(routes);
  //   }
  //   return moduleRoutes;
  // });
  return {
    routes,
  };
};
export default getRoutes('load');

```
* [x] 数据封装除了接受报文，有额外对整个响应体数据处理能力
angular请求返回响应体写法

```typescript
// get返回全部响应体
getFull<T>(url: string): Observable<T> {
return this.http
  .get<T>(this.testBaseUrl1 + url, { observe: 'response' }) // option告诉angular 请求返回的类型范围是什么
  .pipe(
    map<HttpResponse<T>, T>(resp => {
      const keys = resp.headers.keys();
      const headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
      console.log(headers);
      if (resp.ok) {
        return resp.body;
      }
    })
  );
}
```
* [x] angular 异常处理
采用typescript缩窄类型机制

```typescript
/**
* @description get简单实现
*/
get<T>(url: string): Observable<T> {
    return this.http.get<APIResponseTypeB<T>>(this.testBaseUrl1 + url).pipe(
      map<APIResponseTypeB<T>, T>(realRes => {
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
```
* [x] 运用了typescript的函数重载实现了同名不同参
* [ ] angular.json中声明一个本地目录放json并不能在开发模式中访问json
* [x] 把json文件放在assets目录中，在开发模式下就可以读取本地json文件

```typescript
getJson(): Observable<any> {
    return this.http.get('/assets/api.json');
}
```
* [x] 自定义库导出服务写法

```typescript
export class Service {}
```

# TODO
1. 组件暂时用ng-zorro, 以后有精力改成自定义组件库
2. 不同形态的返回结果采用共通的请求函数，目前一套返回结果对应一种实现
3. 数据层采用JSON配置设计
4. 在开发模式下访问其他目录的json文件?实现在生产模式和开发模式都能访问同一个json文件？或者保证在生产模式下能够访问指定目录的json文件
5. 配置angular.json进行不同配置的打包
6. 根据angular environments环境变量设置请求url
7. 请求函数重载
8. ts实现request-pre库，就在anision内部实现

## 参考
[英雄特性区的路由需求
](https://www.angular.cn/guide/router#module-import-order-matters)
[从服务器获取数据](https://angular.cn/guide/http#requesting-data-from-server)