<template>
  <CreshBaseIcon
    :name="'power-off-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icon/Symbol/PowerOff"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g>
        <rect
          x="0"
          y="0"
          :width="width"
          :height="height"
        />
        <!-- eslint-disable max-len -->
        <!-- eslint-disable vue/max-len -->
        <path
          class="icon-path"
          d="M13.3333333,0 L10.6666667,0 L10.6666667,13.3333333 L13.3333333,13.3333333 L13.3333333,0 Z M19.7733333,2.89333333 L17.88,4.78666667 C19.9866667,6.48 21.3333333,9.08 21.3333333,12 C21.3333333,17.16 17.16,21.3333333 12,21.3333333 C6.84,21.3333333 2.66666667,17.16 2.66666667,12 C2.66666667,9.08 4.01333333,6.48 6.10666667,4.77333333 L4.22666667,2.89333333 C1.64,5.09333333 0,8.34666667 0,12 C0,18.6266667 5.37333333,24 12,24 C18.6266667,24 24,18.6266667 24,12 C24,8.34666667 22.36,5.09333333 19.7733333,2.89333333 Z"
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
