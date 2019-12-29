<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <message></message>
    <children :parentMessge = "message"></children>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import message from '@/components/message.vue';
import children from '@/components/children.vue';

@Component({
  components: {
    message, children,
  },
})
export default class Home extends Vue {
  public message: string = 'hello World';
}
</script>
