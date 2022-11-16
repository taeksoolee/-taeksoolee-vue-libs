<template>
  <button type="submit" :disabled="disabled" class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
  },
  name: "HSubmitButton",
  setup() {},
});
</script>

<style scoped>
.btn {
  padding: 5px;
}
</style>
