<template>
  <div class="input-group item">
      <span class="input-group-addon item-checkbox__checked">
        <input type="checkbox" aria-label="..." data-cy="item-checkbox" @change="changeStatus">
      </span>
      <input type="text" class="form-control item-input" aria-label="..." data-cy="item-input">
      <span class="input-group-btn item-checkbox__delete">
        <button class="btn btn-default" type="button" data-cy="item-checkbox__delete" @click="removeItem">X</button>
      </span>
  </div><!-- /input-gro up -->
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Item extends Vue{
  changeStatus(){

  }
  removeItem(){
    
  }
}
</script>

<style scoped>

</style>