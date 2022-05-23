import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/profile/index'
  },
  {
    path: '/school',
    component: Layout,
    name: 'SchoolPage',
    meta: {
      title: '校建管理',
      icon: 'users'
    },
    children: [
      {
        path: 'student/list',
        component: () => import('@/views/school/student/list'),
        name: 'UserStudentPageList',
        meta: { title: '学生列表', noCache: true }
      },
      {
        path: 'student/edit',
        component: () => import('@/views/school/student/edit'),
        name: 'UserStudentEdit',
        meta: { title: '学生编辑', noCache: true, activeMenu: '/school/student/list' },
        hidden: true
      },
      {
        path: 'class/list',
        component: () => import('@/views/school/class/list'),
        name: 'classPageList',
        meta: { title: '班级列表', noCache: true }
      },
      {
        path: 'class/edit',
        component: () => import('@/views/school/class/edit'),
        name: 'classEdit',
        meta: { title: '班级编辑', noCache: true, activeMenu: '/school/class/list' },
        hidden: true
      },
      {
        path: 'major/list',
        component: () => import('@/views/school/major/list'),
        name: 'majorPageList',
        meta: { title: '专业列表', noCache: true }
      },
      {
        path: 'major/edit',
        component: () => import('@/views/school/major/edit'),
        name: 'majorEdit',
        meta: { title: '专业编辑', noCache: true, activeMenu: '/school/major/list' },
        hidden: true
      },
      {
        path: 'faculty/list',
        component: () => import('@/views/school/faculty/list'),
        name: 'facultyPageList',
        meta: { title: '院系列表', noCache: true }
      },
      {
        path: 'faculty/edit',
        component: () => import('@/views/school/faculty/edit'),
        name: 'facultyEdit',
        meta: { title: '院系编辑', noCache: true, activeMenu: '/school/faculty/list' },
        hidden: true
      }
    ]
  },
  // {
  //   path: '/exam',
  //   component: Layout,
  //   name: 'ExamPage',
  //   meta: {
  //     title: '卷题管理',
  //     icon: 'exam'
  //   },
  //   children: [
  //     {
  //       path: 'paper/list',
  //       component: () => import('@/views/exam/paper/list'),
  //       name: 'ExamPaperPageList',
  //       meta: { title: '试卷列表', noCache: true }
  //     },
  //     {
  //       path: 'paper/edit',
  //       component: () => import('@/views/exam/paper/edit'),
  //       name: 'ExamPaperEdit',
  //       meta: { title: '试卷编辑', noCache: true, activeMenu: '/exam/paper/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'question/list',
  //       component: () => import('@/views/exam/question/list'),
  //       name: 'ExamQuestionPageList',
  //       meta: { title: '题目列表', noCache: true }
  //     },
  //     {
  //       path: 'question/edit/singleChoice',
  //       component: () => import('@/views/exam/question/edit/single-choice'),
  //       name: 'singleChoicePage',
  //       meta: { title: '单选题编辑', noCache: true, activeMenu: '/exam/question/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'question/edit/multipleChoice',
  //       component: () => import('@/views/exam/question/edit/multiple-choice'),
  //       name: 'multipleChoicePage',
  //       meta: { title: '多选题编辑', noCache: true, activeMenu: '/exam/question/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'question/edit/trueFalse',
  //       component: () => import('@/views/exam/question/edit/true-false'),
  //       name: 'trueFalsePage',
  //       meta: { title: '判断题编辑', noCache: true, activeMenu: '/exam/question/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'question/edit/gapFilling',
  //       component: () => import('@/views/exam/question/edit/gap-filling'),
  //       name: 'gapFillingPage',
  //       meta: { title: '填空题编辑', noCache: true, activeMenu: '/exam/question/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'question/edit/shortAnswer',
  //       component: () => import('@/views/exam/question/edit/short-answer'),
  //       name: 'shortAnswerPage',
  //       meta: { title: '简答题编辑', noCache: true, activeMenu: '/exam/question/list' },
  //       hidden: true
  //     }
  //   ]
  // },
  // {
  //   path: '/task',
  //   component: Layout,
  //   name: 'TaskPage',
  //   meta: {
  //     title: '任务管理',
  //     icon: 'task'
  //   },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/task/list'),
  //       name: 'TaskListPage',
  //       meta: { title: '任务列表', noCache: true }
  //     },
  //     {
  //       path: 'edit',
  //       component: () => import('@/views/task/edit'),
  //       name: 'TaskEditPage',
  //       meta: { title: '任务创建', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/education',
    component: Layout,
    name: 'EducationPage',
    meta: {
      title: '教育管理',
      icon: 'education'
    },
    alwaysShow: true,
    children: [
      {
        path: 'subject/list',
        component: () => import('@/views/education/subject/list'),
        name: 'EducationSubjectPage',
        meta: { title: '学科列表', noCache: true }
      },
      {
        path: 'subject/edit',
        component: () => import('@/views/education/subject/edit'),
        name: 'EducationSubjectEditPage',
        meta: { title: '学科编辑', noCache: true, activeMenu: '/education/subject/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/answer',
    component: Layout,
    name: 'AnswerPage',
    meta: {
      title: '成绩管理',
      icon: 'answer'
    },
    alwaysShow: true,
    children: [
      {
        path: 'list',
        component: () => import('@/views/answer/list'),
        name: 'AnswerPageList',
        meta: { title: '答卷列表', noCache: true }
      }
    ]
  },
  // {
  //   path: '/message',
  //   component: Layout,
  //   name: 'MessagePage',
  //   meta: {
  //     title: '消息中心',
  //     icon: 'message'
  //   },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/message/list'),
  //       name: 'MessageListPage',
  //       meta: { title: '消息列表', noCache: true }
  //     },
  //     {
  //       path: 'send',
  //       component: () => import('@/views/message/send'),
  //       name: 'MessageSendPage',
  //       meta: { title: '消息发送', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/log',
  //   component: Layout,
  //   name: 'LogPage',
  //   meta: {
  //     title: '日志中心',
  //     icon: 'log'
  //   },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'user/list',
  //       component: () => import('@/views/log/list'),
  //       name: 'LogUserPage',
  //       meta: { title: '用户日志', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/profile',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人简介', icon: 'user', noCache: true }
      }
    ]
  },
  { path: '*',
    hidden: true,
    component: () => import('@/views/error-page/404'),
    meta: { title: '404', noCache: true }
  }
]

const router = new Router({
  routes: constantRoutes
})

export {
  constantRoutes,
  router
}
