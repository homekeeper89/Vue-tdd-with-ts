<template>
  <div class="home">
    <children></children>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import message from "@/components/message.vue";
import children from "@/components/children.vue";

@Component({
  components: {
    message,
    children
  }
})
export default class Home extends Vue {
  @Provide('message') msg: string = ""
}
</script>
