<template>
  <CreshBaseIcon
    :name="'search-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 22 22"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g
      id="Icon/Tool/Search"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <path
        d="M11.5333333,16.2 C14.1106622,16.2 16.2,14.1106622 16.2,11.5333333 C16.2,8.9560045 14.1106622,6.86666667 11.5333333,6.86666667 C8.9560045,6.86666667 6.86666667,8.9560045 6.86666667,11.5333333 C6.86666667,14.1106622 8.9560045,16.2 11.5333333,16.2 Z M11.5333333,5 C15.1415937,5 18.0666667,7.92507297 18.0666667,11.5333333 C18.0666667,13.0009718 17.5827404,14.3555833 16.765749,15.4463067 L18.726633,17.4067003 C19.0911223,17.7711897 19.0911223,18.3621437 18.726633,18.726633 C18.3621437,19.0911223 17.7711897,19.0911223 17.4067003,18.726633 L15.4463067,16.765749 C14.3555833,17.5827404 13.0009718,18.0666667 11.5333333,18.0666667 C7.92507297,18.0666667 5,15.1415937 5,11.5333333 C5,7.92507297 7.92507297,5 11.5333333,5 Z"
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
