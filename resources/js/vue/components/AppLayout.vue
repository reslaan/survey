
<template class="">

  <div class="min-h-full">

    <Disclosure as="nav" v-slot="{ open }" class="bg-gray-800">

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.to"
                  :class="[this.$route.name === item.to.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', ' px-3 py-2 rounded-md text-sm font-medium']">
                  {{ item.name }}</RouterLink>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex flex-col max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none "
                    id="user-menu-button" aria-expanded="true" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="">
                  </MenuButton>
                </div>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <MenuItem as="div">
                    <RouterLink v-for="item in userNavigation" :key="item.name" :to="item.name"
                      :class="[item.name === 'Logout' ? 'text-red-600 hover:text-red-500' : '', 'block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100']">
                      {{ item.name }}</RouterLink>
                    </MenuItem>
                    <MenuItem>
                    <a @click="logout"
                      class="text-red-600 hover:text-red-500 block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 cursor-pointer">
                      Logout</a>
                    </MenuItem>




                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>


          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!--
              Heroicon name: outline/bars-3

              Menu open: "hidden", Menu closed: "block"
            -->
              <svg v-if="!open" class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">

                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
              Heroicon name: outline/x-mark

              Menu open: "block", Menu closed: "hidden"
            -->
              <svg v-if="open" class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <DisclosurePanel class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

          <RouterLink v-for="item in navigation" :key="item.name" :to="item.to"
            :class="[this.$route.name === item.to.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', ' block px-3 py-2 rounded-md text-base font-medium']">
            {{ item.name }}</RouterLink>
        </div>


        <Menu as="div" class="border-t border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5">
            <MenuButton class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
            </MenuButton>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div>

          </div>
          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems class="mt-3 space-y-1 px-2">

              <MenuItem as="div">
              <RouterLink v-for="item in userNavigation" :key="item.name" :to="item.name"
                :class="[item.name === 'Logout' ? 'text-red-600 hover:text-red-500' : '', 'block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white']">
                {{ item.name }}</RouterLink>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </DisclosurePanel>
    </Disclosure>

    <RouterView />

  </div>



</template>


<script >
import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useStore } from 'vuex';
import { computed } from "vue";
import { useRouter } from "vue-router";

const navigation = [
  { name: 'Dashboard', to: { name: 'dashboard' } },
  { name: 'Surveys', to: { name: 'surveys' } },
  { name: 'Users', to: { name: 'users' } }
]
const userNavigation = [
  { name: 'Profile', to: { name: 'profile' } },
  { name: 'Settings', to: { name: 'settings' } },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,

  },
  setup() {
    const store = useStore();
    const router = useRouter()
    function logout() {
       store.commit('logout')
       router.push({
        name:'login'
       })
    }
    return {
      user: computed(() => store.state.user.data),
      navigation: navigation,
      userNavigation: userNavigation,
      logout,
    }
  }
}
</script>
