<template>
  <div class="home">
    {{ http }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import currentInstance from '../hooks/currentinstance';

export default defineComponent({
  name: 'Honme',
  components: { HelloWorld },
  setup() {
    const { globalProperties } = currentInstance();
    let http = ref('');

    function httpTest() {
      globalProperties.$natHttp
        .ajax({
          url: 'http://yapi.tcy365.org:3000/mock/405/api/agent/getAgentInfo',
          timeout: 5000,
        })
        .then((res: any) => {
          http.value = res.Data.AgentName;
        })
        .catch((res: any) => {
          console.log(res, 'error');
        });
    }
    httpTest();
    return {
      http,
    };
  },
});
</script>
