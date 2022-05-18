import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import '@/assets/js/common';
import ElementUI, { Message } from 'element-ui';
import { Table, Select, Http, Permission } from 'ct-dart';
import permissionData from '@/config/permission';
import { getPermission } from '@/api/index.ts';

const showErrorMessage = (msg: string, type: string = 'error') => {
  Message({
    message: msg || 'error',
    type
  });
};

Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000
});

Vue.use(Table);
Vue.use(Select);
Vue.use(Permission);

Vue.use(Http, {
  interceptError: function(res: any) {
    showErrorMessage(res.Message);
  },
  interceptorSuccess: function(res: any) {
    // 对响应成功数据做点什么
    let data: any = JSON.stringify(res).toLowerCase();
    data = JSON.parse(data);

    if (data.code !== 0) {
      showErrorMessage(data.message);
    }
  },
  requestInterceptor: function() {},
  withCredentials: true,
  timeout: 60000
});

//设置BUS
const Bus = new Vue();
Vue.prototype.$bus = Bus;
Vue.prototype.$dart.permission.setDefaults({
  alias: permissionData,
  router: router
});

const render = function() {
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });
};

const _getPermisson = () => {
  getPermission(permissionData.pageId)
    .then((res: any) => {
      if (res.Code === 0) {
        const _permissionList = res.Data;
        const view: any = permissionData.view;

        if (_permissionList.indexOf(view) >= 0) {
          Vue.prototype.$dart.permission.success(_permissionList);
        } else {
          Vue.prototype.$dart.permission.fail();
        }
      } else {
        Vue.prototype.$dart.permission.fail();
      }
    })
    .catch(function() {
      Vue.prototype.$dart.permission.error();
    })
    .finally(() => {
      render();
    });
};

_getPermisson();
