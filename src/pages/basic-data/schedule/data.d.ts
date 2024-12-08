export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type ScheduleItemDataType = {
  id: string;
  name: string; // 课表方案名称
  description?: string; // 课表方案描述
  status: 'active' | 'inactive'; // 课表方案状态
  createdAt: string; // 创建时间
  updatedAt: string; // 更新时间
  creator: string; // 创建者
  updater?: string; // 更新者
};

// 用于列表展示的课表方案数据类型
export type ScheduleDisplayItem = ScheduleItemDataType & {
  title: string; // 用于显示的标题（映射自name）
  subDescription: string; // 用于显示的副标题（映射自description）
  avatar?: string; // 可选的头像
  href?: string; // 可选的链接
};
