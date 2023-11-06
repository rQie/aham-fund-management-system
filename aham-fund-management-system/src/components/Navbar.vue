<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { UserIcon, MailIcon, ListCheckIcon } from 'vue-tabler-icons'

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
  <div class="container verticalLayout">
    <div class="maxWidth">
      <v-app-bar elevation="0" height="70">
        <div class="d-flex align-center justify-space-between w-100">
          <!-- Logo -->
          <v-btn variant="text" size="x-large" to="/"> Logo </v-btn>
          <div>
            <!-- User Profile -->
            <v-menu>
              <template v-slot:activator="{ props }">
                <!-- <v-btn icon="mdi-account" v-bind="props"></v-btn> -->
                <v-btn class="" variant="text" v-bind="props" icon>
                  <v-avatar size="35">
                    <img src="@/assets/images/profile/user-1.jpg" height="35" alt="user" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-sheet rounded="xl" width="200" elevation="10" class="mt-2">
                <v-list class="py-0" lines="one" density="compact">
                  <v-list-item color="primary" to="/portfolio">
                    <template v-slot:prepend>
                      <UserIcon stroke-width="1.5" size="20" />
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">My Profile</v-list-item-title>
                  </v-list-item>
                </v-list>
                <div class="pt-4 pb-4 px-5 text-center">
                  <v-btn @click="logout" color="error" variant="outlined" class="rounded-pill" block
                    >Logout</v-btn
                  >
                </div>
              </v-sheet>
            </v-menu>
          </div>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>
