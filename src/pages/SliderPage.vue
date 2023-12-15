<template>
  <h2>Slider</h2>

  <h3>1. Slider component</h3>
    <CCodeSnippet :snippet="slider">
      <div>
        <CSlider
          :min="0"
          :max="100"
          :value="55"
          @change-event="(value) => changeEvent = value"
          :markers="[0,10,20,30,40,50, 60, 70, 80, 90, 100]"
        >
          <template #min>
            6 {{ $t('translate.slider.month') }}
          </template>

          <template #max>
            60 {{ $t('translate.slider.month') }}
          </template>
        </CSlider>

        <span>change event: {{ changeEvent }}</span>
      </div>
    </CCodeSnippet>

  <h3>2. Slider disabled</h3>
  <CCodeSnippet :snippet="slider3">
    <div>
      <CSlider
          :min="6"
          :max="60"
          :value="55"
          @change-event="(value) => changeEvent = value"
          :is-disabled="true"
      />
    </div>
  </CCodeSnippet>
</template>

<script setup lang="ts">
import CSlider from '@/components/ui/CSlider.vue'
import { ref } from 'vue'

const changeEvent = ref(55)

const slider = `
  <CSlider
    :min="6"
    :max="60"
    :value="55"
    @change-event="(value) => changeEvent = value"
  >
    <template #min>
      {{ $t('translate.slider.month') }}
    </template>

    <template #max>
      {{ $t('translate.slider.month') }}
    </template>
  </CSlider>`

const slider3 = `
  <CSlider
    :min="6"
    :max="60"
    :value="55"
    @change-event="(value) => changeEvent = value"
    :is-disabled="true"
  />
`
</script>
