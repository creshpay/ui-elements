<template>
  <h2>Charts</h2>

  <CCodeSnippet :snippet="snippet1">
    <h3>Single line chart</h3>
    <BaseChart
        :type="'line'"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
        :datasets="datasets2"
        :options="options"
        :gradients="gradients2"
    />
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet2">
    <h3>Double line chart</h3>
    <BaseChart
      :type="'line'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="datasets"
      :options="options2"
      :gradients="gradients"
    />
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet3">
    <h3>Bar chart</h3>
    <BaseChart
        :type="'bar'"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
        :datasets="datasets2"
        :options="options3"
        :gradients="gradients2"
    />
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet7">
    <div class="center">
      <CButton
          :color="'secondary'"
          @click="updateData"
      >
        Update Data
      </CButton>
    </div>
    <BaseChart
        :type="'line'"
        :labels="data.labels"
        :datasets="data.datasets"
        :options="options3"
        :gradients="gradients2"
    />
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet4">
    <h3>Gradient prop</h3>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet5">
    <h3>Datasets prop</h3>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet6">
    <h3>Options prop</h3>
  </CCodeSnippet>
</template>

<script setup lang="ts">
import { BaseChart } from '@/components'
import { ChartOptions } from 'chart.js/auto'
import type { ChartDataset } from 'chart.js'
import CCodeSnippet from '@/components/ui/CCodeSnippet.vue'
import { reactive } from 'vue'
import CButton from '@/components/ui/CButton.vue'

const data = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'before update',
    pointBackgroundColor: 'white',
    fill: true,
    borderWidth: 2,
    borderColor: '#400EC9',
    data: [50, 55, 80, 81, 54, 50, 70],
    cubicInterpolationMode: 'default',
    tension: 0.4,
  }]
})

function updateData(){
  data.labels = ['Yellow', 'Green', 'Orange', 'Blue', 'Black', 'White', 'Red']
  data.datasets = [{
    label: 'after update',
    pointBackgroundColor: 'white',
    fill: true,
    borderWidth: 4,
    borderColor: '#0ec927',
    data: [5050, 5065, 1300, 8021, 1504, 6500, 2700],
    cubicInterpolationMode: 'default',
    tension: 0.4,
  }]
}

const snippet1 = `
  <BaseChart
      :type="'line'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="gradients2"
      :options="options"
      :gradients="gradients"
  />
`
const snippet2 = `
  <BaseChart
      :type="'line'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="datasets"
      :options="options"
      :gradients="gradients"
  />
`
const snippet3 = `
  <BaseChart
      :type="'bar'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="datasets2"
      :options="options"
      :gradients="gradients"
  />
`
const snippet4 = `
  const gradients = [
    {
      y1: 450,
      offset1: 0,
      offset2: 0.4,
      offset3: 0.6,
      color1: 'rgba(64, 14, 201, 0.6)',
      color2: 'rgba(64, 14, 201, 0.2)',
      color3: 'rgba(64, 14, 201, 0.1)'
    },{
      y1: 250,
      offset1: 0,
      offset2: 0.4,
      offset3: 0.8,
      color1: 'rgba(52, 156, 231, 0.6)',
      color2: 'rgba(52, 156, 231, 0.5)',
      color3: 'rgba(52, 156, 231, 0.1)'
    }
  ]
`
const snippet5 = `
  const datasets: ChartDataset[] = [{
    label: 'Axe 1',
    pointBackgroundColor: 'white',
    fill: true,
    borderWidth: 2,
    borderColor: '#400EC9',
    data: [50, 55, 80, 81, 54, 50, 70],
    cubicInterpolationMode: 'default',
    tension: 0.4,
  }, {
    label: 'Axe 2',
    pointBackgroundColor: 'white',
    borderWidth: 2,
    fill: true,
    borderColor: '#349CE7',
    data: [10, 25, 30, 41, 54, 80, 90],
    cubicInterpolationMode: 'default',
    tension: 0.4,
  }]
`
const snippet6 = `
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: 'value',
        },
      },
    },
  }
`

const snippet7 = `
  <div class="center">
    <CButton
        :color="'secondary'"
        @click="updateData"
    >
      Update Data
    </CButton>
  </div>
  <BaseChart
      :type="'line'"
      :labels="data.labels"
      :datasets="data.datasets"
      :options="options3"
      :gradients="gradients2"
  />
`


const gradients = [
  {
    y1: 450,
    offset1: 0,
    offset2: 0.4,
    offset3: 0.6,
    color1: 'rgba(64, 14, 201, 0.6)',
    color2: 'rgba(64, 14, 201, 0.2)',
    color3: 'rgba(64, 14, 201, 0.1)'
  },{
    y1: 250,
    offset1: 0,
    offset2: 0.4,
    offset3: 0.8,
    color1: 'rgba(52, 156, 231, 0.6)',
    color2: 'rgba(52, 156, 231, 0.5)',
    color3: 'rgba(52, 156, 231, 0.1)'
  }
]
const gradients2 = [
  {
    y1: 450,
    offset1: 0,
    offset2: 0.4,
    offset3: 0.6,
    color1: 'rgba(64, 14, 201, 0.6)',
    color2: 'rgba(64, 14, 201, 0.2)',
    color3: 'rgba(64, 14, 201, 0.1)'
  }
]
const datasets: ChartDataset[] = [{
  label: 'Axe 1',
  pointBackgroundColor: 'white',
  fill: true,
  borderWidth: 2,
  borderColor: '#400EC9',
  data: [50, 55, 80, 81, 54, 50, 70],
  cubicInterpolationMode: 'default',
  tension: 0.4,
}, {
  label: 'Axe 2',
  pointBackgroundColor: 'white',
  borderWidth: 2,
  fill: true,
  borderColor: '#349CE7',
  data: [10, 25, 30, 41, 54, 80, 90],
  cubicInterpolationMode: 'default',
  tension: 0.4,
}]
const datasets2: ChartDataset[] = [{
  label: 'Axe 3',
  pointBackgroundColor: 'white',
  fill: true,
  borderWidth: 2,
  borderColor: '#400EC9',
  data: [50, 55, 80, 81, 54, 50, 70],
  cubicInterpolationMode: 'default',
  tension: 0.4,
}]
const options: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Single Line Chart',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      beginAtZero: true,
      display: true,
      title: {
        display: true,
        text: 'value',
      },
    },
  },
}
const options2: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Dual Line Chart',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      beginAtZero: true,
      display: true,
      title: {
        display: true,
        text: 'value',
      },
    },
  },
}
const options3: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Bar Chart',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      beginAtZero: true,
      display: true,
      title: {
        display: true,
        text: 'value',
      },
    },
  },
}

</script>

<style lang="scss">
.charts-container {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
