<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <my-checkbox v-model="checked" @myCustomClick="change"></my-checkbox>
    <div>
      {{text}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import message from "@/components/message.vue";
import children from "@/components/children.vue";
import myCheckbox from '@/components/my-checkbox.vue';
import practiceMixin from '@/components/practiceMixin.vue';

@Component({
  components: {
    message,
    children,
    myCheckbox
  }
})
export default class Home extends Vue {
  checked:boolean = false;
  text:string = "동의하지 않습니다."

  change(checked:boolean){
    this.checked = checked;
    this.text = checked ? "동의합니다" : "동의하지 않습니다."
  }
}
</script>
