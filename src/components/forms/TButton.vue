<script lang="ts" setup>
import { ButtonHTMLAttributes, type PropType } from 'vue'
import { type ThemeType } from '@/theme';

const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default(): ButtonHTMLAttributes['type'] {
      return 'button';
    },
  },
  varient: {
    type: String as PropType<ThemeType>,
    default(): ThemeType {
      return 'primary';
    }
  }
});
</script>

<template>
  <button 
    :type="props.type" 
    :class="[
      props.varient,
    ]"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

button {
  padding: 5px;
}
.primary {
  background-color: $primary-color;
  color: $color;
}

.secondary {
  color: blue;
}
</style>
