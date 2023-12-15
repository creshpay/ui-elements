<template>
  <tbody>
    <tr class="skeleton-datatable-row">
      <td>
        <span class="skeleton-loader" />
      </td>
    </tr>
    <tr class="skeleton-datatable-row">
      <td>
        <span class="skeleton-loader" />
      </td>
    </tr>
    <tr class="skeleton-datatable-row">
      <td>
        <span class="skeleton-loader" />
        <span class="loading-text">
          {{ i18n.global.t('translate.datatable.loading') }}
        </span>
      </td>
    </tr>
    <tr class="skeleton-datatable-row">
      <td>
        <span class="skeleton-loader" />
      </td>
    </tr>
    <tr class="skeleton-datatable-row">
      <td>
        <span class="skeleton-loader" />
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts" setup>
import i18n from '../../../plugins/i18n.plugin'

defineProps({
  showLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
