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

@Component({
  components: {
    item
  }
})
export default class ItemList extends Vue {
  data: any[] = [
    { id: 0, title: "test", status: "active" },
    { id: 1, title: "test1", status: "active" },
    { id: 2, title: "test2", status: "clear" }
  ];
  rednerList: any[] = this.data;

  @Watch('$route.params.status')
  routeUpdate(newValue:string){
    if(!newValue){
      this.rednerList = this.data;
    }else if(newValue == 'active' || newValue == 'clear'){
      this.rednerList = this.data.slice().filter((item:any)=>{
        return item.status === newValue;
      })
    }
  }
}
</script>

<style>
</style>