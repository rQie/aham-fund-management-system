<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const isCollapsed = ref(false)

    function logout() {
      Cookies.remove('token')
      router.push('login')
    }

    return { isCollapsed, logout }
  }
}
</script>

<template>
  <div class="pa-4 d-flex justify-center">
    <v-toolbar
      floating
      style="
        padding: 0 20px;
        border-radius: 15px;
        max-width: calc(100% - 330px) !important;
        z-index: 1004;
        transform: translateY(0%);
        position: fixed;
        /* left: 270px; */
        width: calc((100% - 270px) - 0px);
      "
    >
      <div class="d-flex align-center justify-space-between w-100">
        <v-btn variant="text" size="x-large" to="/"> Logo </v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account" v-bind="props"></v-btn>
          </template>

          <v-list density="compact" rounded="xl" style="width: 200px">
            <v-list-item to="/portfolio">
              <v-list-item-title><v-icon icon="mdi-account-box" /> My Profile</v-list-item-title>
            </v-list-item>
            <v-list-item class="mt-4">
              <v-btn
                @click="logout"
                block
                prepend-icon="mdi-logout"
                variant="outlined"
                color="error"
                rounded="xl"
                >Logout</v-btn
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </div>
</template>
