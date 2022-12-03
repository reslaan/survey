

<template class="">

  <div>

    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <RouterLink to="/register" class="font-medium text-secondary hover:text-secondary/75">create new account
      </RouterLink>
    </p>
  </div>
  <form class="mt-8 space-y-6" @submit="login">
    <div v-if="errorMsg" class="flex justify-around items-center  bg-red-600   text-gray-100 rounded  ">
      {{errorMsg}}
      <span @click="errorMsg=''" class="text-3xl cursor-pointer flex items-center justify-center ">&times;</span>
    </div>

    <input type="hidden" name="remember" value="true">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email"  v-model="user.email"
          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder="Email address">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password"
          v-model="user.password"
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder="Password">
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center accent-primary">
        <input id="remember" name="remember" type="checkbox" v-model="user.remember"
          class="h-4 w-4 rounded border-gray-300  text-primary focus:ring-primary">
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-secondary hover:text-secondary/75">Forgot your password?</a>
      </div>
    </div>

    <div>
      <button type="submit"
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <!-- Heroicon name: mini/lock-closed -->
          <LockClosedIcon class="h-5 w-5 text-primary brightness-150 group-hover:text- group-hover:brightness-75"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">

          </LockClosedIcon>
        </span>
        Sign in
      </button>
    </div>

  </form>



</template>

<script setup>
import { LockClosedIcon, ClockIcon } from "@heroicons/vue/20/solid"
import { useRouter } from 'vue-router';
import store from '../store';
import {ref} from 'vue'

const router = useRouter()
const user = {
  email: '',
  password: '',
  remember: false

}
let errorMsg = ref('')

function login(ev) {
  ev.preventDefault();
  store.dispatch('login', user)
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
