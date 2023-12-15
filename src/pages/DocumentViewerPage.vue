<template>
  <div class="document-viewer-page">
    <h3>afficher une image</h3>
    <CCodeSnippet
      :snippet="snippet1"
    >
      <CButton
        @click.prevent.stop="() => state.visible1 = !state.visible1"
      >
        Toggle viewer 1
      </CButton>
      <CDocumentViewer
        hide-arrows
        v-model="state.visible1"
        :document="state.document1"
      />
    </CCodeSnippet>

    <h3>afficher un pdf</h3>

    <CCodeSnippet
      :snippet="snippet2"
    >
      <CButton
        @click.prevent.stop="() => state.visible2 = !state.visible2"
      >
        Toggle viewer 2
      </CButton>
      <CDocumentViewer
        hide-arrows
        v-model="state.visible2"
        :document="state.document2"
      />
    </CCodeSnippet>

    <h3>navigrer entre plusieur images/pdfs</h3>

    <CCodeSnippet
      :snippet="snippet2"
    >
      <CButton
        @click.prevent.stop="() => state.visible3 = !state.visible3"
      >
        Toggle viewer 3
      </CButton>
      <CDocumentViewer
        v-model="state.visible3"
        :document="state.currentDocument!"
        :hide-right-arrow="!hasNextDocument"
        :hide-left-arrow="!hasPrevDocument"
        @next="onNextDocument"
        @prev="onPrevDocument"
      />
    </CCodeSnippet>

    <CCodeSnippet
      :snippet="snippet4"
    >
      <CButton
        @click.prevent.stop="() => state.visible4 = !state.visible4"
      >
        affichage de message d'erreur
      </CButton>
      <CDocumentViewer
        v-model="state.visible4"
        :document="state.document4"
        hide-arrows
      />
    </CCodeSnippet>

    <CCodeSnippet
      :snippet="snippet5"
    >
      <CButton
        @click.prevent.stop="() => state.visible5 = !state.visible5"
      >
        header actions
      </CButton>
      <CDocumentViewer
        v-model="state.visible5"
        :document="state.document2"
        hide-arrows
      >
        <template #header-actions>
          <div
            class="header-actions"
          >
            <CIcon
              name="loader"
              :width="24"
              :height="24"
            />
            <span>
              Refresh
            </span>
          </div>
        </template>
      </CDocumentViewer>
    </CCodeSnippet>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  computed,
} from 'vue'
import { CDocumentItemType } from '@/@types/cresh-ui'

import {
  CIcon,
  CButton,
  CDocumentViewer,
} from '@/components'

const state = reactive({
  visible1: false,
  document1: {
    link: 'https://picsum.photos/seed/picsum/200/300',
    label: 'paysage image',
    id: 'paysageImage',
  },
  visible2: false,
  document2: {
    link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    label: 'dummy pdf',
    id: 'dummyPdf',
    extension: 'pdf',
  },
  visible3: false,
  document3: {
    link: 'https://picsum.photos/500/500',
    label: 'random image',
    id: 'randomImage',
  },

  document4: {
    link: 'https://invalid-imageurl',
    label: 'invalid image',
    id: 'invalidImage',
  },

  visible4: false,

  visible5: false,

  currentDocument: undefined as (CDocumentItemType | undefined),
})

const documents = computed(() => [
  state.document1,
  state.document2,
  state.document3,
])

state.currentDocument = documents.value[0]

const hasNextDocument = computed(() => {
  const index = documents.value.findIndex(
    d => d.id === state.currentDocument?.id,
  )
  if (index + 1 === documents.value.length) {
    return false
  }
  return true
})

const hasPrevDocument = computed(() => {
  const index = documents.value.findIndex(
    d => d.id === state.currentDocument?.id,
  )
  if (index - 1 < 0) {
    return false
  }
  return true
})

function onNextDocument() {
  const index = documents.value.findIndex(
    d => d.id === state.currentDocument?.id,
  )
  if (index > -1 ) {
    state.currentDocument = documents.value[index + 1]
  }
}

function onPrevDocument() {
  const index = documents.value.findIndex(
    d => d.id === state.currentDocument?.id,
  )
  if (index - 1 >= 0) {
    state.currentDocument = documents.value[index - 1]
  }
}

const snippet1 = `
  <CDocumentViewer
    hide-arrows
    v-model="state.visible"
    :document="state.document1"
  />
`

const snippet2 = `
  <CDocumentViewer
    hide-arrows
    v-model="state.visible2"
    :document="state.document2"
  />
`

const snippet3 = `
  <CDocumentViewer
    v-model="state.visible3"
    :document="state.currentDocument!"
    :hide-right-arrow="!hasNextDocument"
    :hide-left-arrow="!hasPrevDocument"
    @next="onNextDocument"
    @prev="onPrevDocument"
  />
`

const snippet4 = `
  <CDocumentViewer
    hide-arrows
    v-model="state.visible4"
    :document="state.document4"
  />
`

const snippet5 = `
  <CDocumentViewer
    v-model="state.visible5"
    :document="state.document2"
    hide-arrows
  >
    <div class="header-actions">
      <CIcon
        name="loader"
        :width="20"
        :height="20"
      />
      <span>
        Refresh
      </span>
    </div>
  </CDocumentViewer>
`
</script>
