<template>
  <CreshBaseIcon
    :name="'triangle-down-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icons/TriangleDown"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <path
        d="M7.81234752,5.64987802 L16.511957,12.6095656 C16.727588,12.7820704 16.7625486,13.0967166 16.5900439,13.3123475 C16.566978,13.3411799 16.5407893,13.3673685 16.511957,13.3904344 L7.81234752,20.350122 C7.59671656,20.5226268 7.28207037,20.4876661 7.1095656,20.2720351 C7.03864038,20.1833786 7,20.0732233 7,19.9596876 L7,6.04031242 C7,5.76417005 7.22385763,5.54031242 7.5,5.54031242 C7.61353575,5.54031242 7.723691,5.5789528 7.81234752,5.64987802 Z"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        fill-rule="nonzero"
        transform="translate(12.000000, 13.000000) rotate(-270.000000) translate(-12.000000, -13.000000) "
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
