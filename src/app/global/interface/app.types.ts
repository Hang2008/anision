export interface IApiDescription {
  url: {
    path: string;
    method: 'get' | 'post ';
  };
  mock?: {
    [cases: string]: string;
  };
}

export interface IApiConfig {
  config: {
    baseUrl: string;
  };
}

/**
 * 请求报文头
 */
export interface APIRequestHeader {
  /**
   * 服务源发起系统
   */
  SourceSysId?: string;
  /**
   * 服务调用方系统
   */
  ConsumerId?: string;
  /**
   * MAC值
   */
  Mac?: string;
  /**
   * 密钥ID
   */
  KeyId?: string;
  /**
   * 服务编码
   */
  ServiceCode?: string;
  /**
   * 服务名称
   */
  ServiceName?: string;
  /**
   * 服务交易编码
   */
  TranCode?: string;
  /**
   * 全局流水号
   */
  GlobalSeq?: string;
  /**
   * 交易流水号
   */
  TranSeq?: string;
  /**
   * 交易渠道
   */
  Channel?: string;
  /**
   * 终端号
   */
  TerminalCode?: string;
  /**
   * 机构代码
   */
  BranchId?: string;
  /**
   * 交易柜员
   */
  TranTeller?: string;
  /**
   * 授权柜员
   */
  AuthTeller?: string;
  /**
   * 授权密码
   */
  AuthPwd?: string;
  /**
   * 授权标志
   */
  AuthFlag?: string;
  /**
   * 交易日期
   */
  TranDate?: string;
  /**
   * 交易时间
   */
  TranTime?: string;
  /**
   * 本地语言
   */
  LocalLang?: string;
  /**
   * 每页记录数
   */
  PageTotalNum?: string;
  /**
   * 当前页码
   */
  CurrentPageNum?: string;
  /**
   * 本页第一笔
   */
  PageStart?: string;
  /**
   * 本页最后一笔
   */
  PageEnd?: string;
  /**
   * 法人代码
   */
  LegalRepCode?: string;
  /**
   * 扩展内容
   */
  ExtendContent?: string;

  ClientIp?: string;
  AuthrPwd?: string;
  AuthrTeller?: string;
}

/**
 * 响应报文头
 */
export interface APIResponseHeader {
  /**
   * 授权柜员
   */
  AuthTeller?: string;

  /**
   * 机构代码
   */
  BranchId?: string;
  /**
   * 响应消息
   */
  RetMsg?: string;
  /**
   * 响应状态
   */
  RetStatus?: 'S' | 'E' | any;
  /**
   * 响应编码
   */
  RetCode?: string;
  /**
   * 服务调用方系统
   */
  ConsumerId?: string;
  /**
   * 授权标志
   */
  AuthFlag?: string;
  /**
   * 全局流水号
   */
  GlobalSeq?: string;
  /**
   * 服务编码
   */
  ServiceCode?: string;
  /**
   * 服务名称
   */
  SourceSysId?: string;
  /**
   * 交易日期
   */
  TranDate?: string;
  /**
   * 交易流水号
   */
  TranSeq?: string;
  /**
   * 交易柜员
   */
  TranTeller?: string;
  /**
   * 交易时间
   */
  TranTime?: string;
}

/**
 * 接口请求报文格式
 */
export interface APIRequest<T = any> {
  Service: {
    Header: APIRequestHeader;
    Body?: T;
  };
}

/**
 * 接口响应报文格式A
 */
export interface APIResponseTypeA<T = any> {
  Service: {
    Header: APIResponseHeader;
    Body?: T;
  };
}
/**
 * 接口响应报文格式B
 */
export interface APIResponseTypeB<T> {
  code: number;
  message: string;
  data: T;
}

/**
 * 服务接口定义
 */
export interface APIProperty {
  /**
   * 服务编码
   */
  ServiceCode?: string;
  /**
   * 服务名称
   */
  ServiceName?: string;
  /**
   * 服务通讯
   */
  TranCode: string;

  /**
   * 服务可选项
   */
  [name: string]: any;
}
