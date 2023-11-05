<script lang="ts">
import { AgGridVue } from 'ag-grid-vue3'
import { reactive, onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { getPerformanceHistoryList } from '@/composables'

export default {
  name: 'PerformanceHistory',

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'Net Asset Value (RM)',
        align: 'start',
        sortable: false,
        key: 'value'
      },
      { title: 'Increment/Decrement (%)', key: 'percent' },
      { title: 'Date', key: 'history_date' }
    ],
    fundList: []
  }),
  setup() {
    const route = useRoute()

    let { performanceHistoryList, load } = getPerformanceHistoryList(Number(route.params.fund_id))

    onMounted(() => {
      load()
    })

    const updatedPerformanceHistoryList = computed(() => {
      return performanceHistoryList.value.map((obj: any, i: number) => ({
        ...obj,
        index: ++i,
        history_date: new Date(obj.history_date).toDateString()
      }))
    })

    return {
      performanceHistoryList: updatedPerformanceHistoryList
    }
  }
}
</script>

<template>
  <h2 class="text-center mb-5">
    <router-link to="/"><i class="bi bi-arrow-left-circle-fill"></i></router-link
    ><span class="ms-3">Performance History List</span>
  </h2>
  <div class="mb-3">
    <p>
      Fund Name: <span class="fw-bold">{{ performanceHistoryList[0]?.fund.name || 'N/A' }}</span>
    </p>
    <p>
      Fund Type:
      <span class="fw-bold">{{ performanceHistoryList[0]?.fund.investment_type || 'N/A' }}</span>
    </p>
    <p>
      Fund Description:
      <span class="fw-bold">{{ performanceHistoryList[0]?.fund.description || 'N/A' }}</span>
    </p>
  </div>
  <v-data-table
    :headers="headers"
    :items="performanceHistoryList"
    :sort-by="[{ key: 'net_asset_value', order: 'desc' }]"
    class="elevation-1"
  >
  </v-data-table>
</template>
