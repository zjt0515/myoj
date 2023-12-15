import router from "@/router";
import store from "@/store";
import checkAccess from "@/access/checkAccess";
import AccessEnum from "@/access/accessEnum";
import accessEnum from "@/access/accessEnum";

//跳转之前检验是否有权限，(路由拦截)
router.beforeEach(async (to, from, next) => {
  console.log(store.state.user.loginUser);
  // if (to.meta?.access === "canAdmin") {
  //   if (store.state.user.loginUser?.role !== "admin") {
  //     next("/noAuth");
  //     return;
  //   }
  // }
  // todo: 自动登录
  const loginUser = store.state.user.loginUser;
  // if (!loginUser || !loginUser.userRole) {
  //   // awiat：等用户成功登录后再执行后续代码
  //   await store.dispatch("user/getLoginUser");
  // }

  const needAccess = to.meta.access ?? AccessEnum.NOT_LOGIN;

  // 页面需要登录，没登陆就得跳转到登录页面
  if (needAccess !== accessEnum.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login? redirect=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess as string)) {
      next("/noAuth");
      return;
    }
  }

  next(); // 路由放行
});
