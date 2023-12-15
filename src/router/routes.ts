import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import accessEnum from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
    ],
  },
  {
    path: "/",
    name: "题目",
    component: HomeView,
    meta: {
      access: accessEnum.NOT_LOGIN,
      hideInMenu: false,
    },
  },
  {
    path: "/admin",
    name: "管理",
    component: AdminView,
    meta: {
      access: accessEnum.ADMIN,
      hideInMenu: false,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      access: accessEnum.NOT_LOGIN,
      hideInMenu: false,
    },
  },
  {
    path: "/about",
    name: "关于",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      access: accessEnum.NOT_LOGIN,
      hideInMenu: false,
    },
  },
];
