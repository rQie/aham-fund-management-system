<script lang="ts">
export default {
  name: 'ViewPerformanceHistoryRenderer',
  props: {
    fund: Object // Define the fund prop
  }
}
</script>

<template>
  <v-btn class="me-2" density="compact" icon variant="text" :to="`performance-history/${fund.id}`">
    <v-icon stroke-width="1.5" size="20">mdi-eye</v-icon>
    <v-tooltip activator="parent" location="top">Details</v-tooltip>
  </v-btn>
</template>
