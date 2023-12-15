<template>
  <CreshBaseIcon
    :name="'exit-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 32 32"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g>
      <line
        class="cls-1"
        x1="15.92"
        x2="28.92"
        y1="16"
        y2="16"
        fill="none"
        :stroke="color"
        :class="{
          [color]: true,
        }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      />
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <path
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z"
      />
      <line
        class="cls-1"
        x1="28.92"
        x2="24.92"
        y1="16"
        y2="20"
        fill="none"
        :stroke="color"
        :class="{
          [color]: true,
        }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      />
      <line
        class="cls-1"
        x1="28.92"
        x2="24.92"
        y1="16"
        y2="12"
        fill="none"
        :stroke="color"
        :class="{
          [color]: true,
        }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      />
      <line
        class="cls-1"
        x1="24.92"
        x2="24.92"
        y1="8.09"
        y2="6.09"
        fill="none"
        :stroke="color"
        :class="{
          [color]: true,
        }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      />
      <line
        class="cls-1"
        x1="24.92"
        x2="24.92"
        y1="26"
        y2="24"
        fill="none"
        :stroke="color"
        :class="{
          [color]: true,
        }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
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

<style lang="scss">
.exit-icon {
  line {
    &.primary {
      stroke: rgb(var(--color-primary));
    }

    &.secondary {
      stroke: rgb(var(--color-secondary));
    }

    &.tertiary {
      stroke: rgb(var(--color-tertiary));
    }

    &.error {
      stroke: rgb(var(--color-error));
    }
  }
}
</style>
