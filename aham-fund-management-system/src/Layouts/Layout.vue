<script lang="ts">
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Layout',
  components: { Navbar }
}
</script>

<template>
  <v-locale-provider>
    <v-app>
      <Navbar />
      <v-main>
        <v-container fluid class="page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl">
          <div class="maxWidth">
            <router-view />
          </div>
        </v-container>
      </v-main>
      <!-- </main> -->
    </v-app>
  </v-locale-provider>
</template>
