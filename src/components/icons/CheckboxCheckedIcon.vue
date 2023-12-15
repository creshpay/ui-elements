<template>
  <CreshBaseIcon
    :name="'checkbox-checked-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icons/CheckboxChecked"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <path
        d="M7,4 L17,4 C18.6568542,4 20,5.34314575 20,7 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 Z"
        :fill="color"
        fill-rule="nonzero"
        :class="{
          'color-path': true,
          [color]: true,
        }"
      />
      <path
        d="M10.3608963,14.6212748 L16.7592474,7.9472271 C17.0430867,7.66338778 17.5032812,7.66338778 17.7871205,7.9472271 C18.0709598,8.23106642 18.0709598,8.69126089 17.7871205,8.97510022 L10.8748329,16.1630845 C10.5909935,16.4469238 10.1307991,16.4469238 9.84695975,16.1630845 L6.21287949,12.5290042 C5.92904017,12.2451649 5.92904017,11.7849704 6.21287949,11.5011311 C6.49671882,11.2172918 6.95691329,11.2172918 7.24075261,11.5011311 L10.3608963,14.6212748 Z"
        :fill="'white'"
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
