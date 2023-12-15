<template>
  <CreshBaseIcon
    :name="'chart-line-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 32.539 32.939"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g
      transform="translate(-225.15 -385.057)"
      stroke="none"
      stroke-width="1"
      :fill="color"
      :class="{
        'color-path': true,
        [color]: true,
      }"
    >
      <path
        d="M256.689,418H225.15V386.057a1,1,0,0,1,2,0V416h29.539a1,1,0,0,1,0,2Z"
      />
      <path
        d="M230.171,409.995a1,1,0,0,1-.68-1.733l5.024-4.669a4.725,4.725,0,0,1,6.441.023l1.152,1.087a3.628,3.628,0,0,0,5.4-.468l7.4-9.912a1,1,0,0,1,1.6,1.2l-7.4,9.912a5.628,5.628,0,0,1-8.373.726l-1.152-1.087a2.717,2.717,0,0,0-3.706-.014l-5.025,4.67A1,1,0,0,1,230.171,409.995Z"
      />
    </g>
  </CreshBaseIcon>
</template>

<script lang="ts" setup>
import CreshBaseIcon from './CreshBaseIcon.vue'
import baseIconProps from './base-icon-props'

defineProps({
  ...baseIconProps,
})
</script>
