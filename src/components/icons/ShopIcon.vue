<template>
  <CreshBaseIcon
    :name="'shop-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 24 24"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <g
      id="Icons/Shop"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- eslint-disable max-len -->
      <!-- eslint-disable vue/max-len -->
      <path
        d="M11.9992167,16.4 L4.79853473,16.4 L4.79853473,10.4 L2.39830742,10.4 L2.39830742,20 C2.39830742,20.66375 2.93460821,21.2 3.59842108,21.2 L13.1993303,21.2 C13.8631432,21.2 14.399444,20.66375 14.399444,20 L14.399444,10.4 L11.9992167,10.4 L11.9992167,16.4 Z M23.797834,7.3325 L20.5987811,2.5325 C20.3737597,2.19875 19.9987242,2 19.5974362,2 L4.40099708,2 C3.99970908,2 3.62467356,2.19875 3.40340261,2.5325 L0.204349651,7.3325 C-0.328200783,8.13125 0.241853203,9.2 1.20194413,9.2 L22.8002395,9.2 C23.7565801,9.2 24.3266341,8.13125 23.797834,7.3325 Z M19.1998986,20.6 C19.1998986,20.93 19.4699241,21.2 19.7999554,21.2 L21.0000691,21.2 C21.3301003,21.2 21.6001259,20.93 21.6001259,20.6 L21.6001259,10.4 L19.1998986,10.4 L19.1998986,20.6 Z"
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
