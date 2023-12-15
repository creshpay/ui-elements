<template>
  <div
    class="c-image"
    v-if="!isLoading"
  >
    <img
      v-if="!showDefaultErrorImage"
      :src="computedSrc"
      @error="onErrorHandle"
    >
    <div
      v-else
      class="flex"
    >
      <c-icon
        class="flex"
        color="tertiary"
        name="landscape"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onMounted,
  ref,
} from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: false,
    default: '',
  },
  errorImageSrc: {
    type: String,
    required: false,
    default: undefined,
  },
})

const showDefaultErrorImage = ref(false)
const isLoading = ref(false)
const hasError = ref(false)

onMounted(() => {
  if (!props.src) {
    showDefaultErrorImage.value = true
  }
})

const computedSrc = computed(() => {
  if (showDefaultErrorImage.value) {
    return ''
  }
  if (hasError.value) {
    return props.errorImageSrc
  }
  return props.src
})

function onErrorHandle (): void {
  isLoading.value = true
  hasError.value = true
  showDefaultErrorImage.value = !props.errorImageSrc
  isLoading.value = false
}

// function onErrorHandle (e: Event): void {
//   if (props.errorImageSrc) {
//     const target = e as unknown as HTMLImageElement
//     target.src = props.errorImageSrc
//   } else {
//     showDefaultErrorImage.value = true
//   }
// }

</script>
