<template>
  <CreshBaseIcon
    :name="'shop-circle-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    view-box="0 0 34 34"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g
      transform="translate(1 1)"
      fill="none"
      fill-rule="evenodd"
    >
      <path
        d="M8 8h16v16H8z"
      />
      <path
        d="M16 18.933h-4.801v-4h-1.6v6.4a.8.8 0 00.8.8h6.4a.8.8 0 00.8-.8v-6.4H16v4zm7.865-6.045l-2.132-3.2a.804.804 0 00-.668-.355H10.934a.797.797 0 00-.665.355l-2.133 3.2a.8.8 0 00.665 1.245h14.4a.802.802 0 00.664-1.245zM20.8 21.733c0 .22.18.4.4.4h.8c.22 0 .4-.18.4-.4v-6.8h-1.6v6.8z"
        :fill="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
        fill-rule="nonzero"
        class="icon-path"
      />
      <circle
        cx="16"
        cy="16"
        r="16"
        stroke-width="2"
        :stroke="color"
        :class="{
          'color-path': true,
          [color]: true,
        }"
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
