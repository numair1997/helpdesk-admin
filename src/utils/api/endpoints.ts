export const API_ENDPOINTS = {
  REGISTER: '/auth/merchant/signup',
  LOGIN: '/auth/login/admin',
  LOGOUT: '/auth/merchant/logout',
  VERIFY_EMAIL: '/auth/merchant/verify',
  FORGOT_PASSWORD_EMAIL: '/auth/merchant/forgot/password',
  FORGOT_PASSWORD_VERIFY_USER: '/auth/merchant/verify/forgot',
  RESET_PASSWORD: '/auth/merchant/reset',
  ME: '/admin/find',
  CHECK_NETWORK: '/auth/merchant/ok',
  ROLES: '/role/all',
  CREATE_ROLE: '/role/create',
  UPDATE_ROLE: '/role/update',
  DELETE_ROLE: '/role/delete',
  SINGLE_ROLE: '/role/get',
  ADMIN_STAFFS: '/admin/findAll',
  ADMIN_STAFF: '/admin/findById',
  CREATE_ADMIN_STAFF: '/auth/register/admin',
  UPDATE_ADMIN_STAFF: '/admin/updatestaff',
  DELETE_ADMIN_STAFF: '/admin/deletestaff',
  NOTIFICATIONS: '/notification/merchant',
  READ_NOTIFICATION: '/notification',
  READ_ALL_NOTIFICATIONS: '/notification/read/all',
  GENERAL_UPLOAD: '/upload/general',
  UPDATE_PROFILE: '/user/update',
  UPDATE_PASSWORD: 'auth/update-profile',
  USER_ANALYTICS: 'dashboard/user',
  ADMIN_ANALYTICS: 'dashboard/super',
  SETTINGS: '/setting/get',
  UPDATE_SETTINGS: 'setting/update',
  EXCEL_EXPORT: 'user/export',
  USER_STATUS: 'users/ban',
  USERS: '/users/findAll',
  SINGLE_USER: '/users/find',
  HELPERS_LIST: 'helpers/findAll',
  SINGLE_HELPER: 'helpers/find',
  HELPER_STATUS: 'helper/ban',
  CREATE_PERMISSION: 'permission/create',
  DELETE_PERMISSION: '/permission/delete',
  PERMISSIONS: '/permission/all',
  SINGLE_PERMISSION: '/permission/get',
  UPDATE_PERMISSION: '/permission/update',
  PARENT_CATEGORIES: '/category/getOnlyCategories',
  CREATE_PARENT_CATEGORY: '/category/createCategory',
  GENERAl_SINGLE_UPLOAD: '/upload',
  SUB_CATEGORIES: '/category/getOnlySubCategories',
  CREATE_SUB_CATEGORY: '/category/createSubCategory',
  NESTED_SUB_CATEGORIES: '/category/getAllNestedCategories',

}
