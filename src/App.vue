<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
    <count></count>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import count from '@/components/count.vue'

@Component({
  components:{
    count
  }
})
export default class App extends Vue{
  increase() {
    this.$store.dispatch('increaseCount')
  }
  decrease() {
    this.$store.dispatch('decreaseCount')
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
