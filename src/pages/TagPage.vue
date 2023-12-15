<template>
    <h2>Tag Example</h2>
    <div class="tags">
      <CTag
          :color="'pending'"
          :text-content="status.pending"
          :additional-info="'additional info'"
      />

      <CTag
        :color="'expired'"
        :text-content="status.expired"
        :additional-info="'additional info'"
      />

      <CTag
        :color="'processing'"
        :text-content="status.processing"
        :additional-info="'additional info'"
      />

      <CTag
          :color="'partially_refunded'"
          :text-content="status.partially_refunded"
          :additional-info="'additional info'"
      />

      <CTag
          :color="'paid'"
          :text-content="status.paid"
          :additional-info="'additional info'"
      />

      <CTag
          :color="'refunded'"
          :text-content="status.refunded"
          :additional-info="'additional info'"
      />

      <CTag
        :color="'uncompleted'"
        :text-content="status.uncompleted"
        :additional-info="'additional info'"
      />

      <CTag
          :color="'cancelled'"
          :text-content="status.cancelled"
          :additional-info="'additional info'"
      />

      <CTag
          :color="'failed'"
          :text-content="status.failed"
          :additional-info="'additional info'"
      />

      <CTag
          :color="'error'"
          :text-content="status.error"
          :additional-info="'additional info'"
      />
    </div>

    <CCodeSnippet :snippet="snippet">
      <CTag
        :color="'paid'"
        :text-content="status.paid"
        :additional-info="'additional info'"
      />
    </CCodeSnippet>

  <div>
  </div>
</template>

<script setup lang="ts">

import { CTag } from '@/components'
import CCodeSnippet from '@/components/ui/CCodeSnippet.vue'

const status = {
    pending: "En attente",
    paid: "Payée",
    partially_refunded: "Partiellement remboursée",
    refunded: "Remboursée",
    cancelled: "Interrompue",
    failed: "Refus de financement",
    expired: "Expirée",
    error: "Non aboutie",
    processing: "En cours de traitement",
    uncompleted: "Incomplète"
}

const snippet = `
  <CTag
    :color="'paid'"
    :text-content="status.paid"
    :additional-info="'additional info'"
  />
`

</script>

<style lang="scss">
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 50px;
}
</style>
