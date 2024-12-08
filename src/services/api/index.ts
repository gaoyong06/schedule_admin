// @ts-ignore
/* eslint-disable */
// API 更新时间：
// API 唯一标识：
import * as account from './account';
import * as class_ from './class';
import * as classRule from './class-rule';
import * as facility from './facility';
import * as grade from './grade';
import * as schedule from './schedule';
import * as schedulingTask from './scheduling-task';
import * as school from './school';
import * as subject from './subject';
import * as subjectContinuousRule from './subject-continuous-rule';
import * as subjectDailyLimitRule from './subject-daily-limit-rule';
import * as subjectGroup from './subject-group';
import * as subjectMutexRule from './subject-mutex-rule';
import * as subjectPeriodLimitRule from './subject-period-limit-rule';
import * as subjectRule from './subject-rule';
import * as teacher from './teacher';
import * as teacherGroup from './teacher-group';
import * as teacherRule from './teacher-rule';
import * as teachingTask from './teaching-task';

// Export login function for easier import
export const login = account.postApiV1UsersLogin;
export const getCaptcha = account.postApiV1UsersCaptcha;

export default {
  account,
  class_,
  classRule,
  grade,
  schedule,
  school,
  subject,
  subjectGroup,
  subjectRule,
  subjectContinuousRule,
  subjectDailyLimitRule,
  subjectMutexRule,
  subjectPeriodLimitRule,
  teacher,
  teacherGroup,
  teacherRule,
  teachingTask,
  facility,
  schedulingTask,
};
