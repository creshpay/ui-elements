<template>
  <h2>MenuPage</h2>
  <div class="menues-page">
    <CMenu
        :title="'Brand name'"
        class="menu1"
        @select="onSelect"
    >
    <template
        #default="defaultProps"
    >
        <CMenuItem
            collapsible
            text="Informations"
            :collapsed="item1Collapsed"
            @collapse="onCollapse"
            @expand="onExpand"
            :selected="selectedIndex === 1"
        >
          <template #collapsible-content>
            <c-vertical-stepper
                :selectable="true"
                :steps="steps"
                :selected-index="selectedStepperIndex"
                @select="onStepperSelect"
            />
          </template>
        </CMenuItem>
        <CMenuItem
            text="Tarifications"
            :selected="selectedIndex === 2"
            :index="2"
        />
        <CMenuItem
            text="Recommandation Cresh"
            :selected="selectedIndex === 3"
        />
        <CMenuItem
            text="Contractualisation"
            :selected="selectedIndex === 4"
        />
        <CMenuItem
            text="Transactions de test"
            :selected="selectedIndex === 5"
        />
        <CMenuItem
            text="Pré-requis"
            :selected="selectedIndex === 6"
        />
        <CMenuItem
            text="Transactions Live"
            :selected="selectedIndex === 7"
        />
      </template>
      <template #footer>
        <div class="footer-content">
          <div>
            <CIcon
                name="info"
                color="white"
            />
          </div>
          <div>
            Vous devez valider les différentes étapes avant d'envoyer ce dossier à Franfinance
          </div>
          <CButton color="tertiary">
            <template #prefix>
              <CIcon
                  name="check-circle"
                  color="white"
              />
            </template>
            Transmettre à Franfinance
          </CButton>
          <CButton>
            <template #prefix>
              <CIcon
                  name="cross-circle"
                  color="white"
              />
            </template>
            Refuser ce dossier
          </CButton>
        </div>
      </template>
    </CMenu>
  </div>
</template>

<script setup lang="ts">
import type { Step } from '@/@types/cresh-ui'
import {
  CMenu,
  CMenuItem,
  CVerticalStepper,
  CButton,
} from '@/components/ui'

import { CIcon } from '@/components/icons'
import { computed, reactive, ref } from 'vue'

const item1Collapsed = ref(true)
const selectedIndex = ref()

const selectedStepperIndex = computed(() =>
    steps.findIndex(({ selected }) => selected))

const steps: Step[] = reactive([
  {
    id: 'step1',
    text: 'Informations de l\'entreprise',
    selected: true,
  },
  {
    id: 'step2',
    text: 'Contact',
    selected: false,
  },
  {
    id: 'step3',
    text: 'Informations bancaires',
    selected: false,
  },
  {
    id: 'step4',
    text: 'Livraison',
    selected: false,
  },
  {
    id: 'step5',
    text: 'Identifiant du client',
    selected: false,
  },
  {
    id: 'step6',
    text: 'Bénéficiaires',
    selected: false,
  },
])

function onStepperSelect(index: number): void {
  if (selectedStepperIndex.value > -1) {
    steps[selectedStepperIndex.value].selected = false
  }
  steps.splice(index, 1, {
    ...steps[index],
    selected: true,
  })
}

function onCollapse (): void {
  item1Collapsed.value = true
}

function onExpand (): void {
  item1Collapsed.value = false
}
function onSelect ({ index }: {
  index: number
  id: string
}): void {
  selectedIndex.value = index
}

</script>

<style lang="scss">
.menu1 {
  width: 305px;
  .custom-content {
    display: flex;
    height: 100%;
    min-height: 70px;
    align-items: center;
    padding: 0 15px;
  }
  .c-menu-footer .footer-content {
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    .btn-text {
      font-size: small;
    }
  }
}
</style>
