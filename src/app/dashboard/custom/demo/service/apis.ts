import { IApiDescription } from '@app/global/interface/app.types';

const loadList: IApiDescription = {
  url: {
    path: '/getList',
    method: 'get',
  },
};
const getDetail: IApiDescription = {
  url: {
    path: '/getDetail ',
    method: 'get',
  },
};

export default [loadList, getDetail];
