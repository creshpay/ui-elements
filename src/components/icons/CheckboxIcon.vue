<template>
  <CreshBaseIcon
    :name="'checkbox-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icons/Checkbox"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <path
        d="M7,4 L17,4 C18.6568542,4 20,5.34314575 20,7 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 Z M7,5 C5.8954305,5 5,5.8954305 5,7 L5,17 C5,18.1045695 5.8954305,19 7,19 L17,19 C18.1045695,19 19,18.1045695 19,17 L19,7 C19,5.8954305 18.1045695,5 17,5 L7,5 Z"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
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
