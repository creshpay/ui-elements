<template>
  <h2>ModalPage</h2>

  <CCodeSnippet :snippet="modal1">
    <CButton
      @click="() => openModal(toRef(modal1Visible))"
    >
      open modal
    </CButton>

    <CModal
      :model-value="modal1Visible.open"
      @update:model-value="() => openModal(toRef(modal1Visible))"
      @cancel="() => openModal(toRef(modal1Visible))"
      title="modal title"
    >
      ----content here----
    </CModal>
  </CCodeSnippet>

  <div>
    <h3>customisation</h3>

    <CDatatable
      :items="items"
      :headers="headers"
      :pages="[5, 100, 200]"
      :items-per-page="100"
    />
  </div>
</template>

<script setup lang="ts">

import CButton from '@/components/ui/CButton.vue'
import {
  Ref,
  ref,
  toRef,
} from 'vue'
import type {
  DatatableHeaderItem,
} from '@/@types/c-datatable'

import CModal from '@/components/ui/CModal.vue'
import { CDatatable } from '@/components'

const modal1Visible = ref({ open: false })

function openModal(modalName: Ref<{ open: boolean }>) {
  modalName.value.open = !modalName.value.open
}

const headers: DatatableHeaderItem[] = [{
  text: 'Property',
  key: 'property',
  align: 'start',
  sortable: false,
}, {
  text: 'Required',
  key: 'required',
  align: 'start',
  sortable: true,
}, {
  text: 'Type',
  key: 'type',
  align: 'start',
  sortable: false,
}, {
  text: 'Default Value',
  key: 'defaultValue',
  align: 'start',
  sortable: false,
}, {
  text: 'Description',
  key: 'description',
  align: 'start',
  sortable: false,
}]

const items = [
  {
    property: 'name',
    required: '🚫',
    type: 'string',
    defaultValue: 'uuid',
    description: 'modal name'
  },
  {
    property: 'modelValue',
    required: '✅',
    type: 'boolean',
    defaultValue: 'false',
    description: 'modal open state'
  },
  {
    property: 'persistent',
    required: '🚫',
    type: 'boolean',
    defaultValue: 'false',
    description: 'allow to close modal on click outside'
  },
  {
    property: 'title',
    required: '🚫',
    type: 'string',
    defaultValue: "''",
    description: 'h3 tag on modal header'
  },
  {
    property: 'closable',
    required: '🚫',
    type: 'boolean',
    defaultValue: 'true',
    description: 'allow to close or not the modal'
  },
  {
    property: 'width',
    required: '🚫',
    type: 'number | string',
    defaultValue: 500,
    description: 'modal width'
  },
  {
    property: 'height',
    required: '🚫',
    type: 'number | string',
    defaultValue: 'auto',
    description: 'modal height'
  },
  {
    property: 'okText',
    required: '🚫',
    type: 'string',
    defaultValue: 'Valider',
    description: 'text for ok button'
  },
  {
    property: 'cancelText',
    required: '🚫',
    type: 'string',
    defaultValue: 'Annuler',
    description: 'text for cancel button'
  },
  {
    property: 'noFooter',
    required: '🚫',
    type: 'boolean',
    defaultValue: 'false',
    description: 'hide modal footer'
  },
]

const modal1 = `
  <CModal
    :model-value="modal1Visible.open"
    @update:model-value="() => openModal(toRef(modal1Visible))"
    @cancel="() => openModal(toRef(modal1Visible))"
    title="modal title"
  >
    ----content here----
  </CModal>
`
</script>

<style scoped lang="scss">

</style>
