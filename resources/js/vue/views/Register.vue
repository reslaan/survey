

<template class="">
  <div>
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up to your account</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <RouterLink to="/login" class="font-medium text-secondary hover:text-secondary/75">login to your account
      </RouterLink>
    </p>
  </div>
  <form class="mt-8 space-y-6" @submit.pr="register">
    <div v-if="errorMsg" class="bg-red-600 py-2 text-center text-gray-100 rounded font-medium px-auto mx-auto">{{errorMsg}}</div>
    <input type="hidden" name="remember" value="true">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="full-name" class="sr-only">Full Name</label>
        <input id="full-name" name="name" type="text" autocomplete="name" required v-model="user.name"
          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder="Full Name">
      </div>
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required v-model="user.email"
          class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder="Email address">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required
          v-model="user.password"
          class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder="Password">
      </div>
      <div>
        <label for="password" class="sr-only">Confirm Password</label>
        <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password"
          required v-model="user.password_confirmation"
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder="Password Confirmation">
      </div>
    </div>



    <div>
      <button type="submit"
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <!-- Heroicon name: mini/lock-closed -->

        </span>
        Sign Up
      </button>
    </div>
  </form>


</template>

<script setup>

import store from '../store';
import { useRouter } from 'vue-router';
import {ref} from 'vue'
const router = useRouter()
const user = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
}

let errorMsg = ref('')
function register(ev) {
  ev.preventDefault();
  store
    .dispatch('register', user)
    .then(() => {
        router.push({
          name: 'dashboard'
        })
    })
    .catch(err => {
      errorMsg.value = err.response.data.message

    })


}
</script>
