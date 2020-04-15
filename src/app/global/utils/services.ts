// import { IApiDescription, IApiConfig } from '../interface/app.types';
import { Service, RequestConfig } from 'anique';
export const createApi = function createService(
  apiSchemaList: string,
  serviceConfig: RequestConfig
) {
  return new Service(apiSchemaList, serviceConfig);
};
// export const createService = (apis: IApiDescription[], config: IApiConfig) => {};
