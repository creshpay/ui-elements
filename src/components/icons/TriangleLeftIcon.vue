<template>
  <CreshBaseIcon
    :name="'triangle-left-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icons/TriangleLeft"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <path
        d="M7.81234752,4.64987802 L16.511957,11.6095656 C16.727588,11.7820704 16.7625486,12.0967166 16.5900439,12.3123475 C16.566978,12.3411799 16.5407893,12.3673685 16.511957,12.3904344 L7.81234752,19.350122 C7.59671656,19.5226268 7.28207037,19.4876661 7.1095656,19.2720351 C7.03864038,19.1833786 7,19.0732233 7,18.9596876 L7,5.04031242 C7,4.76417005 7.22385763,4.54031242 7.5,4.54031242 C7.61353575,4.54031242 7.723691,4.5789528 7.81234752,4.64987802 Z"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        fill-rule="nonzero"
        transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
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
