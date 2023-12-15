<template>
  <div class="examples">
    <h2>Basic</h2>
    
    <CCodeSnippet
      :snippet="`
        <CFileInput
          name='cFileInput'
          label='file input ex1'
        />
      `"
    >
      <CFileInput
        name="cFileInput"
        :label="'file input ex1'"
        v-model="state.selectedFile"
      />
      <br>
      <div>
        selected file: {{ state.selectedFile?.name }}
      </div>
    </CCodeSnippet>
  </div>
</template>
<script lang="ts" setup>
import { CFileInput } from '@/components'
import { reactive } from 'vue'

const state = reactive<{
  selectedFile?: File
}>({

})
</script>