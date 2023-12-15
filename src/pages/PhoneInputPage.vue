<template>
  <div class="phone-input-page">
    <h3>Basic usage</h3>
   <c-code-snippet
    :snippet="codeSnippet1"
   >
    <CPhoneInput
      v-model="state.phone1"
      name="phone1"
      label="phone 1"
    />
    value: {{ state.phone1 }}
   </c-code-snippet>

    <h3>
      disable-async-validation
      disable-blur-validatation
    </h3>
    <p>Disable intern validation</p>

    <c-code-snippet
      :snippet="codeSnippet2"
    >
      <CPhoneInput
        v-model="state.phone2"
        name="phone2"
        label="phone 2"
        disable-async-validation
        disable-blur-validation
      />

      value: {{ state.phone2 }}
    </c-code-snippet>


    <h3>
      countryCode
    </h3>
    <p>specify number of country</p>

    <c-code-snippet
      :snippet="codeSnippet3"
    >
      <CPhoneInput
        v-model="state.phone3"
        name="phone3"
        label="phone 3"
        country-code="CN"
      />
      value: {{ state.phone3 }}
    </c-code-snippet>

    <h3>
      initial value
    </h3>
    <p>set initial value</p>

    <c-code-snippet
      :snippet="codeSnippet8"
    >
      <CPhoneInput
        v-model="state.phone8"
        name="phone8"
        label="phone 8"
      />
      value: {{ state.phone8 }}
    </c-code-snippet>

    <h3>
      model value change
    </h3>
    <p>handle model value change</p>

    <c-code-snippet
      :snippet="codeSnippet9"
    >
      <CPhoneInput
        v-model="state.phone9"
        name="phone9"
        label="phone 9"
      />
      value: {{ state.phone9 }}
      <br>
      <br>
      <CButton @click.prevent.stop="() => state.phone9 = '000000000'">
        change value
      </CButton>
    </c-code-snippet>

    <h3>phoneHelper</h3>

    <h4>isValidPhoneNumber</h4>
    <c-code-snippet
      :snippet="codeSnippet4"
    >
      <CInput
        name="phone4"
        v-model="state.phone4"
      />
      <div>
        phoneHelper.isValidPhoneNumber(phone)
      </div>
      <div>
        result: {{ phoneHelper.isValidPhoneNumber(state.phone4) }}
      </div>
    </c-code-snippet>

    <h4>isValidMobilePhoneNumber</h4>
    <c-code-snippet
      :snippet="codeSnippet5"
    >
      <CInput
        name="phone5"
        v-model="state.phone5"
      />
      <div>
        phoneHelper.isValidMobilePhoneNumber(phone)
      </div>
      <div>
        result: {{ phoneHelper.isValidMobilePhoneNumber(state.phone5) }}
      </div>
    </c-code-snippet>

    <h4>isValidFixedPhoneNumber</h4>
    <c-code-snippet
      :snippet="codeSnippet6"
    >
      <CInput
        name="phone6"
        v-model="state.phone6"
      />
      <div>
        phoneHelper.isValidFixedPhoneNumber(phone)
      </div>
      <div>
        result: {{ phoneHelper.isValidFixedPhoneNumber(state.phone6) }}
      </div>
    </c-code-snippet>

    <h4>parse and format</h4>
    <c-code-snippet
      :snippet="codeSnippet7"
    >
      <CInput
        name="phone7"
        v-model="state.phone7"
      />
      <div>
        phoneHelper.parse(phone)
      </div>
      <div>
        formatNational: {{ phoneHelper.parse(state.phone7)?.formatNational() }}
        <br>
        formatInternational:  {{ phoneHelper.parse(state.phone7)?.formatInternational() }}
      </div>
    </c-code-snippet>
  </div>
</template>

<script lang="ts" setup>
import CPhoneInput from '@/components/form-controls/CPhoneInput.vue'
import CInput from '@/components/form-controls/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
import phoneHelper from '@/helpers/phone.helper'
import { reactive } from 'vue'

const state = reactive({
  phone1: '',
  phone2: '',
  phone3: '',
  phone4: '2445435323',
  phone5: '0657383758',
  phone6: '0142385968',
  phone7: '0756374858',
  phone8: '0726384658',
  phone9: '0123456789'
})

const codeSnippet1 = `
<CPhoneInput
  v-model="state.phone1"
  name="phone1"
  label="phone 1"
/>`

const codeSnippet2 = `
<CPhoneInput
  v-model="state.phone2"
  name="phone2"
  label="phone 2"
  disable-async-validation
  disable-blur-validation
/>
`
const codeSnippet3 = `
<CPhoneInput
  v-model="state.phone3"
  name="phone3"
  label="phone 3"
  country-code="CN"
/>
`
const codeSnippet4 = `
  phoneHelper.isValidPhoneNumber(state.phone4)
`

const codeSnippet5 = `
  phoneHelper.isValidMobilePhoneNumber(state.phone5)
`

const codeSnippet6 = `
  phoneHelper.isValidFixedPhoneNumber(state.phone6)
`

const codeSnippet7 = `
  phoneHelper.parse(state.phone6).formatNational()
  phoneHelper.parse(state.phone6).formatInternational()
`

const codeSnippet8 = `
<CPhoneInput
  v-model="state.phone8"
  name="phone8"
  label="phone 8"
/>
`
const codeSnippet9 = `
<CPhoneInput
  v-model="state.phone9"
  name="phone9"
  label="phone 9"
/>
`
</script>
