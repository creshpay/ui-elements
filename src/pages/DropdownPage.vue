<template>
  <div class="dropdown">
    <CCodeSnippet
        :snippet="ddSnippets1"
    >
      <CDropdown
          v-model="visible1"
          :items="[{
          key: 'key 1',
          value: 'value 1'
        }, {
          key: 'key 2',
          value: 'value 2'
        }, {
          key: 'key 3',
          value: 'value 3'
        }]"
          v-slot="{ selectedItem }"
      >
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </CDropdown>

      <template #title>
        c-dropdown
      </template>
      <template #description>
        Utilisation basique d'un dropdown
      </template>
    </CCodeSnippet>

    <CCodeSnippet
        :snippet="ddSnippets2"
    >
      <CDropdown
          v-model="visible2"
          :items="[{
          key: 'key 1',
          value: 'value 1'
        }, {
          key: 'key 2',
          value: 'value 2'
        }, {
          key: 'key 3',
          value: 'value 3'
        }]"
          v-slot="{ selectedItem }"
          :hovered="true"
      >
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </CDropdown>

      <template #title>
        hovered
      </template>
      <template #description>
        afficher le dropdown list avec mouse onhover
      </template>
    </CCodeSnippet>

    <CCodeSnippet
        :snippet="ddSnippets3"
    >
      <CDropdown
          v-model="visible3"
          :items="[{
          key: 'key 1',
          value: 'value 1'
        }, {
          key: 'key 2',
          value: 'value 2'
        }, {
          key: 'key 3',
          value: 'value 3'
        }]"
          v-slot="{ selectedItem }"
      >
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </CDropdown>

      <template #title>
        position
      </template>
      <template #description>
        Par defaut, le dropdown s'affiche en bas de `trigger`, aligné à gauche,
        s'il n'y a assez de place en bas et
        qu'il dispose suffisamment de place en haut de `trigger`,
        le dropdown se place au dessus de `trigger` dans ce cas,
        meme logique pour positionnement horizontal,
        s'il n'y a pas assez de place à droite,
        le dropdown se decale vers la gauche si l'emplacement se permet.
      </template>
    </CCodeSnippet>

    <CCodeSnippet
        :snippet="ddSnippets4"
    >
      <CDropdown
          class="button"
          v-model="visible4"
          :items="[{
          key: 'key 1',
          value: 'value 1'
        }, {
          key: 'key 2',
          value: 'value 2'
        }, {
          key: 'key 3',
          value: 'value 3'
        }]"
      >
        <template #default="{ selectedItem }">
          <div v-if="selectedItem">
            {{ selectedItem.key }}
          </div>
        </template>
        <template #unactive-icon>
          <TriangleDownIcon
              color="secondary"
              :width="20"
              :height="20"
              class="c-ml-20"
          />
        </template>
        <template #active-icon>
          <TriangleUpIcon
              color="primary"
              :width="20"
              :height="20"
              class="c-ml-20"
          />
        </template>
      </CDropdown>

      <template #title>
        trigger style
      </template>
      <template #description>
        Changer le style par défaut de trigger
      </template>
    </CCodeSnippet>

    <CCodeSnippet
        :snippet="ddSnippets5"
    >
      <CDropdown
          class="button custom-content"
          v-model="visible5"
      >
        <template #default>
          <div>
            selected item
          </div>
        </template>
        <template #unactive-icon>
          <TriangleDownIcon
              color="secondary"
              :width=20
              :height=20
              class="c-ml-20"
          />
        </template>
        <template #active-icon>
          <TriangleUpIcon
              color="primary"
              :width=20
              :height=20
              class="c-ml-20"
          />
        </template>
        <template #content>
          <div class="search-input">
            <CInput
                class="search-input"
                v-model="searchStr"
                bordered
                no-label
                :placeholder="'Rechercher une entité...'"
                name="input"/>
            <div
                v-for="item in items"
                :key="item.value"
            >
              <c-checkbox
                  v-model="item.checked"
                  :label="item.label"
                  name="checkbox"/>
            </div>
          </div>
        </template>
      </CDropdown>

      <template #title>
        custom content
      </template>
      <template #description>
        Changer le contenu de dropdown
      </template>
    </CCodeSnippet>

    <CCodeSnippet
        :snippet="ddSnippets6"
    >
      <CDropdown
          class="button"
          v-model="visible6"
          :pre-selected-item="{
          key: 'key 3',
          value: 'value 3'
        }"
          :items="[{
          key: 'key 1',
          value: 'value 1'
        }, {
          key: 'key 2',
          value: 'value 2'
        }, {
          key: 'key 3',
          value: 'value 3'
        }]"
      >
        <template #default="{ selectedItem }">
          <div v-if="selectedItem">
            {{ selectedItem.key }}
          </div>
        </template>
        <template #unactive-icon>
          <TriangleDownIcon
              color="secondary"
              :width="20"
              :height="20"
              class="c-ml-20"
          />
        </template>
        <template #active-icon>
          <TriangleUpIcon
              color="primary"
              :width="20"
              :height="20"
              class="c-ml-20"
          />
        </template>
      </CDropdown>
      <template #title>
        pre-selected
      </template>
      <template #description>
        Pré-selectionner une valeur par défaut
      </template>
    </CCodeSnippet>
  </div>
