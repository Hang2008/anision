import { RequestConfig } from './request.config';

export class Service {
  someProperty: string;

  public constructor(apiManifest: string, requestConfig: RequestConfig) {}
  private createRequest(apiName: string) {
    this.someProperty = apiName;
    return this.init();
  }

  private init(): Service {
    if (!Proxy) {
      return this;
    } else {
      return new Proxy(this, {
        get(target, key) {
          console.log(`${String(key)} 被读取`);
          return target[key];
        },
        set(target, key, value): boolean {
          console.log(`${String(key)} 被设置为 ${value}`);
          target[key] = value;
          return true;
        },
      });
    }
  }
}
