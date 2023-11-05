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
  <h2 class="text-center mb-5">My Portfolio</h2>
  <v-container>
    <div class="d-flex">
      <h5 class="ms-auto fw-bold">Grand Total: RM {{ portfolioDetails.grand_total }}</h5>
    </div>
    <v-data-table :headers="headers" :items="portfolioDetails.investment" class="elevation-1" />
  </v-container>
</template>
