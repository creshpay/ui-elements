<template>
  <CreshBaseIcon
      :name="'ressource-icon'"
      :width="width"
      :height="height"
      :outlined="outlined"
      view-box="0 0 34 34"
      :color="color"
      :rotate="rotate"
      :alt="alt"
  >
    <g
        transform="translate(1, 1)"
        fill="none"
        fill-rule="evenodd"
    >
      <g
          transform="translate(9, 10)"
      >
        <path
            :d="path1"
            fill-rule="nonzero"
            fill="none"
            :stroke="color"
            class="icon-path"
        />
        <path
            :d="path2"
            :fill="color"
            fill-rule="nonzero"
            class="icon-path"
        />
      </g>
      <circle
          cx="16"
          cy="16"
          r="16"
          stroke-width="2"
          :stroke="color"
      />
    </g>
  </CreshBaseIcon>
</template>

<script setup lang="ts">
import CreshBaseIcon from './CreshBaseIcon.vue'
import baseIconProps from './base-icon-props'

defineProps({
  ...baseIconProps,
})

/* eslint-disable max-len */
/* eslint-disable vue/max-len */
const path1 = 'M0,11 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-1.20591542e-16 1,0 L4.92954288,0 C5.3500252,1.44803254e-16 5.72559089,0.263038033 5.86931381,0.658195104 L6.14052354,1.40386908 C6.28424646,1.79902615 6.65981215,2.06206418 7.08029447,2.06206418 L12,2.06206418 C12.5522847,2.06206418 13,2.50977943 13,3.06206418 L13,11 C13,11.5522847 12.5522847,12 12,12 L1,12 C0.44771525,12 6.76353751e-17,11.5522847 0,11 Z'
const path2 = 'M0.43730879,10.6845376 L2.43193266,4.68453758 C2.56781094,4.27580402 2.9501434,4 3.38087073,4 L15.6468584,4 C16.1991431,4 16.6468584,4.44771525 16.6468584,5 C16.6468584,5.09949121 16.6320111,5.19842544 16.602807,5.29353393 L14.7604449,11.2935339 C14.6315195,11.713404 14.2437144,12 13.8044962,12 L1.38624686,12 C0.83396211,12 0.38624686,11.5522847 0.38624686,11 C0.38624686,10.8927885 0.403487599,10.7862746 0.43730879,10.6845376 Z'

</script>
