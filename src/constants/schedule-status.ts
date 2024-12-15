// src/constants/schedule-status.ts
export const SCHEDULE_STATUS = {
  PENDING: 'pending',
  RUNNING: 'running',
  SUCCESS: 'success',
  FAILED: 'failed',
  COMPLETED: 'completed',
  PUBLISHED: 'published',
};

export const SCHEDULE_STATUS_LABELS: { [key: string]: string } = {
  [SCHEDULE_STATUS.PENDING]: '待处理',
  [SCHEDULE_STATUS.RUNNING]: '进行中',
  [SCHEDULE_STATUS.SUCCESS]: '成功',
  [SCHEDULE_STATUS.FAILED]: '失败',
  [SCHEDULE_STATUS.COMPLETED]: '已完成',
  [SCHEDULE_STATUS.PUBLISHED]: '已发布',
};
