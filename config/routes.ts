/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },

  // ================= 自定义 ==================
  // 基础数据
  {
    path: '/basic-data',
    name: 'basic-data',
    icon: 'smile',
    routes: [
      {
        path: '/basic-data',
        redirect: '/basic-data/schedule',
      },
      {
        name: 'schedule',
        path: '/basic-data/schedule',
        component: './basic-data/schedule',
      },
      {
        name: 'subject',
        path: '/basic-data/subject',
        component: './basic-data/subject',
      },
      {
        name: 'teacher',
        path: '/basic-data/teacher',
        component: './basic-data/teacher',
      },
      {
        name: 'grade-class',
        path: '/basic-data/grade-class',
        component: './basic-data/grade-class',
      },
      {
        name: 'facility',
        path: '/basic-data/facility',
        component: './basic-data/facility',
      },
    ],
  },

  // 课务安排
  {
    path: '/teaching-task',
    name: 'teaching-task',
    icon: 'smile',
    routes: [
      {
        name: 'setting',
        path: '/teaching-task/setting',
        component: './teaching-task/teaching-task-setting',
      },
    ],
  },

  // 排课规则定义
  {
    path: '/rule',
    name: 'rule',
    icon: 'smile',
    routes: [
      {
        name: 'class',
        path: '/rule/class',
        component: './rule/class-rule',
      },
      {
        name: 'teacher',
        path: '/rule/teacher',
        component: './rule/teacher-rule',
      },
      {
        name: 'subject',
        path: '/rule/subject',
        component: './rule/subject-rule',
      },
      {
        name: 'teacher-special',
        path: '/rule/teacher-special',
        component: './rule/teacher-special-rule',
      },
      {
        name: 'subject-special',
        path: '/rule/subject-special',
        component: './rule/subject-special-rule',
      },
    ],
  },

  // 智能排课
  {
    path: '/course-schedule',
    name: 'course-schedule',
    icon: 'smile',
    component: './course-schedule',
  },
];
