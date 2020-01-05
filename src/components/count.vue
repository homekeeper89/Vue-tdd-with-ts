<template>
  <div data-qa="count-value">
    {{count}}
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Getter, State} from 'vuex-class'

export default class Count extends Vue{
  @State readonly count!:number;
}
</script>

<style>

</style>