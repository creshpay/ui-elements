<template>
  <CreshBaseIcon
    :name="'document-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 16 20"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icon/Document"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <g
        transform="translate(-4.000000, -2.000000)"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        fill-rule="nonzero"
      >
        <path
          d="M14.1481731,2 C14.7514084,2 15.3224183,2.27227284 15.7021601,2.74098276 L19.553987,7.49523764 C19.8425433,7.85139856 20,8.29587149 20,8.75425488 L19.9998461,9.37493245 C19.9999486,9.3832761 20,9.39163205 20,9.4 L20,18 C20,20.209139 18.209139,22 16,22 L8,22 C5.790861,22 4,20.209139 4,18 L4,6 C4,3.790861 5.790861,2 8,2 L14.1481731,2 Z M16.902,7.4 L15.625,5.823 L15.625,7.4 L16.902,7.4 Z M8,4 C6.8954305,4 6,4.8954305 6,6 L6,18 C6,19.1045695 6.8954305,20 8,20 L16,20 C17.1045695,20 18,19.1045695 18,18 L18,9.4 L15.625,9.4 C14.5204305,9.4 13.625,8.5045695 13.625,7.4 L13.625,4 L8,4 Z M13,14.5 L13.4,14.2 C13.8418278,13.8686292 14.4686292,13.9581722 14.8,14.4 C15.1313708,14.8418278 15.0418278,15.4686292 14.6,15.8 L12.608081,17.2939392 C12.4395864,17.4231842 12.2287638,17.5 12,17.5 C11.7712362,17.5 11.5604136,17.4231842 11.391919,17.2939392 L9.4,15.8 C8.9581722,15.4686292 8.86862915,14.8418278 9.2,14.4 C9.53137085,13.9581722 10.1581722,13.8686292 10.6,14.2 L11,14.5 L11,10.6113944 C11,10.0591097 11.4477153,9.61139444 12,9.61139444 C12.5522847,9.61139444 13,10.0591097 13,10.6113944 L13,14.5 Z"
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
