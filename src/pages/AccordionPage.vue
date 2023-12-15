<template>
  <h2>Accordion Example</h2>

  <CAccordion
    @accordion-change="onAccordionChange"
  >
    <CAccordionItem :name="'acc1'">
      <template #title>
        title
      </template>

      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </template>
    </CAccordionItem>

    <CAccordionItem :name="'acc2'">
      <template #title>
        title2
      </template>

      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </template>
    </CAccordionItem>
  </CAccordion>

  <div>
      <h3>selected accordion: {{ selectedAccordion }}</h3>
  </div>

</template>

<script setup lang="ts">
import CAccordion from '@/components/ui/CAccordion.vue'
import CAccordionItem from '@/components/ui/CAccordionItem.vue'
import i18n from '../plugins/i18n.plugin'
import CErrorMessage from '@/components/ui/CErrorMessage.vue'
import { ref } from 'vue'

const selectedAccordion = ref()

function onAccordionChange(value: any) {
  selectedAccordion.value = value
}
</script>

<style scoped>

</style>
