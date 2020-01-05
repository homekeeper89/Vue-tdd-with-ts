<template>
  <div id="app">
    <appHeader/>
    <itemInput/>
    <item/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import appHeader from '@/components/header.vue';
import item from '@/components/item.vue';
import itemInput from '@/components/item-input.vue';

@Component({
  components:{
    appHeader, item, itemInput
  }
})
export default class App extends Vue {

}
</script>
<style>
  #app{
    padding:100px;
  }
</style>