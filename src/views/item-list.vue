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
    this.$store.dispatch('initData')
  }

  @Watch('$route.params.status')
  routeUpdate(newValue:'active'|'clear'){
    this.initRenderList(newValue);
  }

  initRenderList(status:'active'|'clear'){
    if(!status){
      this.rednerList = this.allTodoList;
    }else if(status == 'active'){
      this.rednerList = this.activeTodoList
    }else{
      this.rednerList = this.clearTodoList
    }
  }
  @Watch('$store.state.todoList', {deep:true})
  updateTodoList(){
    this.initRenderList(this.$route.params.status);
  }
}
</script>

<style>
</style>