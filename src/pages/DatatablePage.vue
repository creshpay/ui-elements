<template>
  <h2>C-Datatable</h2>
  <h3>basic utilisation</h3>
  <CCodeSnippet :snippet="snipet1">
    <CButton
      @click="onInsertItem"
    >
      Insérer un nouveau item
    </CButton>
    <br />
    <CButton
      color="red"
      @click="onRemoveItem"
    >
      Supprimer le dernier
    </CButton>

    <CDatatable
      :items="state.items"
      :headers="headers"
    />
  </CCodeSnippet>

  <h3>custom pages</h3>
  par défaut [5, 10, 15]
  <CCodeSnippet :snippet="snipet2">
    <CDatatable
      :items="state.items"
      :headers="headers"
      :pages="[5, 100, 200]"
      :items-per-page="100"
    />
  </CCodeSnippet>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import {
  type DatatableHeaderItem,
} from '@/@types/c-datatable'

import {
  CCodeSnippet,
  CButton,
} from '@/components'
import { CDatatable } from '@/components/ui/datatable'

import { uuidv4 } from '@/helpers'

const state = reactive({
  items: Array.from({length: 10}).map((_, i) => ({
    id: uuidv4(),
    name: uuidv4(),
    email: `${uuidv4()}@cresh.test.io`
  }))
})

const headers: DatatableHeaderItem[] = [{
  text: '#ID',
  key: 'id',
  align: 'start',
  sortable: true,
}, {
  text: 'Nom',
  key: 'name',
  align: 'start',
  sortable: true,
}, {
  text: 'Email',
  key: 'email',
  align: 'start',
  sortable: true,
  sortOrder: 'desc'
}]

const snipet1 = `
  <CDatatable
    :items="items"
    :headers="headers"
  />
`
const snipet2 = `
  <CDatatable
    :items="state.items"
    :headers="headers"
    :pages="[5, 100, 200]"
    :items-per-page="100"
  />
`

function onInsertItem() {
  state.items.push(
    {
      id: uuidv4(),
      name: uuidv4(),
      email: `${uuidv4()}@cresh.test.io`
    }
  )
}

function onRemoveItem() {
  state.items.splice(state.items.length - 1, 1)
}

function retry() {
  console.log('test')
}
</script>

<style>
.code-snippet {
  width: 100%;
}
</style>
