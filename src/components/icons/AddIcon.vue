<template>
  <CreshBaseIcon
    :name="'add-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 16 17"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Icon/Tool/Add"
        transform="translate(-4.000000, -4.000000)"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
      >
        <g transform="translate(4.000000, 4.000000)">
          <rect
            x="0"
            y="7"
            width="16"
            height="3"
            rx="1.5"
          />
          <rect
            :transform="'translate(8.000000, 8.500000) rotate(90.000000) translate(-8.000000, -8.500000)'"
            x="0"
            y="7"
            width="16"
            height="3"
            rx="1.5"
          />
        </g>
      </g>
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
