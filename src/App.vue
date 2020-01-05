<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button @click="increase" data-qa="increase">증가</button>
    <button @click="decrease" data-aq="decrease">감소</button>
    <count></count>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import count from '@/components/count.vue'

@Component({
  components:{
    count
  }
})
export default class App extends Vue {
  increase(){
    this.$store.dispatch('increaseCount')
  }
  created(){
    console.log(this.$store)
    this.$store.dispatch('setRootData', 'testData');
    this.$store.dispatch('moduleA/setRootData', 'I am ModuleA');
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
