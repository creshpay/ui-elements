<template>
  <!-- eslint-disable max-len -->
  <CreshBaseIcon
      :name="'add-icon'"
      :width="width"
      :height="height"
      :outlined="outlined"
      view-box="0 0 48 48"
      :color="color"
      :rotate="rotate"
      :alt="alt"
  >
    <path
        d="M23.957,0c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S37.212,0,23.957,0z M24.663,36.56  c-0.451,0.486-1.091,0.729-1.924,0.729c-0.832,0-1.471-0.237-1.916-0.712s-0.668-1.14-0.668-1.995c0-1.77,0.861-2.654,2.584-2.654  c0.844,0,1.488,0.231,1.934,0.694s0.668,1.116,0.668,1.96C25.341,35.414,25.114,36.073,24.663,36.56z M30.931,19.403  c-0.258,0.686-0.648,1.339-1.17,1.96s-1.42,1.43-2.697,2.426c-1.09,0.855-1.82,1.564-2.189,2.127  c-0.312,0.475-0.483,1.096-0.531,1.847c-0.003,0.016-0.008,0.021-0.011,0.037c-0.21,1.183-1.584,1.175-1.584,1.175h-0.722  c0,0-1.195-0.188-1.15-1.125c0-1.289,0.234-2.361,0.703-3.217s1.29-1.74,2.461-2.654c1.395-1.102,2.293-1.957,2.697-2.566  s0.607-1.336,0.607-2.18c0-0.984-0.328-1.74-0.984-2.268s-1.6-0.791-2.83-0.791c-1.114,0-2.145,0.158-3.094,0.475  c-0.518,0.173-1.027,0.369-1.532,0.58c-0.011,0.004-0.015,0.002-0.027,0.007c-1.166,0.451-1.707-0.466-1.707-0.466l-0.458-0.959  c-0.002-0.006-0.516-1.177,0.63-1.692c2.043-0.934,4.204-1.406,6.486-1.406c2.296,0,4.119,0.563,5.466,1.688  s2.021,2.678,2.021,4.658C31.317,17.936,31.188,18.718,30.931,19.403z"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
    />
  </CreshBaseIcon>
</template>

<script lang="ts" setup>
import CreshBaseIcon from './CreshBaseIcon.vue'
import baseIconProps from './base-icon-props'

defineProps({
  ...baseIconProps,
})
</script>
