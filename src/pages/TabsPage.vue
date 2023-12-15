<template>
  <div class="tabsPage">
    <h2>Tabs</h2>
    <div class="example-tabs">
      <h3>1. default utilisation</h3>
      <CTabs
        v-slot="slotProps"
      >
        <CTab
          icon="info"
          name="tab-1"
          identifier="tabInfo"
        >
          <CCard>
            tab info
          </CCard>
        </CTab>

        <CTab
          icon="locker"
          name="tab-2"
          identifier="tabLocked"
        >
          <CCard>
            tab locked
          </CCard>
        </CTab>
      </CTabs>
    </div>
    <div class="example-tabs ex2">
      <h3>2. readonly</h3>
      <p>
        <b>:readonly</b> déactive la navigation par defaut des tabs,
        <br> on peut changer à l'aide de <b>selected-id</b> pour naviguer sur
        la tab qu'on veut aller
      </p>

      <CTabs
        :readonly="true"
        :selected-id="'tabLocked'"
        v-slot="slotProps"
      >
        <CTab
          icon="info"
          name="tab-1"
          identifier="tabInfo"
          :visible="slotProps
            && slotProps.tab && slotProps.tab.id === 'tabInfo'"
        >
          <CCard>
            tab info

            <template #footer>
              <div class="actions">
                <CButton
                  @click="() => onChangeTabId('tabLocked')"
                >
                  suivant
                </CButton>
              </div>
            </template>
          </CCard>
        </CTab>

        <CTab
          icon="locker"
          name="tab-2"
          identifier="tabLocked"
          :visible="slotProps
            && slotProps.tab && slotProps.tab.id === 'tabLocked'"
        >
          <CCard>
            tab locked

            <template #footer>
              <div class="actions">
                <CButton
                  @click="() => onChangeTabId('tabInfo')"
                >
                  précédent
                </CButton>
              </div>
            </template>
          </CCard>
        </CTab>
      </CTabs>
    </div>

    <div class="example-tabs ex3">
      <h3>3. tab désactivé</h3>
      <p>
        Désactiver la selection d'un tab en passant
        <b>disabled</b> en props
      </p>
      <CTabs
        v-slot="slotProps"
        selected-id="tabUsers"
      >
        <CTab
          icon="info"
          name="tab-1"
          :disabled="true"
          identifier="tabInfo"
          :visible="slotProps
            && slotProps.tab && slotProps.tab.id === 'tabInfo'"
        >
          <CCard>
            tab info
          </CCard>
        </CTab>

        <CTab
          icon="locker"
          name="tab-2"
          :disabled="true"
          identifier="tabLocked"
          :visible="slotProps
            && slotProps.tab && slotProps.tab.id === 'tabLocked'"
        >
          <CCard>
            tab locked
          </CCard>
        </CTab>

        <CTab
          icon="users"
          name="tab-3"
          identifier="tabUsers"
          :visible="slotProps
            && slotProps.tab && slotProps.tab.id === 'tabUsers'"
        >
          <CCard>
            tab users
          </CCard>
        </CTab>
      </CTabs>
    </div>

    <div class="exemple-tabs ex4">
      <h3>4. dynamic tabs</h3>
      <h4>working with v-for</h4>
      <CTabs>
        <template
          v-for="tabName of tabNames"
          :key="tabName"
        >
          <CTab
            :identifier="tabName"
            :name="tabName"
          >
            {{ tabName }}
          </CTab>
        </template>

      </CTabs>
    </div>

    <div class="example-tabs ex5">
      <h3>5. Tabs with button in header + scrollable</h3>
        <CTabs
          v-slot="slotProps"
          has-button
          :button-label="'button test'"
          button-icon-name="add"
          button-color="primary"
          @button-click="toggle"
        >
          <CTab
            name="tab-1"
            identifier="tabInfo"
          >
            <CCard>
              tab info
              <div v-if="toggling">
                button clicked
              </div>
            </CCard>
          </CTab>

          <CTab
            name="tab-2"
            identifier="tabLocked"
          >
            <CCard>
              tab locked
              <div v-if="toggling">
                  button clicked
              </div>
            </CCard>
          </CTab>

          <CTab
            name="tab-3"
            identifier="tabLocked1"
          >
            <CCard>
              tab locked
            </CCard>
          </CTab>

          <CTab
            name="tab-4"
            identifier="tabLocked2"
          >
            <CCard>
              tab locked
            </CCard>
          </CTab>

          <CTab
            name="tab-5"
            identifier="tabLocked3"
          >
            <CCard>
              tab locked
            </CCard>
          </CTab>

          <CTab
            name="tab-6"
            identifier="tabLocked4"
          >
            <CCard>
              tab locked
            </CCard>
          </CTab>

          <CTab
            name="tab-7"
            identifier="tabLocked5"
          >
            <CCard>
              tab locked
            </CCard>
          </CTab>
        </CTabs>
    </div>

    <div class="example-tabs ex6">
      <h3>6. Hide tabs with v-if </h3>
      <c-button @click="toggle1">hide tab 1 {{ hideTab1 }}</c-button>
      <CTabs
          v-slot="slotProps"
          selected-id="tab1"
      >
        <CTab
          name="tab-1"
          identifier="tab1"
          :hide="hideTab1"
        >
          <CCard>
            tab 1
          </CCard>
        </CTab>

        <CTab
            name="tab-2"
            identifier="tab2"
        >
          <CCard>
            tab 2
          </CCard>
        </CTab>
      </CTabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import CTabs from '../components/ui/tab/CTabs.vue'
import CTab from '../components/ui/tab/CTab.vue'
import CCard from '../components/ui/CCard.vue'
import CButton from '../components/ui/CButton.vue'

const tabId = ref('tabLocked')

function onChangeTabId (val: string) {
  tabId.value = val
}

const tabNames = ['tab 1', 'tab 2', 'tab 3']

const hideTab1 = ref(false)
const toggling = ref(false)

function toggle1() {
  hideTab1.value = !hideTab1.value
}

function toggle() {
  toggling.value = !toggling.value
}

</script>

<style scoped lang="scss">
  .example-tabs.ex2 {
    .actions {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
    }
  }

  h3 {
    margin-top: 50px;
  }

</style>
