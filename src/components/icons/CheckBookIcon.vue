<template>
  <CreshBaseIcon
    :name="'check-book-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 22 22"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icon/Symbol/Check"
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
          d="M18.125,4.5 L15,4.5 C15,3.12109375 13.8789062,2 12.5,2 C11.1210938,2 10,3.12109375 10,4.5 L6.875,4.5 C5.83984375,4.5 5,5.33984375 5,6.375 L5,20.125 C5,21.1601562 5.83984375,22 6.875,22 L18.125,22 C19.1601562,22 20,21.1601562 20,20.125 L20,6.375 C20,5.33984375 19.1601562,4.5 18.125,4.5 Z M12.5,3.5625 C13.0195312,3.5625 13.4375,3.98046875 13.4375,4.5 C13.4375,5.01953125 13.0195312,5.4375 12.5,5.4375 C11.9804688,5.4375 11.5625,5.01953125 11.5625,4.5 C11.5625,3.98046875 11.9804688,3.5625 12.5,3.5625 Z M17.234375,12.6171875 L11.6484375,18.15625 C11.4648438,18.3398438 11.1679688,18.3359375 10.984375,18.1523438 L7.7578125,14.8984375 C7.57421875,14.7148438 7.578125,14.4179688 7.76171875,14.234375 L8.87109375,13.1328125 C9.0546875,12.9492188 9.3515625,12.953125 9.53515625,13.1367188 L11.3320312,14.9492188 L15.4726563,10.8398438 C15.65625,10.65625 15.953125,10.6601563 16.1367188,10.84375 L17.2382813,11.953125 C17.421875,12.140625 17.4179688,12.4335938 17.234375,12.6171875 Z"
          :fill="color"
          fill-rule="nonzero"
          :class="{
            'color-path': true,
            [color]: true,
          }"
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
