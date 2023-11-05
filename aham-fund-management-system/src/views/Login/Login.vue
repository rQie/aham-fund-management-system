<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

import { UserService } from '@/services'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data: () => ({
    visible: false
  }),
  name: 'Login',
  setup() {
    const router = useRouter()
    const loginForm = ref({
      username: 'investor1',
      password: 'password',
      isSubmitted: false
    })

    function onSubmit() {
      loginForm.value.isSubmitted = true
      const { isSubmitted, ...form } = loginForm.value
      UserService.login(form)
        .then((res) => {
          Cookies.set('token', res.data.token)
          router.push('/')
        })
        .catch((err) => {
          alert(
            err.response?.data.message ||
              (err.message === 'Network Error'
                ? 'Please ensure the backend is running!'
                : err.message)
          )
        })
        .finally(() => {
          loginForm.value.isSubmitted = false
        })
    }

    return { loginForm, onSubmit }
  }
}
</script>

<template>
  <!-- <v-container> -->
  <v-row no-gutters>
    <v-col
      cols="12"
      lg="8"
      class="d-none d-lg-flex align-center justify-center position-relative"
      style="background-color: #f4f5fb"
    >
      <v-img
        style="max-width: 768px; height: 100vh"
        aspect-ratio="1/1"
        cover
        src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/auth-v2-login-illustration-light-c910569c.png"
      />
    </v-col>
    <v-col cols="12" lg="4" class="d-flex justify-center align-center">
      <v-card
        :loading="loginForm.isSubmitted"
        class="mt-12 mt-sm-0 pa-4"
        style="max-width: 500px; box-shadow: none"
      >
        <v-card-text>
          <h5 class="text-h5 mb-1">Welcome to FMS! 👋🏻</h5>
          <p class="mb-0">Please sign-in to your account and start the adventure</p>
        </v-card-text>
        <v-card-text>
          <v-alert class="text-primary" variant="tonal"
            ><p class="text-caption mb-2">
              1st Investor: <strong>investor1</strong> / Pass: <strong>password</strong>
            </p>
            <p class="text-caption mb-0">
              2nd Investor: <strong>investor2</strong> / Pass: <strong>password</strong>
            </p></v-alert
          >
        </v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-col cols="12">
            <v-text-field
              v-model.trim="loginForm.username"
              label="Username"
              placeholder="Enter your username"
              type="text"
              variant="outlined"
              :rules="[() => !!loginForm.username || 'This field is required']"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model.trim="loginForm.password"
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              @click:append-inner="visible = !visible"
              :rules="[() => !!loginForm.password || 'This field is required']"
            />
          </v-col>
          <v-btn
            class="mt-2"
            color="#9155FD"
            block
            type="submit"
            :disabled="loginForm.isSubmitted"
            :loading="loginForm.isSubmitted"
            >Login</v-btn
          >
        </v-form>
        <!-- <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>
