<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import message from "@/components/message.vue";
import children from "@/components/children.vue";
import practiceMixin from '@/components/practiceMixin.vue';

@Component({
  components: {
    message,
    children,
  }
})
export default class Home extends Vue {
  
}
</script>
