//只能输入正整数
export function checkInteger(val: string) {
  return val.replace(/[^\d]|^[0]/g, '');
}

//只能输入数字
export function checkNumber(val: string) {
  return val.replace(/[^\d]/g, '');
}

//只能输入数字和换行符号
export function checkProcessUserIds(val: string) {
  return val
    .replace(/^[(\n)|(\r\n)]|[^\d|(\n)|(\r\n)]/g, '')
    .replace(/[(\n)|(\r\n)]+/g, '\n');
}

//只能输入数字和字母和汉字
export function checkNumberAndCharacterAndChinese(val: string) {
  return val.replace(/[^\da-zA-Z\u4e00-\u9fa5]/g, '');
}

//只能输入数字和字母
export function checkNumberAndCharacter(val: string) {
  return val.replace(/[^\da-zA-Z]/g, '');
}

//获取文件后缀
export function getSuffix(val: any) {
  return val
    .split('.')
    .pop()
    .toLowerCase();
}

//获取地址栏参数
export function getParam(name: any, src: any = '') {
  const re = new RegExp('(?:^|\\?|#|&)' + name + '=([^&#]*)(?:$|&|#)', 'i');
  const m = re.exec(src || location.href);

  return m ? decodeURI(m[1]) : '';
}
