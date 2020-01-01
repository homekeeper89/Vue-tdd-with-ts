<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hr>
    <message></message>
    <hr>
    <button class="home-btn" @click.prevent="changeMessage">메세지 변경</button>
    <children :parentMessge="message" @counter="counterss"></children>
    <div class="home-message">부모에서 숫자를 보여줌 : {{count}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import message from "@/components/message.vue";
import children from "@/components/children.vue";

@Component({
  components: {
    message,
    children
  }
})
export default class Home extends Vue {
  public message: string = "hello World";
  count: number = 0;

  changeMessage() {
    this.message = "change";
  }

  counterss(){
    this.count++;
  }
}
</script>
