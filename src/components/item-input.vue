<template>
  <div class="form-group header-form">
    <input type="text" 
        class="form-control"  
        placeholder="할일을 입력해주세요" 
        data-cy="header-form__input"
        @keyup.enter ="addItem"
        v-model="title"
        >
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {mapState} from 'vuex';

@Component({
  computed:{
    ...mapState([
      'todoList'
    ])
  }
})
export default class InputForm extends Vue{
  title:string = '';
  addItem(){
    this.$store.commit('addItem', {
      id:this.todoList.length + 1,
      title:this.title,
      status:'active'
    })
  }
}
</script>

<style scoped>

</style>