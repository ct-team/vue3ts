<template>
  <div>
    <ct-button></ct-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ctButton from './Button.vue';

@Component({
  components: {
    ctButton
  }
})
export default class Home extends Vue {
  // data
}
</script>
