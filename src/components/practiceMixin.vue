<template>
  <div>
    <accordion></accordion>
    <dropdown></dropdown>
  </div>
</template>

<script lang="ts">
import accordion from './accordion.vue'
import dropdown from './dropdown.vue'
import {Vue, Component} from 'vue-property-decorator'

@Component({
  components:{
    accordion,
    dropdown
  }
})
export default class practiceMixin extends Vue{

}
</script>