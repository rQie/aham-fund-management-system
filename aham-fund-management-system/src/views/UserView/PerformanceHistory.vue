<script lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { getPerformanceHistoryList } from '@/composables'

export default {
  name: 'PerformanceHistory',

  data: () => ({
    headers: [
      {
        title: 'Net Asset Value (RM)',
        align: 'start',
        key: 'value'
      },
      { title: 'Increment/Decrement (%)', key: 'percent', align: 'center' },
      { title: 'Date', key: 'history_date', align: 'center' }
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
  },

  methods: {
    getColor(percent) {
      console.log('percent', percent)
      if (percent < 0) return 'error' // Negative values
      else if (percent > 0) return 'success' // Positive values
      else return 'secondary' // Define a CSS class for zero values
    }
  }
}
</script>

<template>
  <v-container>
    <div class="mb-3">
      <h3 class="text-h3 font-weight-medium my-8">
        {{ performanceHistoryList[0]?.fund.name || 'N/A' }}
      </h3>
      <p>
        Fund Type:
        <span class="fw-bold">{{ performanceHistoryList[0]?.fund.investment_type || 'N/A' }}</span>
      </p>
      <p class="my-4 text-body-1 text-10">
        "{{ performanceHistoryList[0]?.fund.description || 'N/A' }}""
      </p>
    </div>
  </v-container>
  <v-card elevation="10" class="pb-2">
    <v-card-item class="pa-6">
      <v-data-table
        :headers="headers"
        :items="performanceHistoryList"
        :sort-by="[{ key: 'net_asset_value', order: 'desc' }]"
        class="elevation-1"
        ><template v-slot:item.percent="{ value }">
          <v-chip :color="getColor(value)"> {{ value }} </v-chip>
        </template></v-data-table
      >
    </v-card-item>
  </v-card>
</template>
