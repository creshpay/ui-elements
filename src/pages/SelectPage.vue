<template>
  <div class="select examples">
    <h2>Basic usecase</h2>

    <CCodeSnippet
      :snippet="snippet1"
    >
      <CSelect
        :options="options1"
        v-model="selectModel1"
        :label="'Marque'"
        name="cselect1"
      />
    </CCodeSnippet>

    <h2>With :modelValue and @update:modelValue</h2>

    <CCodeSnippet
      :snippet="snippet2"
    >
      <CSelect
        :name="'online'"
        :options="[{
          name: 'Frais partagé avec le client',
          value: 'feesEnabled'
        }, {
          name: 'Frais offerts au client',
          value: 'feesDisabled'
        }]"
        required
        :label="'En ligne'"
        :modelValue="bnplInstalments.web.x3.fees ? 'feesEnabled' : 'feesDisabled'"
        @update:modelValue="value => bnplInstalments.web.x3.fees = value === 'feesEnabled'"
        class="dropdown"
      />
    </CCodeSnippet>

    <CCodeSnippet
      :snippet="snippet3"
    >
      <CSelect
        :name="'civility'"
        :options="[{
          name: 'Mr',
          value: 'mr'
        }, {
          name: 'Ms',
          value: 'ms'
        }]"
        required
        :label="'Civilité'"
        class="dropdown"
        v-model="civility"
      />

      selected civility: {{ civility }}
    </CCodeSnippet>

    <CCodeSnippet
      :snippet="snippet4"
    >
      <CSelect
        :name="'civility'"
        :options="[{
          name: 'Mr',
          value: 'mr'
        }, {
          name: 'Ms',
          value: 'ms'
        }]"
        :placeholder="'selectionner mr/ms'"
        required
        :label="'Civilité'"
        class="dropdown"
        v-model="civility"
      />

      with placeholder
    </CCodeSnippet>
  </div>
</template>

<script lang="ts" setup>
import { CCodeSnippet } from '@/components'
import { CSelect } from '@/components/form-controls'
import { ref, reactive } from 'vue'

const options1 = [{
  value: 'gucci',
  name: 'Gucci',
}, {
  value: 'channel',
  name: 'Channel',
}, {
  value: 'sephora',
  name: 'Sephora',
}]

const snippet1 = `
<CSelect
  :options="options1"
  v-model="selectModel1"
  :label="'Marque'"
  name="cselect1"
/>`

const selectModel1 = ref('sephora')

const civility = ref()

const offers: {
    bnpl: {
      instalments: {
        web: {
          x3: {
            enabled: boolean
            fees: boolean
          }
          x4: {
            enabled: boolean
            fees: boolean
          }
        }
        store: {
          x3: {
            enabled: boolean
            fees: boolean
          }
          x4: {
            enabled: boolean
            fees: boolean
          }
        }
      }
    }
  } = {
    bnpl: {
      instalments: {
        web: {
          x3: {
            enabled: false,
            fees: false,
          },
          x4: {
            enabled: false,
            fees: false,
          }
        },
        store: {
          x3: {
            enabled: false,
            fees: false,
          },
          x4: {
            enabled: false,
            fees: false,
          },
        }
      }
    }
}

const snippet2 = `
  <CSelect
    :name="'online'"
    :options="[{
      name: 'Frais partagé avec le client',
      value: 'feesEnabled'
    }, {
      name: 'Frais offerts au client',
      value: 'feesDisabled'
    }]"
    required
    :label="'En ligne'"
    :modelValue="bnplInstalments.web.x3.fees ? 'feesEnabled' : 'feesDisabled'"
    @update:modelValue="value => bnplInstalments.web.x3.fees = value === 'feesEnabled'"
    class="dropdown"
  />
`

const snippet3 = `
  <CSelect
    :name="'civility'"
    :options="[{
      name: 'Mr',
      value: 'mr'
    }, {
      name: 'Ms',
      value: 'ms'
    }]"
    required
    :label="'Civilité'"
    class="dropdown"
    v-model="civility"
  />
`
const snippet4 = `
  <CSelect
    :name="'civility'"
    :options="[{
      name: 'Mr',
      value: 'mr'
    }, {
      name: 'Ms',
      value: 'ms'
    }]"
    :placeholder="'selectionner mr/ms'"
    required
    :label="'Civilité'"
    class="dropdown"
    v-model="civility"
  />
`
const bnplInstalments = reactive(offers.bnpl.instalments)

</script>
