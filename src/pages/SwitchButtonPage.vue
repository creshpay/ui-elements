<template>
  <h2>
    Switch button example
  </h2>

  <CCodeSnippet :snippet="switchInputSnippet">
    <div class="switch-page">
      <CSwitch :checked="toggle" @switchState=" (state) => toggle = state" />
      <div>état du switch: <strong>{{ toggle }}</strong></div>
      <CButton @click="toggle = !toggle">Permuter le switch</CButton>
    </div>
    <template #title><h3>Switch avec input</h3></template>
    <template #description>
      <div>Ajouter les attributs:</div>
      <code>:checked="toggle" @switchState=" (state) => toggle = state"</code> <br>
      <div>la variable `toggle` étant permutée par le bouton</div>
    </template>
  </CCodeSnippet>

  <CCodeSnippet :snippet="disabledSnippet">
    <template #title><h3>Switch disable</h3></template>
    <CSwitch :disabled="true" />
    <template #description>Ajouter l'attribut: <code>:disabled="true"</code></template>
  </CCodeSnippet>

</template>

<script setup lang="ts">
import CSwitch from '@/components/ui/CSwitch.vue'
import CButton from '@/components/ui/CButton.vue'
import { ref } from "vue";

const toggle = ref(true)

const switchInputSnippet = `
      <CSwitch
        :checked="toggle"
        @switchState="
        (state) => toggle = state"
      />
`

const disabledSnippet = `
    <CSwitch :disabled="true" />
`

</script>

<style lang="scss">
.switch-page {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
}
</style>