</template>

<script setup lang="ts">

import CCodeSnippet from '@/components/ui/CCodeSnippet.vue'
import { CDropdown } from '@/components'
import { reactive, ref } from 'vue'
import TriangleUpIcon from '@/components/icons/TriangleUpIcon.vue'
import TriangleDownIcon from '@/components/icons/TriangleDownIcon.vue'
import CInput from '@/components/form-controls/CInput.vue'
import CCheckbox from '@/components/form-controls/CCheckbox.vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)
const visible6 = ref(false)
const searchStr = ''
const items = [{
  checked: false,
  label: 'ABC',
  value: 'abc',
}, {
  checked: false,
  label: 'BBC',
  value: 'bbc',
}, {
  checked: false,
  label: 'CCC',
  value: 'ccc',
}]
const ddSnippets1 = `
    <CDropdown
      v-model="visible1"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
      v-slot="{ selectedItem }"
    >
      <div v-if="selectedItem">
        {{ selectedItem.key }}
      </div>
    </CDropdown>
  `
const ddSnippets2 =`
    <CDropdown
      v-model="visible2"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
      v-slot="{ selectedItem }"
      :hovered="true"
    >
      <div v-if="selectedItem">
        {{ selectedItem.key }}
      </div>
    </CDropdown>
  `
const ddSnippets3 =`
    <CDropdown
      v-model="visible3"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
      v-slot="{ selectedItem }"
    >
      <div v-if="selectedItem">
        {{ selectedItem.key }}
      </div>
    </CDropdown>
  `
const ddSnippets4 =`
    <CDropdown
      class="button"
      v-model="visible4"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
    >
      <template #default="{ selectedItem }">
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </template>
      <template #unactive-icon>
        <TriangleDownIcon
          color="secondary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
      <template #active-icon>
        <TriangleUpIcon
          color="primary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
    </CDropdown>
  `
const ddSnippets5 =`
    <CDropdown
      class="button custom-content"
      v-model="visible5"
    >
      <template #default>
        <div>
          selected item
        </div>
      </template>
      <template #unactive-icon>
        <TriangleDownIcon
          color="secondary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
      <template #active-icon>
        <TriangleUpIcon
          color="primary"
          width="20"
          height="20"
          class="c-ml-20"
        />
      </template>
      <template #content>
        <div class="search-input">
          <CInput
            class="search-input"
            v-model="searchStr"
            bordered
            no-label
            :placeholder="'Rechercher une entité...'"
          />
          <div
            v-for="item in items"
            :key="item.value"
          >
            <c-checkbox
              v-model="item.checked"
              :label="item.label"
            />
          </div>
        </div>
      </template>
    </CDropdown>
  `
const ddSnippets6 =`
    <CDropdown
      class="button"
      v-model="visible6"
      :pre-selected-item="{
        key: 'key 3',
        value: 'value 3'
      }"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
    >
      <template #default="{ selectedItem }">
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </template>
      <template #unactive-icon>
        <TriangleDownIcon
          color="secondary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
      <template #active-icon>
        <TriangleUpIcon
          color="primary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
    </CDropdown>
  `

</script>

<style lang="scss">

</style>