<template>
  <div class="steps">
    <h2>Steps</h2>
    <div class="example-steps1">
      <h3>1. default utilisation</h3>
      <CSteps>
        <CStep
            :icon="'profile-add'"
            :name="'Inscription Client'"
            identifier="firstStep"
            :visible="true"
        >
          First step
        </CStep>
        <CStep
            :name="'Validation Cresh'"
            identifier="secondStep"
            :icon="'document-checked'"
        >
          Second step
        </CStep>
        <CStep
            :name="'Validation Franfinance'"
            :icon="'upload'"
            identifier="thirdStep"
        >
          Third step
        </CStep>
        <CStep
            :name="'Signature Client'"
            :icon="'document-sign'"
            identifier="fourthStep"
        >
          fourth step
        </CStep>

        <CStep
            :name="'Transactions de test'"
            :icon="'transaction'"
            identifier="fifthStep"
        >
          fifth step
        </CStep>
      </CSteps>
    </div>
    <div class="example-steps1">
      <h3>2. init with specific step-id</h3>
      <CSteps
          :step-id="'thirdStep'"
      >
        <CStep
            :name="'first step'"
            identifier="firstStep"
        >
          First step
        </CStep>
        <CStep
            :name="'second step'"
            identifier="secondStep"
        >
          Second step
        </CStep>
        <CStep
            :name="'third step'"
            identifier="thirdStep"
            :visible="true"
        >
          Third step
        </CStep>
      </CSteps>
    </div>
    <div class="example-steps1">
      <h3>3. navigate between steps</h3>
      <CSteps
          :step-id="currentStepId"
      >
        <CStep
            :name="'first step'"
            identifier="firstStep"
            :progression-percentage="90"
            :visible="currentStepId === 'firstStep'"
        >
          First step
          <div class="actions">
            <CButton
                @click.prevent.stop="currentStepId = 'secondStep'"
            >
              Go next
            </CButton>
          </div>
        </CStep>
        <CStep
            :name="'second step'"
            identifier="secondStep"
            :visible="currentStepId === 'secondStep'"
        >
          Second step
          <div class="actions">
            <CButton
                color="default"
                @click.prevent.stop="currentStepId = 'firstStep'"
                style="margin-right: 15px"
            >
              Go prev
            </CButton>

            <CButton
                @click.prevent.stop="currentStepId = 'thirdStep'"
            >
              Go next
            </CButton>
          </div>
        </CStep>
        <CStep
            :name="'third step'"
            identifier="thirdStep"
            :visible="currentStepId === 'thirdStep'"
        >
          Third step
          <div class="actions">
            <CButton
                color="default"
                @click.prevent.stop="currentStepId = 'secondStep'"
            >
              Go prev
            </CButton>
          </div>
        </CStep>
      </CSteps>
    </div>

    <h2>Vertical stepper</h2>
    <div class="example-stepper1">
      <h3>1. default utilisation</h3>
      <c-vertical-stepper
        :steps="[
          {
            text: `Informations de l'entreprise`,
            selected: true,
            id: `Informations de l'entreprise`
          }, {
            text: 'Contact',
            id: 'Contact',
            selected: false,
          }, {
            text: 'Informations bancaires',
            id: 'Informations bancaires',
            selected: false,
          }, {
            text: 'Livraison',
            id: 'Livraison',
            selected: false,
          }, {
            text: 'Identifiant du client',
            id: 'Identifiant du client',
            selected: false,
          }, {
            text: 'Bénéficiaires',
            id: 'Bénéficiaires',
            selected: false,
          }
        ]"
      />
    </div>

    <div class="example-stepper1">
      <h3>2. selectable</h3>
      <c-vertical-stepper
          :selected-index="selectedIndex"
          :selectable="true"
          :steps="steps"
          @select="onSelect"
      />
    </div>

    <h2>Vertical stepper alt</h2>
    <div class="exemple-stepper3">
      <h3>1. basic</h3>
      <c-vertical-stepper-alt
        :steps="verticalStepperAltItems"
      />
    </div>
    <div class="flex c-mt-16 flex-gap-16">
      <CButton @click="prevStep">previous</CButton>
      <CButton @click="nextStep">next</CButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CSteps,
  CStep,
  CButton,
  CVerticalStepper,
} from '@/components'
import type { Step } from '@/@types/cresh-ui'
import { computed, reactive, ref } from 'vue'
import CStepper from '@/components/ui/CVerticalStepperAlt.vue'
import CVerticalStepperAlt from '@/components/ui/CVerticalStepperAlt.vue'

const currentStepId = ref('firstStep')

const selectedIndex = computed(() =>
  steps.findIndex(({ selected }) => selected))

const steps: Step[] = reactive([
  {
    id: 'businessInfo',
    text: 'Informations de l\'entreprise',
    selected: false,
  },
  {
    id: 'contact',
    text: 'Contact',
    selected: false,
  },
  {
    id: 'bankInfo',
    text: 'Informations bancaires',
    selected: true,
  },
  {
    id: 'delivery',
    text: 'Livraison',
    selected: false,
  },
  {
    id: 'clientInfo',
    text: 'Identifiant du client',
    selected: false,
  },
  {
    id: 'beneficiary',
    text: 'Bénéficiaires',
    selected: false,
  }
])

function onSelect(index: number): void {
  if (selectedIndex.value > -1) {
    steps[selectedIndex.value].selected = false
  }
  steps.splice(index, 1, {
    ...steps[index],
    selected: true,
  })
}

const verticalStepperAltItems: Step[] = reactive([
    {
      id: 'subStep1',
      text: 'Informations personnelles',
      subtitle: 'Identité/Coordonnées',
      state: 'completed'
    },
    {
      id: 'subStep2',
      text: 'Offres',
      subtitle: 'Simulations de financement',
      state: 'active'
    },
    {
      id: 'subStep3',
      text: 'Offres',
      subtitle: 'Assurance',
      state: 'unComplete'
    },
    {
      id: 'subStep4',
      text: 'Informations personnelles',
      subtitle: 'Adresse',
      state: 'unComplete'
    },
])

function nextStep() {
  const index = verticalStepperAltItems.findIndex(item => item.state === 'active')
  if (index < verticalStepperAltItems.length-1) {
    verticalStepperAltItems[index].state = 'completed'
    verticalStepperAltItems[index+1].state = 'active'
  }
}

function prevStep() {
  const index = verticalStepperAltItems.findIndex(item => item.state === 'active')
  if (index > 0) {
    verticalStepperAltItems[index].state = 'unComplete'
    verticalStepperAltItems[index-1].state = 'active'
  }
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}
</style>
