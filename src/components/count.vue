<template>
  <div>
    {{$store.getters.count}}
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'
export default class Count extends Vue{
  
}
</script>

<style>

</style>