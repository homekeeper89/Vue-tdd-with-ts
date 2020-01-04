<template>
  <div class="dropdown">
    <select class="dropdown-select" >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Mixins} from 'vue-property-decorator';
import toggle from './toggle.vue'
@Component({
  components:{
    toggle
  }
})
export default class dropdown extends Mixins(toggle) {

}
</script>

<style>

</style>