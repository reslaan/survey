

<template class="accent-primary">
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8" v-if="loading">

      <RouterLink to="/"><img class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></RouterLink>


      <RouterView />
    </div>
  </div>


</template>
<script >
export default {

  data() {

    return {
      loading: false,
    };

  },

  created() {

    this.fetchData();

  },

  methods: {

    fetchData() {
      this.loading = true;
    }

  }

}
</script>
