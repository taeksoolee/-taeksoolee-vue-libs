<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, PropType } from 'vue';
import { uuidGenerator } from '../../utils';

type Options = string[]

const porps = defineProps({
  options: Array as PropType<Options>,
})

const prefix = `auto-complete-input`;
const id = ref('');

onMounted(() => {
  id.value = uuidGenerator.get(prefix);
});

onBeforeUnmount(() => {
  uuidGenerator.del(id.value);
});
</script>

<template>
  <input :list="id" />
  <datalist :id="id">
    <option v-for="option, idx in porps.options" :key="idx">
      {{ option }}
    </option>
  </datalist>
</template>