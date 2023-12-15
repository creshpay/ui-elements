<template>
  <CreshBaseIcon
    :name="'chevron-right-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 22 20"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icon/Symbol/Stats"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Icon/Tool/Chevron/Right"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <!-- eslint-disable max-len -->
        <!-- eslint-disable vue/max-len -->
        <path
          id="Shape"
          d="M12,13.5857864 L16.2928932,9.29289322 C16.6834175,8.90236893 17.3165825,8.90236893 17.7071068,9.29289322 C18.0976311,9.68341751 18.0976311,10.3165825 17.7071068,10.7071068 L12.7071068,15.7071068 C12.3165825,16.0976311 11.6834175,16.0976311 11.2928932,15.7071068 L6.29289322,10.7071068 C5.90236893,10.3165825 5.90236893,9.68341751 6.29289322,9.29289322 C6.68341751,8.90236893 7.31658249,8.90236893 7.70710678,9.29289322 L12,13.5857864 Z"
          :fill="color"
          :class="{
            'color-path': true,
            [color]: true,
          }"
          transform="translate(12.000000, 10.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.500000) "
        />
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
