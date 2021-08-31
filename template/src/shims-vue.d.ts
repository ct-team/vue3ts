/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'nat-plus/lib/http';

//  在 types/vue.d.ts 里 Vue 有构造函数类型
// declare module 'vue/types/vue' {
//   // 3. 声明为 Vue 补充的东西
//   interface Vue {
//     $interfaces: any;
//     $envdata: any;
//     $http: any;
//     $eventbus: any;
//     $gData: any;
//     $Toast: any;
//   }
// }

// interface Window {
//   CTPrefConfig: string;
//   HtmlInterface: any;
// }
