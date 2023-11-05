<script lang="ts">
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Layout',
  components: { Navbar }
}
</script>

<template>
  <Navbar />
  <main
    style="
      height: 100vh;
      min-height: 100vh;
      padding-left: calc(var(--v-layout-left) + 20px) !important;
      /* --v-layout-left: 270px; */
      /* --v-layout-right: 0px; */
      --v-layout-top: 70px;
      --v-layout-bottom: 0px;
      flex: 1 0 auto;
      max-width: 100%;
      transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      /* padding-left: var(--v-layout-left); */
      /* padding-right: var(--v-layout-right); */
      padding-top: var(--v-layout-top);
      padding-bottom: var(--v-layout-bottom);
    "
  >
    <router-view />
  </main>
</template>
