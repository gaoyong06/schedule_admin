declare namespace API {
  type BatchCreateSubjectReq = {
    subjects: CreateSubjectReq[];
  };

  type BatchDeleteSubjectsReq = {
    subject_ids: number[];
  };

  type BatchDeleteGradesReq = {
    grade_ids: number[];
  };

  type BatchCreateTeacherReq = {
    subjects: CreateTeacherReq[];
  };

  type City = {
    key?: string;
    label?: string;
  };

  type Class = {
    /** 班级id */
    class_id?: number;
    eduStage?: EduStage;
    /** 年级id */
    grade_id?: number;
    /** 名称 */
    name?: string;
    /** 组织id */
    org_id?: number;
    stage_id?: number;
  };

  type ClassRule = {
    class_id?: number;
    created_at?: string;
    deleted_at?: DeletedAt;
    desc?: string;
    grade_id?: number;
    limit?: string;
    periods?: string;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
    updated_at?: string;
  };

  type CreateClassReq = {
    grade_id?: number;
    name?: string;
    org_id?: number;
    stage_id?: number;
  };

  type CreateClassRuleReq = {
    class_id?: number;
    desc?: string;
    grade_id?: number;
    limit: 'fixed' | 'prefer' | 'avoid' | 'forbid';
    periods: string;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
  };

  type CreateFacilityReq = {
    capacity?: number;
    name?: string;
    org_id?: number;
    /** 场地类型 exclusive: 专用教学场所, shared: 共享教学场所 */
    type?: 'exclusive' | 'shared';
  };

  type CreateGradeReq = {
    name?: string;
    org_id?: number;
    stage_id?: number;
  };

  type CreateScheduleRequest = {
    /** 备注信息 */
    desc?: string;
    /** 课表名称, 如: 心远中学2023年第一学期课程表 */
    name?: string;
    /** 下午课节数, 默认:4节 */
    num_afternoon_classes?: number;
    /** 一周休息日, 默认:2天 */
    num_days_off?: number;
    /** 上午课节数, 默认:4节 */
    num_forenoon_classes?: number;
    /** 早读课节数, 默认:1节 */
    num_morning_reading_classes?: number;
    /** 晚上课节数, 默认:2节 */
    num_night_classes?: number;
    /** 一周工作日, 默认:5天 */
    num_workdays?: number;
    /** 组织id */
    org_id?: number;
  };

  type CreateSchoolReq = {
    /** 创建人用户uid */
    created_by?: number;
    name?: string;
    /** 科目简称 */
    short_name?: string;
    type_id?: number;
    /** 最后修改人用户uid */
    updated_by?: number;
  };

  type CreateSubjectConnectedDayRuleReq = {
    class_id?: number;
    count: number;
    day_of_week: number;
    grade_id: number;
    schedule_id: number;
    org_id: number;
    subject_id: number;
    teacher_id?: number;
  };

  type CreateSubjectDayLimitRuleReq = {
    class_id?: number;
    count: number;
    day_of_week: number;
    grade_id: number;
    object: 'subject' | 'teacher';
    schedule_id: number;
    org_id: number;
    subject_id?: number;
    teacher_id?: number;
    type: 'fixed' | 'min' | 'max';
  };

  type CreateSubjectGroupReq = {
    name: string;
    /** 组织id */
    org_id?: number;
    subject_ids: string;
  };

  type CreateSubjectMutexRuleReq = {
    mutex_subject_id: number;
    schedule_id: number;
    org_id: number;
    subject_id: number;
  };

  type CreateSubjectPeriodLimitRuleReq = {
    class_id?: number;
    count: number;
    grade_id: number;
    object: 'subject' | 'teacher';
    period_of_day: number;
    schedule_id: number;
    org_id: number;
    subject_id?: number;
    teacher_id?: number;
    type: 'fixed' | 'min' | 'max';
  };

  type CreateSubjectReq = {
    name?: string;
    org_id?: number;
    /** 科目简称 */
    short_name?: string;
  };

  type CreateSubjectRuleReq = {
    count: number;
    grade_id: number;
    object: 'subject' | 'teacher';
    period_of_day: number;
    schedule_id: number;
    org_id: number;
    subject_id?: number;
    teacher_id?: number;
    type: 'fixed' | 'min' | 'max';
  };

  type CreateTaskReq = {
    task_data: string;
  };

  type CreateTeacherGroupReq = {
    name: string;
    /** 组织id */
    org_id?: number;
    teacher_ids: string;
  };

  type CreateTeacherReq = {
    main_subject?: number;
    name: string;
    phone?: string;
    org_id: number;
    short_name?: string;
  };

  type CreateTeacherRuleReq = {
    /** 描述 */
    desc?: string;
    /** 限制类型：fixed(固定),prefer(偏好),avoid(避免),forbid(禁止) */
    limit: 'fixed' | 'prefer' | 'avoid' | 'forbid';
    /** 时段 */
    periods?: string;
    /** 排课ID */
    schedule_id: number;
    /** 组织ID */
    org_id: number;
    /** 教师组ID */
    teacher_group_id: number;
    /** 教师ID */
    teacher_id: number;
  };

  type CreateTeachingTaskReq = {
    class_id?: number;
    course_type?: 'single' | 'double';
    grade_id?: number;
    num_classes_per_week?: number;
    num_connected_classes_per_week?: number;
    org_id?: number;
    subject_id?: number;
    subject_id_for_week?: number;
    subject_id_on_diff_day?: number;
    teacher_id?: number;
    week_type?: string;
  };

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: Geographic;
    address?: string;
    phone?: string;
  };

  type deleteApiV1SubjectGroupsIdParams = {
    /** 科目分组ID */
    id: number;
  };

  type deleteApiV1TeacherGroupsIdParams = {
    /** 教师分组ID */
    id: number;
  };

  type deleteClassParams = {
    /** 班级ID */
    id: number;
  };

  type deleteClassRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type DeletedAt = {
    time?: string;
    /** Valid is true if Time is not NULL */
    valid?: boolean;
  };

  type deleteFacilities_openAPI_classSubjectIdGradeIdClassIdParams = {
    /** 科目ID */
    subject_id: number;
    /** 年级ID */
    grade_id: number;
    /** 班级ID */
    class_id: number;
  };

  type deleteFacilityParams = {
    /** 教学场地ID */
    id: number;
  };

  type deleteGradeParams = {
    /** 年级ID */
    id: number;
  };

  type deleteScheduleParams = {
    /** 课表方案ID */
    id: number;
  };

  type deleteSchoolParams = {
    /** 学校ID */
    id: number;
  };

  type deleteSubjectConnectedDayRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type deleteSubjectDayLimitRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type deleteSubjectMutexRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type deleteSubjectParams = {
    /** 科目IDs */
    id: number[];
  };

  type deleteSubjectPeriodLimitRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type deleteSubjectRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type deleteTasksIdParams = {
    /** 任务ID */
    id: number;
  };

  type deleteTeacherParams = {
    /** 教师ID */
    id: number;
  };

  type deleteTeacherRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type DeleteTeachersReq = {
    teacher_ids: number[];
  };

  type deleteTeachingTasksIdParams = {
    /** 教学任务ID */
    id: number;
  };

  type EduStage = {
    /** 教育阶段名称，如小学、初中、高中等 */
    name?: string;
    /** 唯一id */
    stage_id?: number;
  };

  type Facility = {
    /** 教学场所能容纳的, 最多上课班级, 专用教学场所: 为固定值1, 共享教学场所: 默认值为 0,表示不限制 */
    capacity?: number;
    /** 唯一id */
    facility_id?: number;
    /** 场地名称 */
    name?: string;
    /** 组织id */
    org_id?: number;
    /** 场地类型 exclusive: 专用教学场所, shared: 共享教学场所 */
    type?: string;
  };

  type Geographic = {
    city?: City;
    province?: Province;
  };

  type getApiV1SubjectGroupsIdParams = {
    /** 科目分组ID */
    id: number;
  };

  type getApiV1TeacherGroupsIdParams = {
    /** 教师分组ID */
    id: number;
  };

  type GetCaptchaReq = {
    phone: string;
  };

  type getClassesByGradeParams = {
    /** 年级ID */
    grade_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getClassesByOrgParams = {
    /** 组织ID */
    org_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type BatchDeleteClassesReq = {
    class_ids: number[];
  };

  type getClassParams = {
    /** 班级ID */
    id: number;
  };

  type getClassRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getClassRulesParams = {
    /** 页码 */
    page: number;
    /** 每页数量 */
    page_size: number;
    /** 课表方案ID */
    schedule_id: number;
    /** 组织ID */
    org_id: number;
    /** 年级ID */
    grade_id?: number;
    /** 班级ID */
    class_id?: number;
  };

  type getFacilitiesByOrgParams = {
    uid: number;
    org_id: number;
    current: number;
    page_size?: number;
  };

  type getFacilityParams = {
    /** 教学场地ID */
    id: number;
  };

  type getGradeParams = {
    /** 年级ID */
    id: number;
  };

  type getGradesByUserParams = {
    /** 用户ID */
    org_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getGradesByOrgParams = {
    /** 用户ID */
    org_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getScheduleParams = {
    /** 课表方案ID */
    id: number;
  };

  type getSchedulesByOrgParams = {
    org_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getSchedulesByUserParams = {
    uid: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getSchoolParams = {
    /** 学校ID */
    id: number;
  };

  type getSchoolsByUserParams = {
    /** 用户ID */
    uid: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getSubjectConnectedDayRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getSubjectConnectedDayRulesParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
    /** 课表方案ID */
    schedule_id?: number;
    /** 组织id */
    org_id?: number;
    /** 年级ID */
    grade_id?: number;
    /** 班级ID */
    class_id?: number;
    /** 科目ID */
    subject_id?: number;
    /** 教师ID */
    teacher_id?: number;
    /** 星期几 */
    day_of_week?: number;
  };

  type getSubjectDayLimitRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getSubjectDayLimitRulesParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
    /** 课表方案ID */
    schedule_id?: number;
    /** 组织id */
    org_id?: number;
    /** 年级ID */
    grade_id?: number;
    /** 班级ID */
    class_id?: number;
    /** 对象类型 (subject/teacher) */
    object?: string;
    /** 科目ID */
    subject_id?: number;
    /** 教师ID */
    teacher_id?: number;
    /** 星期几 */
    day_of_week?: number;
    /** 限制类型 (fixed/min/max) */
    type?: string;
  };

  type getSubjectGroupsByOrgParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getSubjectMutexRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getSubjectMutexRulesParams = {
    /** 页码 */
    page: number;
    /** 每页数量 */
    page_size: number;
    /** 课表方案ID */
    schedule_id: number;
    /** 组织ID */
    org_id: number;
    /** 科目ID */
    subject_id?: number;
    /** 互斥科目ID */
    mutex_subject_id?: number;
  };

  type getSubjectParams = {
    /** 科目ID */
    id: number;
  };

  type getSubjectPeriodLimitRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getSubjectPeriodLimitRulesParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
    /** 课表方案ID */
    schedule_id?: number;
    /** 组织id */
    org_id?: number;
    /** 年级ID */
    grade_id?: number;
    /** 班级ID */
    class_id?: number;
    /** 对象类型 (subject/teacher) */
    object?: string;
    /** 科目ID */
    subject_id?: number;
    /** 教师ID */
    teacher_id?: number;
    /** 节次 */
    period_of_day?: number;
    /** 限制类型 (fixed/min/max) */
    type?: string;
  };

  type getSubjectRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getSubjectRulesParams = {
    /** 页码 */
    page: number;
    /** 每页数量 */
    page_size: number;
    /** 课表方案ID */
    schedule_id: number;
    /** 组织ID */
    org_id: number;
    /** 年级ID */
    grade_id?: number;
    /** 班级ID */
    class_id?: number;
    /** 对象类型（subject/teacher） */
    object?: string;
    /** 科目ID */
    subject_id?: number;
    /** 教师ID */
    teacher_id?: number;
  };

  type getSubjectsByOrgParams = {
    /** 组织id */
    org_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getTasksIdParams = {
    /** 任务ID */
    id: number;
  };

  type getTasksParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
    /** 任务状态 (pending/running/success/failed/completed) */
    status?: string;
  };

  type getTeacherGroupsByOrgParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getTeacherParams = {
    /** 教师ID */
    id: number;
  };

  type getTeacherRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type getTeacherRulesParams = {
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
    /** 课表方案ID */
    schedule_id?: number;
    /** 组织id */
    org_id?: number;
    /** 教师分组ID */
    teacher_group_id?: number;
    /** 教师ID */
    teacher_id?: number;
    /** 限制类型 (fixed/prefer/avoid/forbid) */
    limit?: string;
  };

  type getTeachersByOrgParams = {
    /** 组织ID */
    org_id: number;
    /** 页码 */
    current: number;
    /** 每页大小 */
    page_size?: number;
  };

  type getTeachingTasksIdParams = {
    /** 教学任务ID */
    id: number;
  };

  type Grade = {
    edu_stage?: EduStage;
    grade_id?: number;
    name?: string;
    org_id?: number;
    stage_id?: number;
  };

  type GradeWithClassCountRequest = {
    /** 班级数量 */
    class_count?: number;
    /** 年级名称 */
    grade_name?: string;
    /** 组织id */
    org_id?: number;
    /** 教育阶段id */
    stage_id?: number;
  };

  type H = true;

  type LoginParams = {
    username?: string;
    password?: string;
    phone?: string;
    type?: string;
  };

  type LoginResult = {
    currentAuthority?: string;
    status?: 'ok' | 'error';
    type?: string;
  };

  type NullString = {
    string?: string;
    /** Valid is true if String is not NULL */
    valid?: boolean;
  };

  type PageList = {
    /** 列表数据 */
    list?: any;
    /** 分页信息 */
    pagination?: Pagination;
  };

  type Pagination = {
    // /** 当前页码 */
    // page: number;
    // /** 每页数量 */
    // page_size?: number;
    // /** 总记录数 */
    // total?: number;

    /** 当前页码 */
    current: number;
    /** 每页数量 */
    page_size: number;
    /** 总记录数 */
    total: number;
  };

  type Province = {
    key?: string;
    label?: string;
  };

  type putApiV1SubjectGroupsIdParams = {
    /** 科目分组ID */
    id: number;
  };

  type putApiV1TeacherGroupsIdParams = {
    /** 教师分组ID */
    id: number;
  };

  type putSubjectConnectedDayRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type putSubjectDayLimitRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type putSubjectMutexRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type putSubjectPeriodLimitRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type putSubjectRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type putTasksIdParams = {
    /** 任务ID */
    id: number;
  };

  type putTasksIdProgressParams = {
    /** 任务ID */
    id: number;
  };

  type putTasksIdStatusParams = {
    /** 任务ID */
    id: number;
  };

  type putTeacherRulesIdParams = {
    /** 规则ID */
    id: number;
  };

  type putTeachingTasksIdParams = {
    /** 教学任务ID */
    id: number;
  };

  type RegisterUserReq = {
    captcha: string;
    password: string;
    phone: string;
  };

  // https://pro.ant.design/zh-CN/docs/request/
  type Response = {
    success: boolean; // if request is success
    data?: any; // response data
    errorCode?: string; // code for errorType
    errorMessage?: string; // message display to user
    showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
    traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
    host?: string; // onvenient for backend Troubleshooting: host of current access server
  };

  type Schedule = {
    schedule_id: number;
    /** 创建人用户uid */
    created_by?: number;
    /** 创建人用户昵称 */
    created_nickname?: string;
    /** 备注信息 */
    desc?: string;
    /** 课表名称, 如: 心远中学2023年第一学期课程表 */
    name?: string;
    /** 下午几节课, 默认: 4节 */
    num_afternoon_classes?: number;
    /** 一周休息日, 默认:2天 */
    num_days_off?: number;
    /** 上午几节课, 默认: 0节 */
    num_forenoon_classes?: number;
    /** 早读几节课, 默认: 0节 */
    num_morning_reading_classes?: number;
    /** 晚自习几节课, 默认: 0节 */
    num_night_classes?: number;
    /** 一周工作日, 默认:5天 */
    num_workdays?: number;
    /** 组织id */
    org_id?: number;
    /** 课表状态(未排课、排课中、已排课、排课冲突、已确认、已发布) */
    status?: 'pending' | 'running' | 'success' | 'failed' | 'completed' | 'published';
    /** 最后修改人用户uid */
    updated_by?: number;
    /** 最后修改人用户昵称 */
    updated_nickname?: string;
    created_at?: string;
    updated_at?: string;
  };

  type School = {
    /** 创建人用户uid */
    created_by?: number;
    /** 学校名称 */
    name?: string;
    /** 学校类型 */
    schoolType?: SchoolType;
    /** 学校id */
    school_id?: number;
    /** 组织id */
    org_id?: number;
    /** 科目简称 */
    short_name?: string;
    /** 学校类型id */
    type_id?: number;
    /** 最后修改人用户uid */
    updated_by?: number;
  };

  type SchoolInfo = {
    id?: number;
    name?: string;
  };

  type SchoolType = {
    name: string;
    /** 学校类型id */
    type_id?: number;
  };

  type SetFacilityReq = {
    class_id?: number;
    facility_id?: number;
    subject_id?: number;
  };

  type Subject = {
    /**科目id*/
    subject_id?: number;
    /** 组织id */
    org_id?: number;
    /** 科目名称 */
    name?: string;
    /** 科目简称 */
    short_name?: string;
    /**创建时间*/
    created_at?: string;
    /**修改时间*/
    updated_at?: string;
  };

  type SubjectConnectedDayRule = {
    class_id?: number;
    count?: number;
    created_at?: string;
    day_of_week?: number;
    deleted_at?: string;
    grade_id?: number;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
    updated_at?: string;
  };

  type SubjectDayLimitRule = {
    class_id?: number;
    count?: number;
    created_at?: string;
    day_of_week?: number;
    deleted_at?: string;
    grade_id?: number;
    object?: string;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
    type?: string;
    updated_at?: string;
  };

  type SubjectGroup = {
    name?: string;
    /** 组织id */
    org_id?: number;
    subject_group_id?: number;
    subjects?: Subject[];
  };

  type SubjectMutexRule = {
    created_at?: string;
    deleted_at?: string;
    mutex_subject_id?: number;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    updated_at?: string;
  };

  type SubjectPeriodLimitRule = {
    class_id?: number;
    count?: number;
    created_at?: string;
    grade_id?: number;
    object?: string;
    period_of_day?: number;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
    type?: string;
    updated_at?: string;
  };

  type SubjectRule = {
    count?: number;
    created_at?: string;
    deleted_at?: string;
    grade_id?: number;
    object?: string;
    period_of_day?: number;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
    type?: string;
    updated_at?: string;
  };

  type Task = {
    /** 创建时间 */
    created_at?: string;
    /** Progress 表示任务的当前进度，值范围是 0 到 100。0 表示任务刚创建，还未开始执行；1-99 表示任务执行中的进度；100 表示任务完成 */
    progress?: number;
    /** Status 表示任务的当前状态。可能的值有：pending（待处理）、running（运行中）、success（成功完成）、failed（执行失败）、completed（已完成） */
    status?: string;
    /** 任务数据(排课数据json) */
    task_data?: string;
    /** 任务id */
    task_id?: number;
    /** 修改时间 */
    updated_at?: string;
  };

  type Teacher = {
    is_active?: number;
    main_subject?: number;
    name?: string;
    phone?: NullString;
    /** 组织id */
    org_id?: number;
    short_name?: string;
    teacher_id?: number;
  };

  type TeacherGroup = {
    name?: string;
    /** 组织id */
    org_id?: number;
    teacher_group_id?: number;
    teachers?: Teacher[];
  };

  type TeacherRule = {
    created_at?: string;
    desc?: string;
    limit: 'fixed' | 'prefer' | 'avoid' | 'forbid';
    periods?: string;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    teacher_group_id?: number;
    teacher_id?: number;
    updated_at?: string;
  };

  type TeachingTask = {
    /** 班级id */
    class_id?: number;
    /** 课程类型: class_specific 表示班级特殊课, grade_shared 表示年级统一课 */
    course_type?: string;
    /** 年级id */
    grade_id?: number;
    /** 每周几节课 */
    num_classes_per_week?: number;
    /** 每周几次连堂课 1连堂课=2节课 */
    num_connected_classes_per_week?: number;
    /** 年级id */
    org_id?: number;
    /** 科目id */
    subject_id?: number;
    /** 单双周轮换科目 */
    subject_id_for_week?: number;
    /** 不同天上课科目id TODO: 这个和科目互斥有重复? */
    subject_id_on_diff_day?: number;
    /** 教师id */
    teacher_id?: number;
    /** 唯一id */
    teaching_task_id?: number;
    /** 单双周类型: single 表示单周，double 表示双周, 默认为空, 不做设置 */
    week_type?: string;
  };

  type updateClassParams = {
    /** 班级ID */
    id: number;
  };

  type UpdateClassReq = {
    grade_id?: number;
    name?: string;
    stage_id?: number;
  };

  type UpdateClassRuleReq = {
    class_id?: number;
    desc?: string;
    grade_id?: number;
    limit: 'fixed' | 'prefer' | 'avoid' | 'forbid';
    periods: string;
    rule_id?: number;
    schedule_id?: number;
    org_id?: number;
    subject_id?: number;
    teacher_id?: number;
  };

  type updateFacilityParams = {
    /** 教学场地ID */
    id: number;
  };

  type UpdateFacilityReq = {
    capacity?: number;
    name?: string;
    /** 场地类型 exclusive: 专用教学场所, shared: 共享教学场所 */
    type?: 'exclusive' | 'shared';
  };

  type updateGradeParams = {
    /** 年级ID */
    id: number;
  };

  type UpdateGradeReq = {
    name?: string;
    stage_id?: number;
  };

  type updateScheduleParams = {
    /** 课表方案ID */
    id: number;
  };

  type UpdateScheduleReq = {
    /** 备注信息 */
    desc?: string;
    /** 课表名称, 如: 心远中学2023年第一学期课程表 */
    name?: string;
    /** 下午几节课, 默认: 4节 */
    num_afternoon_classes?: number;
    /** 一周休息日, 默认:2天 */
    num_days_off?: number;
    /** 上午几节课, 默认: 0节 */
    num_forenoon_classes?: number;
    /** 早读几节课, 默认: 0节 */
    num_morning_reading_classes?: number;
    /** 晚自习几节课, 默认: 0节 */
    num_night_classes?: number;
    /** 一周工作日, 默认:5天 */
    num_workdays?: number;
    /** 组织id */
    org_id?: number;
    /** 状态 */
    status?: 'pending' | 'running' | 'success' | 'failed' | 'completed' | 'published';
    /** 最后修改人用户uid */
    updated_by?: number;
  };

  type updateSchoolParams = {
    /** 学校ID */
    id: number;
  };

  type UpdateSchoolReq = {
    name?: string;
    /** 科目简称 */
    short_name?: string;
    type_id?: number;
    /** 最后修改人用户uid */
    updated_by?: number;
  };

  type UpdateSubjectConnectedDayRuleReq = {
    class_id?: number;
    count: number;
    day_of_week: number;
    grade_id: number;
    schedule_id: number;
    org_id: number;
    subject_id: number;
    teacher_id?: number;
  };

  type UpdateSubjectDayLimitRuleReq = {
    class_id?: number;
    count: number;
    day_of_week: number;
    grade_id: number;
    object: 'subject' | 'teacher';
    schedule_id: number;
    org_id: number;
    subject_id?: number;
    teacher_id?: number;
    type: 'fixed' | 'min' | 'max';
  };

  type UpdateSubjectGroupReq = {
    name?: string;
    subject_ids?: string;
  };

  type UpdateSubjectMutexRuleReq = {
    mutex_subject_id: number;
    rule_id: number;
    schedule_id: number;
    org_id: number;
    subject_id: number;
  };

  type updateSubjectParams = {
    /** 科目ID */
    id: number;
  };

  type UpdateSubjectPeriodLimitRuleReq = {
    class_id?: number;
    count: number;
    grade_id: number;
    object: 'subject' | 'teacher';
    period_of_day: number;
    schedule_id: number;
    org_id: number;
    subject_id?: number;
    teacher_id?: number;
    type: 'fixed' | 'min' | 'max';
  };

  type UpdateSubjectReq = {
    name?: string;
    org_id?: number;
    /** 科目简称 */
    short_name?: string;
  };

  type UpdateSubjectRuleReq = {
    count: number;
    grade_id: number;
    object: 'subject' | 'teacher';
    period_of_day: number;
    rule_id: number;
    schedule_id: number;
    org_id: number;
    subject_id?: number;
    teacher_id?: number;
    type: 'fixed' | 'min' | 'max';
  };

  type UpdateTaskProgressReq = {
    progress: number;
  };

  type UpdateTaskReq = {
    /** 任务数据(排课数据json) */
    task_data: string;
  };

  type UpdateTaskStatusReq = {
    status: 'pending' | 'running' | 'success' | 'failed' | 'completed';
  };

  type UpdateTeacherGroupReq = {
    name?: string;
    teacher_ids?: string;
  };

  type updateTeacherParams = {
    /** 教师ID */
    id: number;
  };

  type UpdateTeacherReq = {
    is_active?: number;
    main_subject?: number;
    name: string;
    phone?: string;
    short_name?: string;
  };

  type UpdateTeacherRuleReq = {
    /** 描述 */
    desc?: string;
    /** 限制类型：fixed(固定),prefer(偏好),avoid(避免),forbid(禁止) */
    limit: 'fixed' | 'prefer' | 'avoid' | 'forbid';
    /** 时段 */
    periods?: string;
  };

  type UpdateTeachingTaskReq = {
    course_type?: 'single' | 'double';
    num_classes_per_week?: number;
    num_connected_classes_per_week?: number;
    subject_id_for_week?: number;
    subject_id_on_diff_day?: number;
    teacher_id?: number;
    week_type?: string;
  };

  type LoginRequest = {
    password?: string;
    phone?: string;
    type?: string;
  };

  type UserInfoResponse = {
    address?: string;
    avatar?: string;
    country?: string;
    created_at?: string;
    email?: string;
    geographic?: Geographic;
    is_active?: boolean;
    last_login?: string;
    name?: string;
    notify_count?: number;
    phone?: string;
    role?: string;
    school?: SchoolInfo;
    org_id?: number;
    signature?: string;
    title?: string;
    uid?: number;
    unread_count?: number;
    updated_at?: string;
  };
}
