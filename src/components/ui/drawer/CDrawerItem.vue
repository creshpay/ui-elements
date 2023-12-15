<template>
  <div
    class="c-drawer-item"
    :class="{ selected }"
    @click.prevent.stop="emit('click')"
    @mouseover="() => onHoverChange(true)"
    @mouseleave="() => onHoverChange(false)"
  >
    <slot
      :selected="selected"
      :hovered="hovered"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['click'])

const hovered = ref<boolean>(false)

defineProps({
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const onHoverChange = (value: boolean): void => {
  hovered.value = value
}
</script>
