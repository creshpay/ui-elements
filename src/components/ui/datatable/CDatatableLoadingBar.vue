<template>
  <thead
    v-if="isLoading"
    class="loading-bar-thead"
  >
    <tr>
      <th class="loading-bar-wrapper">
        <div class="slider">
          <div class="line" />
          <div class="subline inc" />
          <div class="subline dec" />
        </div>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts" setup>
defineProps({
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
