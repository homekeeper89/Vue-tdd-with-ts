<template>
  <div class="itemList">
    <item
      v-for="item in rednerList"
      :id="item.id"
      :title="item.title"
      :state="item.status"
      :key="item.id"
    ></item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import item from "@/components/item.vue";
import {mapGetters} from 'vuex';

@Component({
  components: {
    item
  },
  computed:{
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList'
    ])
  }
})
export default class ItemList extends Vue {

  rednerList: any[] = []
  created(){
    this.getTodoList(this.$route.params.status)
  }

  @Watch('$route.params.status')
  updateRoute(newValue:'active'|'clear'){
    this.getTodoList(newValue);
  }

  @Watch('$store.state.todoList', {deep:true})
  updateTodoList(){
    this.getTodoList(this.$route.params.status)
  }

  getTodoList(status:'active'|'clear'){
    if(!status){
      this.rednerList = this.allTodoList;
    }else if(status == 'active'){
      this.rednerList = this.activeTodoList
    }else{
      this.rednerList = this.clearTodoList
    }
  }
}
</script>

<style>
</style>