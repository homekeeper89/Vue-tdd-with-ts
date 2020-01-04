<template>
  <div class="accordion">
    <h3>I am acc</h3>
  </div>
</template>
<script lang="ts"> 
import {Vue, Component, Mixins} from 'vue-property-decorator';
import toggle from './toggle.vue';

@Component(
  {components:{
    toggle
  }}
)
export default class ToggleBtn extends Mixins(toggle) {
  mounted(){
    console.log(this)
  }
}
</script>
