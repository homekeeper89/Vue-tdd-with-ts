<template>
  
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Item extends Vue{
  @Prop() readonly id!:number;
  @Prop() readonly title!:string;
  @Prop() readonly status:'active'|"clear"
  
}
</script>

<style>

</style>