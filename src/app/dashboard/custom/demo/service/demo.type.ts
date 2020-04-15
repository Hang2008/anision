export interface DemoListItem {
  Name: string;
  AzName: string;
  Network: string;
  Description: string;
  VpcId: string;
  SubnetId: string;
  InstanceId: string;
  CreateAt: number;
  SecurityGroups: string[];
  StatusInfo: {
    icon: string;
    label: string;
  };
}

export interface ITemplateListItem {
  templateId?: string; // 券模板编号
  voucherName?: string; // 券名称
  name?: string; // 券模板名称
  publishStartTime?: string; // 发放开始时∏间
  publishEndTime?: string; // 发放结束时间
  gmtCreate?: string; // 创建时间
  templateType?: string; // 券模板类型
  storeDes?: string; // 门店描述
  approvalStatus?: string; // 券模板状态
  creator?: string; // 创建者
}

export interface ITemplateListSearchRequest {
  templateId?: string; // 券模板编号
  voucherName?: string; // 券名称
  status?: string; // 券模板状态 String
  name?: string; // 券模板名称
  startTime?: string; // 发放开始时∏间
  endTime?: string; // 发放结束时间
  templateType?: string; // 券模板类型
  storeDes?: string; // 门店描述
  creatorList: string[]; // 创建者ID，创建者查询自己创建的模板	String	是
  pageNum: number; // 页数,从1开始	int	是
  pageSize: number; // 每页记录条数	int	是
  templateIds?: string[]; // 模板id列表	List		List<String>
  approvalStatus?: string; // 审批状态	String
  templateAuthor?: string; // 创建者
}

// 券模板查询列表返回
export interface ITemplateListSearchResponse {
  templates: ITemplateListItem[];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}
