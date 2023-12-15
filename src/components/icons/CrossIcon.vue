<template>
  <CreshBaseIcon
    :name="'cross-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 18 18"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <g
        id="Icon/Symbol/Cross"
        transform="translate(-2.000000, -2.000000)"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
      >
        <g
          id="Icon"
          transform="translate(2.000000, 2.000000)"
        >
          <rect
            id="Rectangle"
            transform="translate(10.000000, 10.000000) rotate(45.000000) translate(-10.000000, -10.000000) "
            x="4"
            y="9"
            width="12"
            height="2"
            rx="1"
          />
          <path
            id="Rectangle"
            d="M5,9 L15,9 C15.5522847,9 16,9.44771525 16,10 C16,10.5522847 15.5522847,11 15,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z"
            transform="translate(10.000000, 10.000000) rotate(135.000000) translate(-10.000000, -10.000000) "
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
