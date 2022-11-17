<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, PropType } from 'vue';
import { uuidGenerator } from '../../utils';

const porps = defineProps({
  autoCompleteList: {
    type: Array as PropType<string[]>,
    default: () => [],
  }
});

const prefix = `input`;
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
  <datalist v-if="porps.autoCompleteList" :id="id">
    <option v-for="item, idx in porps.autoCompleteList" :key="idx">
      {{ item }}
    </option>
  </datalist>
</template>

<style scope>
input {
  padding: 10px;
}
</style>
