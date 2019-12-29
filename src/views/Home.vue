<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <message></message>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import message from '@/components/message.vue'

@Component({
  components:{
    message,
  }
})
export default class Home extends Vue{}
</script>
