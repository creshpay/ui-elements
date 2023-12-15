<template>
  <CreshBaseIcon
    :name="'attachment-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 74 74"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g>
      <path
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        d="M39.132,31.878v29.144c0,3.41,2.774,6.184,6.185,6.184s6.184-2.773,6.184-6.184V27.955h-0.028   c-0.293-5.195-4.601-9.336-9.87-9.336c-5.268,0-9.574,4.141-9.867,9.336h-0.028v32.507c0,7.649,6.038,13.873,13.462,13.873   c7.423,0,13.461-6.224,13.461-13.873V26.834h-3.4v33.628c0,5.774-4.514,10.474-10.061,10.474c-5.548,0-10.063-4.699-10.063-10.474   V28.516c0-3.582,2.915-6.496,6.496-6.496c3.583,0,6.498,2.914,6.498,6.496v32.506c0,1.535-1.249,2.783-2.783,2.783   c-1.535,0-2.785-1.248-2.785-2.783V31.878H39.132z"
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
