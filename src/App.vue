<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterLink, RouterView 
  }
}
</script>

<template> 
  <nav>
        <RouterLink to="/">
          <img alt="Github Logo" class="logo" src="@/assets/icons/github-2.png" width="70" height="70"/>
          <h4>Github Repo <br/>Fetcher</h4>
        </RouterLink>
        <a href="https://github.com/bolutej" target="_blank"><img alt="Github Logo" class="logo" src="@/assets/icons/github-1.svg" width="30" height="30"/></a>
      </nav>
      <RouterView />
</template>



<style>

</style>
