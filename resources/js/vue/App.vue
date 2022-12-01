

<template>

  <RouterView />

</template>



<script >
import { RouterLink, RouterView } from 'vue-router'
import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState(['user'])
  }

}
</script>


