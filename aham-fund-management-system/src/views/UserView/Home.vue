<script lang="ts">
import { reactive, onMounted, ref, computed } from 'vue'

import ViewPerformanceHistoryRenderer from '@/components/ViewPerformanceHistoryRenderer.vue'
import InvestRenderer from '@/components/InvestRenderer.vue'
import { getFundList } from '@/composables'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ViewPerformanceHistoryRenderer,
    // eslint-disable-next-line vue/no-unused-components
    InvestRenderer
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'Name',
        align: 'start',
        sortable: false,
        key: 'name'
      },
      { title: 'investment_type', key: 'investment_type' },
      { title: 'Net Asset Value (RM)', key: 'net_asset_value' },
      { title: 'Actions', key: 'actions', sortable: false }
    ],
    fundList: []
  }),

  setup() {
    let { fundList, load } = getFundList()
    onMounted(() => {
      load()
    })

    const updatedFundList = computed(() => {
      return fundList.value.map((obj: any, i: number) => ({ ...obj, index: ++i }))
    })

    return {
      fundList: updatedFundList
    }
  }
}
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="fundList"
    :sort-by="[{ key: 'net_asset_value', order: 'desc' }]"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <ViewPerformanceHistoryRenderer :fund="item" />
      <InvestRenderer :fund="item" />
    </template>
  </v-data-table>
</template>
