<template>
  <div>
    <div class="children-info">
      {{parentMessge}}
    </div>
    <div class="children-alert">
      {{alertMessage}}
    </div>
    <div class="children-btn">
      <button class="children-btn-counter" @click = "clickCount">부모 숫자 증가시키는 버튼 </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';

@Component
export default class Children extends Vue {
  @Prop() public parentMessge?: string;
  alertMessage: string = '';
  checkCount: number = 0;
  //immedate true : 해당 속성 현재값 바로 호출, deep 은 안에 객체 변화까지 감시
  // {immediate: true, deep:true}
  @Watch('parentMessge')
  update(value:string, oldValue:string){
    this.alertMessage = 'message updated'
  }
  
  @Emit('counter')
  clickCount(){
    console.log('자식임')
    this.checkCount += 20;
  }
}
</script>