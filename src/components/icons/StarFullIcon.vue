<template>
  <CreshBaseIcon
    :name="'star-full-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g
      id="Icons/Star-Full"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g>
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
        />
        <path
          class="icon-path"
          d="M23.9372082,9.74437207 C23.7791857,9.25536972 23.3481489,8.90916192 22.8402066,8.86291489 L15.9121224,8.23001246 L13.1741046,1.77975058 C12.9719531,1.3058568 12.5119851,1 12.0000144,1 C11.4880437,1 11.0278926,1.3058568 10.8270229,1.77975058 L8.08900505,8.23001246 L1.15982226,8.86291489 C0.651879921,8.91008317 0.221758627,9.25629096 0.0628206567,9.74437207 C-0.0952017843,10.2333745 0.050735488,10.7697294 0.434896643,11.1087514 L5.67197601,15.7295843 L4.12782405,22.5730379 C4.01484627,23.0762276 4.20894098,23.5965527 4.62386432,23.8983559 C4.8468902,24.0614181 5.10891809,24.1428571 5.37186155,24.1428571 C5.59781717,24.1428571 5.82395589,24.0824228 6.02592426,23.9608171 L12.0000144,20.366447 L17.9730059,23.9608171 C18.4111839,24.2242961 18.9621567,24.2001592 19.3761645,23.8983559 C19.7910878,23.5965527 19.9851826,23.0762276 19.8722048,22.5730379 L18.3280528,15.7295843 L23.5651322,11.1087514 C23.9491102,10.7697294 24.0952306,10.23448 23.9372082,9.74437207 Z"
          :fill="color"
          :class="{
            'color-path': true,
            [color]: true,
          }"
          fill-rule="nonzero"
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
