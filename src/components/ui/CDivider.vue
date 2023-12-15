<template>
  <div class="c-divider horizontal">
    <span
      v-if="hasDefaultSlot"
      class="decorator"
    >
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  useSlots,
} from 'vue'

const slots = useSlots()

const hasDefaultSlot = computed(
  () => !!slots.default,
)
</script>

<style lang="scss" scoped>
  .c-divider {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000000d9;
    line-height: 1.5715;
    list-style: none;
    border-top: 1px solid rgba(0,0,0,.06);
    position: relative;

    &.horizontal {
      display: flex;
      clear: both;
      width: 100%;
      min-width: 100%;
      margin: 24px 0;

      .decorator {
        position: absolute;
        left: 15px;
        top: -15px;
        background: white;
        padding: 0 15px;
      }
    }
  }
</style>
