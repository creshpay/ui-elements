<template>
  <CreshBaseIcon
    :name="'phone-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 128 128"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g>
      <g>
        <path
          :d="path1"
          :fill="color"
          :class="{
            'color-path': true,
            [color]: true,
          }"
        />
      </g>
      <path
        clip-rule="evenodd"
        fill="none"
        fill-rule="evenodd"
        :stroke="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        :d="path2"
        stroke-miterlimit="10"
        stroke-width="3"
      />
      <rect
        clip-rule="evenodd"
        fill="none"
        fill-rule="evenodd"
        height="71.594"
        :stroke="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        stroke-miterlimit="10"
        stroke-width="3"
        width="53.815"
        x="37.537"
        y="25.67"
      />
      <g>
        <path
          :d="path3"
          :fill="color"
          :class="{
            'color-path': true,
            [color]: true,
          }"
          fill-rule="evenodd"
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
/* eslint-disable max-len */
/* eslint-disable vue/max-len */
const path1 = 'M96.389,103.949c-0.165,6.396-5.052,10.778-11.294,11.185c-1.594,0.104-3.22,0.014-4.815,0.014    c-7.568,0-15.137,0-22.705,0c-3.292,0-6.585,0-9.877,0c-2.029,0-4.076,0.099-6.077-0.297c-5.281-1.046-9.12-5.541-9.12-10.94    c0-1.012,0-2.025,0-3.037c0-24.859,0-49.718,0-74.577c0-4.947,2.735-9.271,7.049-11.606c2.311-1.251,4.812-1.19,7.332-1.19    c7.18,0,14.359,0,21.539,0c5.328,0,10.656,0,15.984,0c5.888,0,10.479,4.707,11.748,10.194c0.327,1.41,0.236,2.94,0.236,4.385    c0,25.092,0,50.185,0,75.277C96.389,103.554,96.389,103.751,96.389,103.949c0,1.935,3,1.935,3,0c0-24.451,0-48.902,0-73.353    c0-5.124-0.06-9.854-3.404-14.205c-2.745-3.572-7.085-5.891-11.621-5.891c-1.813,0-3.627,0-5.44,0c-7.735,0-15.47,0-23.205,0    c-5.072,0-11.259-0.854-16.132,0.912C32.616,13.939,29.5,20.799,29.5,27.753c0,5.038,0,10.076,0,15.114    c0,15.602,0,31.204,0,46.805c0,4.491,0,8.983,0,13.474c0,8.177,5.542,14.063,13.642,14.945c5.028,0.547,10.341,0.057,15.386,0.057    c7.457,0,14.914,0,22.371,0c2.855,0,5.619,0.076,8.404-0.735c6.082-1.77,9.926-7.255,10.086-13.464    C99.438,102.013,96.438,102.018,96.389,103.949z'

const path2 = '  M67.415,107.198c0,1.917-1.555,3.473-3.473,3.473l0,0c-1.917,0-3.473-1.555-3.473-3.473l0,0c0-1.917,1.556-3.473,3.473-3.473l0,0  C65.86,103.726,67.415,105.281,67.415,107.198L67.415,107.198z'

const path3 = 'M72.653,19.542c0,0.756-0.9,1.375-2,1.375H58.236c-1.1,0-2-0.619-2-1.375   c0-0.757,0.9-1.375,2-1.375h12.417C71.753,18.167,72.653,18.785,72.653,19.542z'
</script>
