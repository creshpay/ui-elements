<template>
  <CreshBaseIcon
    :name="'star-icon'"
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
      id="Icons/Star"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <path
        d="M21.8732535,8.05284525 L15.8654137,7.17695896 L13.1801848,1.73248264 C12.6990642,0.762017073 11.305048,0.749680646 10.8198152,1.73248264 L8.1345863,7.17695896 L2.1267465,8.05284525 C1.04936523,8.20910666 0.6175903,9.5373286 1.39889732,10.2980749 L5.74543166,14.5335814 L4.71739611,20.5167484 C4.53234971,21.5982418 5.6714131,22.4083338 6.6254301,21.9025403 L12,19.0774986 L17.3745699,21.9025403 C18.3285869,22.4042216 19.4676503,21.5982418 19.2826039,20.5167484 L18.2545683,14.5335814 L22.6011027,10.2980749 C23.3824097,9.5373286 22.9506348,8.20910666 21.8732535,8.05284525 L21.8732535,8.05284525 Z M16.1368151,13.8427415 L17.1113928,19.5339464 L12,16.8487175 L6.8886072,19.5339464 L7.86318491,13.8427415 L3.72636983,9.81284213 L9.44224753,8.9821894 L12,3.80089018 L14.5577525,8.9821894 L20.2736302,9.81284213 L16.1368151,13.8427415 Z"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        fill-rule="nonzero"
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
