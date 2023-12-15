<template>
  <h2>
    Tooltip
  </h2>

  <CCodeSnippet :snippet="tooltipSnippet">
    <div class="tooltip-button">
      <CButton v-tooltip="'Tooltip'">
        Hover me
      </CButton>
    </div>
  </CCodeSnippet>
</template>

<script setup lang="ts">

import CButton from '@/components/ui/CButton.vue'

const tooltipSnippet = `
<CButton v-tooltip="'Tooltip'">
    Hover me
</CButton>
`

</script>

<style scoped>
.tooltip-button {
  display: flex;
  justify-content: center;
}
</style>