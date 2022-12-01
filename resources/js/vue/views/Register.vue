<script setup>
</script>

<template class="">
  <div>
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up to your account</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <RouterLink to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">login to your account
      </RouterLink>
    </p>
  </div>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="full-name" class="sr-only">Full Name</label>
        <input id="full-name" name="name" type="text" autocomplete="name" required
          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Full Name">
      </div>
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required
          class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Email address">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required
          class="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Password">
      </div>
      <div>
        <label for="password" class="sr-only">Confirm Password</label>
        <input id="confirmPassword" name="confirm_password" type="password" autocomplete="current-password" required
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Confirm Password">
      </div>
    </div>



    <div>
      <button type="submit"
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <!-- Heroicon name: mini/lock-closed -->

        </span>
        Sign Up
      </button>
    </div>
  </form>


</template>
