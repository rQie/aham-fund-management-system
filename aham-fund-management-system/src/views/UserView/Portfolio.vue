<script lang="ts">
import { AgGridVue } from 'ag-grid-vue3'
import { reactive, onMounted, ref, computed } from 'vue'

import { getPortfolioDetails } from '@/composables'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Portfolio',
  data: () => ({
    headers: [
      {
        title: 'Fund Name',
        align: 'start',
        key: 'fund.name'
      },
      { title: 'Net Asset Value (RM)', key: 'fund.net_asset_value', align: 'center' },
      { title: 'Units', key: 'purchased_unit', align: 'center' },
      { title: 'Total Amount (RM)', key: 'total_amount', align: 'center' },
      { title: 'Date', key: 'transaction_date', align: 'center' }
    ],
    fundList: []
  }),
  setup() {
    let { portfolioDetails, load } = getPortfolioDetails()

    onMounted(() => {
      load()
    })

    const updatedportfolioDetails: any = computed(() => {
      return {
        ...portfolioDetails.value,
        investment: portfolioDetails.value.investment.map((obj: any, i: number) => ({
          ...obj,
          index: ++i,
          transaction_date: new Date(obj.transaction_date).toDateString()
        }))
      }
    })

    return {
      portfolioDetails: updatedportfolioDetails
    }
  }
}
</script>

<template>
  <v-container>
    <h2 class="text-h2 text-center ms-auto fw-bold">
      Grand Total: RM {{ portfolioDetails.grand_total }}
    </h2>
  </v-container>
  <v-card elevation="10" class="pb-2">
    <v-card-item class="pa-6">
      <v-data-table :headers="headers" :items="portfolioDetails.investment" class="elevation-1" />
    </v-card-item>
  </v-card>
</template>
