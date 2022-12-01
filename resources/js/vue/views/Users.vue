<template>

  <div class="bg-light container mx-auto py-8 text-center">

    <div class="loading" v-if="loading">

      Loading...

    </div>

    <div v-if="error" class="bg-red-500 text-white">

      {{ error }}

      <p>

<button @click.prevent="fetchData">

    Try Again

</button>

</p>

    </div>

    <ul v-if="users" class="space-y-4 divide-y">

      <li v-for="{ name, email } in users" class="space-x-2">

        <strong>Name:</strong> {{ name }},

        <strong>Email:</strong> {{ email }}

      </li>

    </ul>

  </div>

</template>

<script>

import axios from 'axios';

export default {

  data() {

    return {

      loading: false,

      users: null,

      error: null,

    };

  },

  created() {

    this.fetchData();

  },

  methods: {

    fetchData() {

      this.error = this.users = null;

      this.loading = true;

      axios

        .get('/api/users')

        .then(response => {

          this.loading = false;

          this.users = response.data;

        }).catch(error => {
          this.loading = false;
          this.error = error.response.data.message || error.message;
        });

    }

  }

}

</script>
