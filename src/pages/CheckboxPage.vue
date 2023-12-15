<template>
  <div class="form-controls checkbox">
    <c-code-snippet
      :snippet="snippet1"
    >
      <CCheckbox
        v-model="checked"
        name="checkboxTest"
        :label="'checkbox test'"
        class="test"
      />
      <template #title>
        c-checkbox
      </template>
      <template #description>
        Basic select
      </template>
    </c-code-snippet>

    <c-code-snippet
      :snippet="snippet2"
    >
      <CCheckbox
        v-model="checked"
        name="checkboxTest"
      >
        <div style="color: red">
          Custom label
        </div>
      </CCheckbox>
      <template #title>
        Label
      </template>
      <template #description>
        c-checkbox avec label personnalisé
      </template>
    </c-code-snippet>

    <c-code-snippet
      :snippet="snippet3"
    >
      <CCheckbox
        :ref="checkbox3Ref"
        v-model="checkbox3.value"
        name="checkbox3Value"
        @update:model-value="onCheckbox3Blur"
        :error-message="checkbox3.errorMessage"
      >
        checked obligatoire
      </CCheckbox>

      <template #title>
        Rule: required
      </template>
      <template #description>
        c-checkbox avec rule
      </template>
    </c-code-snippet>

    <c-code-snippet :snippet="snippet4">
      <CCheckbox
        ref="checkbox4Ref"
        v-model="checkbox4Value"
        name="checkbox4Value"
        :disabled="true"
      >
        disabled checkbox
      </CCheckbox>
      <template #title>
        disabled
      </template>
      <template #description>
        c-checkbox avec property disabled
      </template>
    </c-code-snippet>

    <c-code-snippet :snippet="snippet5">
      <CCheckbox
        ref="checkbox4Ref"
        v-model="checkbox4Value"
        name="checkbox4Value"
        no-uppercase
      >
        no uppercase label
      </CCheckbox>
      <template #title>
        no-uppercase
      </template>
      <template #description>
        disable label uppercase
      </template>
    </c-code-snippet>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import * as yup from 'yup'

import CCheckbox from '../components/form-controls/CCheckbox.vue'
import { yupHelper } from '@/helpers';

const checked = ref(false)

const snippet1 = `
    <c-checkbox
      name="checkboxTest"
      v-model="checked"
      :label="'checkbox test'"
    />
  `

const snippet2 = `
    <c-checkbox
      name="checkboxTest"
      v-model="checked"
    >
      <template #label>
        <div style="color: red">
          Custom label
        </div>
      </template>
    </c-checkbox>
  `

const snippet3 = `
    <c-checkbox
        :value="checkbox3Value"
        :rules="{ required: { allowFalse: false } }"
        @input="onCheckbox3Change"
        ref="checkbox3Ref"
      >
        checked obligatoire
    </c-checkbox>
  `
const checkbox3 = ref({
  value: false,
  errorMessage: ''
})

async function onCheckbox3Blur() {
  const { errors } = await yupHelper.validate({
    schema: yup.object({
      value: yup.boolean().oneOf([true], 'Field must be checked'),
    }),
    fields: checkbox3,
  })

  checkbox3.value.errorMessage = errors?.value || ''
}

const snippet4 = `
    <c-checkbox
        :value="checkbox4Value"
        @input="onCheckbox4Change"
        ref="checkbox4Ref"
        :disabled="true"
      >
        disabled checkbox
    </c-checkbox>
  `

const snippet5 = `
  <c-checkbox
      :value="checkbox4Value"
      @input="onCheckbox4Change"
      ref="checkbox4Ref"
      no-uppercase
    >
      disable label uppercase
  </c-checkbox>
`

const checkbox4Value = ref(true)

// function onCheckbox3Change (value: boolean) {
//   checkbox3Value.value = value
// }

// function onCheckbox4Change (value: boolean) {
//   checkbox4Value.value = value
// }

const checkbox3Ref = ref()

// watch(() => checkbox3Value.value, (val: boolean, oldVal: boolean) => {
//   if (val === oldVal) {
//     return
//   }
//   // window.setTimeout(() => {
//   //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   //   (checkbox3Ref.value as any).validate()
//   // }, 100)
// })
</script>

<style lang="scss" scoped>
  .form-controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .form-field-control.username,
  .civility-selection,
  .product-unit-price,
  .form-birthdate,
  .test-input {
    max-width: 400px;
  }
</style>
