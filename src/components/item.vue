<template>
  <div class="input-group item">
    <span class="input-group-addon item-checkbox__checked">
      <input
        type="checkbox"
        data-cy="item-checkbox"
        @change="changeStatus"
        :checked="status == 'clear'"
      />
    </span>
    <input
      type="text"
      class="form-control item-input"
      aria-label="..."
      data-cy="item-input"
      :value="title"
    />
    <span class="input-group-btn item-checkbox__delete">
      <button
        class="btn btn-default"
        type="button"
        data-cy="item-checkbox__delete"
        @click="removeItem"
      >X</button>
    </span>
  </div>
  <!-- /input-gro up -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  @Prop() readonly id!: number;
  @Prop() readonly title!: string;
  @Prop() readonly status!: 'active' | 'clear';

  changeStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked; 
    if (checked) {
      this.$store.commit('changeItemStatus', { id: this.id, status: 'clear' });
    } else {
      this.$store.commit('changeItemStatus', { id: this.id, status: 'active' });
    }
  }
  removeItem() {
    this.$store.commit('removeItemStatus', this.id);
  }
}
</script>

<style scoped>
</style>