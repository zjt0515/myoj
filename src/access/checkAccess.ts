/**
 * 定义通用权限校验方法
 * @param loginUser 登录用户
 * @param needAccess
 *
 */
import ACCESS_ENUM from "./accessEnum";
import AccessEnum from "./accessEnum";
import accessEnum from "./accessEnum";

const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;

  if (needAccess === accessEnum.NOT_LOGIN) {
    return true;
  }
  if (needAccess === accessEnum.USER) {
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  if (needAccess === accessEnum.ADMIN) {
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};
//如果只有一个函数，用ed就可以
export default checkAccess;
