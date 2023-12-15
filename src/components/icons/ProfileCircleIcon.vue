<template>
  <CreshBaseIcon
    :name="'profile-circle-icon'"
    :width="width"
    :height="height"
    :outlined="outlined"
    :view-box="viewBox"
    :color="color"
    :rotate="rotate"
    :alt="alt"
  >
    <!-- eslint-disable max-len -->
    <!-- eslint-disable vue/max-len -->
    <g
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Icon/Symbol/Profile-Circle">
        <g transform="translate(1.000000, 1.000000)">
          <path
            :fill="color"
            :class="{
              'color-path': true,
              [color]: true,
            }"
            class="icon-path"
            d="M7.47073768,14.294 C9.06261485,13.9299 9.99185787,13.61145 9.27368021,12.2689 C7.08970916,8.18405 8.69491677,6 11.001639,6 C13.3539069,6 14.9196786,8.2682 12.7290423,12.2689 C11.9892027,13.61915 12.9717675,13.9376 14.5297631,14.294 C15.9089086,14.6097 16,15.27685 16,16.43295 L16,17 L6.00216711,17 C6.00216711,15.49025 5.87997138,14.6581 7.47073768,14.294 Z"
          />
        </g>
      </g>
      <g
        id="Icon/Symbol/Profile-Circle"
        :stroke="color"
        stroke-width="1"
        :class="{
          'circle': true,
          [color]: true,
        }"
      >
        <g
          id="Circle"
          transform="translate(1.000000, 1.000000)"
          class="icon-path"
        >
          <path
            d="M11,22 C13.0213883,22 14.9154304,21.4547664 16.5430821,20.5033436 C19.8072166,18.5953359 22,15.053744 22,11 C22,9.1227205 21.5297368,7.35527686 20.7005863,5.80904488 C18.8464927,2.35145949 15.1978528,0 11,0 C9.0256681,0 7.1728223,0.520143798 5.57102069,1.43087329 C2.24398708,3.32251056 0,6.89919965 0,11 C0,13.6277304 0.921392565,16.040258 2.45872321,17.9321284 C4.47559548,20.4141324 7.55259813,22 11,22 Z"
          />
        </g>
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

<style lang="scss">
.profile-circle-icon {
  g.circle {
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
