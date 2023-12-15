<template>
  <div class="date-range-filters-page">
    <div>default use</div>
    <CDateRangeFilters
      @filters-select="onFilterSelect"
    />
    <div>
      selected data: {{ state.data }}
    </div>

    <div>
      with custom right content template
    </div>
    <CDateRangeFilters
      @filters-select="onFilterSelect"
    >
      <template #rightContent>
        <CButton>
          Confirmer
        </CButton>
      </template>
    </CDateRangeFilters>
    <div>
      selected data: {{ state.data }}
    </div>

    <div>
      with initial values
    </div>
    <div>
      pre-selected date ranges
    </div>
    <CDateRangeFilters
      @filters-select="onFilterSelect2"
      :date-range="state.data2.dateRange"
      :activator="state.data2.activator"
    />

    <div>
      selected data: {{ state.data2 }}
    </div>
    <br><br>

    <div>
      pre-select date filter to 'fyear'
    </div>

    <CDateRangeFilters
      @filters-select="onFilterSelect2"
      :date-filter="'fyear'"
      :activator="'date-filter'"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { DateRangeFilterSelectResult } from '@/@types/cresh-ui'

import {
  CButton,
} from '@/components/ui'

import
  CDateRangeFilters
  from '@/components/ui/filters/CDateRangeFilters.vue'

const state = reactive<{
  data?: DateRangeFilterSelectResult
  data2: DateRangeFilterSelectResult
}>({
  data2: {
    activator: 'date-range',
    dateFilter: 'fmonth',
    dateRange: [new Date(1999, 1, 1), new Date(2019, 1, 1)]
  }
})

function onFilterSelect(result: DateRangeFilterSelectResult) {
  state.data = result
}

function onFilterSelect2(result: DateRangeFilterSelectResult) {
  state.data2 = result
}
</script>
