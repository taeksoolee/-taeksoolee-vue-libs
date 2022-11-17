<script lang="ts" setup>
import { ButtonHTMLAttributes, type PropType } from 'vue'
import { type ThemeType } from '../../theme';

const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button' as ButtonHTMLAttributes['type'],
  },
  varient: {
    type: String as PropType<ThemeType>,
    default: 'primary' as ThemeType
  }
});

console.log('props', props);
</script>

<template>
  <button :type="props.type" :class="[`btn-${props.varient}`]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import "../../styles/_variables.scss";

@each $type, $color in $theme-colors {
  .btn-#{$type} {
    position: relative;

    overflow: hidden;

    padding: 10px;
    background-color: $color;
    /* border: 1px solid $color; */
    border: none;
    outline: none;
    border-radius: 10px;
    color: $light-color;

    &:before {
      content: "";
      
      position: absolute;
      top: 50%;
      left: 50%;
      
      display: block;
      width: 0;
      padding-top: 0;
        
      border-radius: 100%;
      
      background-color: rgba(236, 240, 241, .4);
      
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    &:active:before {
      width: 120%;
      padding-top: 120%;
      
      transition: width .2s ease-out, padding-top .2s ease-out;
    }

    &:hover {
      top: -2px;
      left: -2px;
      transition: top 1s ease-out, left 1s ease-out;
      box-shadow: 6px 6px 6px -1px $dark-color;
    }
  }
}
</style>
