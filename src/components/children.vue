<template>
  <div class="children-info">{{parentMessge}}</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Children extends Vue {
  @Prop() public parentMessge?: string;
}
</script>