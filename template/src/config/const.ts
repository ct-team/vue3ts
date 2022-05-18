/*
 **项目中使用到的常量在此处定义
 */
import envConfig from './env-options.ts';
import Interface from '@/api/interface';
const envKey = `is${window.CTPrefConfig.env}`;
const con: any = {
  tableMessage: '没有查询到符合条件的记录', // table没有数据的提示语句
  errorMessage: '验证失败，请检查输入项', // 校验项没有通过的浮窗提示
  httpErrorMessage: '网络错误', // 请求出错提示语句
  pageIndex: 1,
  pageSize: 10,
  total: 0,
  FILE_LIMIT: 15, // 只能上传15个文件
  downloadDomain: envConfig[envKey].downloadDomain,
  userHost: envConfig[envKey].userHost,
  buttonConfig: [
    {
      label: '用户ID导入',
      uploadUrl: Interface.userIdImport,
      export: Interface.export
    },
    {
      label: '手机号导入',
      uploadUrl: Interface.userPhoneImport,
      export: Interface.export
    }
  ]
};

export default con;
