<template>
  <div class="form-group header-form">
    <input type="text" 
        class="form-control"  
        placeholder="할일을 입력해주세요" 
        data-cy="header-form__input"
        @keyup.enter ="addItem"
        >
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class InputForm extends Vue{
  addItem(){
    
  }
}
</script>

<style scoped>

</style>