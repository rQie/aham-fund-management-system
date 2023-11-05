<script lang="ts">
export default {
  name: 'ViewPerformanceHistoryRenderer',
  props: {
    fund: Object // Define the fund prop
  }
}
</script>

<template>
  <v-btn
    class="me-2"
    density="compact"
    icon="mdi-eye"
    variant="text"
    :to="`performance-history/${fund.id}`"
  />
</template>
