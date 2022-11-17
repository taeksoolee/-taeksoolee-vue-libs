<script lang="ts" setup>
const props = defineProps({
  title: {
    default: String,
    require: false,
  }
});

</script>

<template>
  <div>
    <h1>{{props.title}}</h1>
    <hr />
    <slot></slot>
  </div>
</template>

<style>

</style>