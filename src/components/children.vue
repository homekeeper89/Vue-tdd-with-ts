<template>
  <div>
    {{message}}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Emit, Inject} from 'vue-property-decorator';

@Component
export default class Children extends Vue {
  // ! 붙이면 초기화 하지 않는 것이 의도화 되었다.
  // 부모로부터 받아오는 것이므로 변경되선 안된다  = readonly
  @Inject() readonly message!: string;
}
</script>