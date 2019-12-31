<template>
  <div>
    <div class="children-info">
      {{parentMessge}}
    </div>
    <div class="children-alert">
      {{alertMessage}}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Children extends Vue {
  @Prop() public parentMessge?: string;
  alertMessage: string = '';
  //immedate true : 해당 속성 현재값 바로 호출, deep 은 안에 객체 변화까지 감시
  // {immediate: true, deep:true}
  @Watch('parentMessge')
  update(value:string, oldValue:string){
    this.alertMessage = 'message updated'
  }
}
</script>