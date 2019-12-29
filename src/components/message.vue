<template>
  <div>
    <input type="text" v-model="message" message-msg>
    <div class="message-contents">{{message}}</div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component
export default class Message extends Vue{
  message: string = 'Please text some message'
}
</script>