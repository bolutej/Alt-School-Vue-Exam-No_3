<template>
  <main>
    <section class="s_1">
      <img alt="Github Dp" class="logo-b" src="@/assets/icons/bolu.jpeg" width="200" height="200"/>
      <h2>Bolu Tejumola</h2>
      <p>bolutej</p>
    </section>
    <section class="s_2">
      <ul v-for="repo in repos" v-bind:key="repo.id">
        <router-link :to="{ name: 'Repo Detail', params: { owner: repo.owner.login, name: repo.name } }">{{ repo.name }}</router-link>
        <!-- <li>{{ name.full_name }}</li> -->
      </ul>
        <section class="s_3">
          <button type="button" class="btn" @click="previous">Previous</button>
          <button type="button" class="btn" @click="next">Next</button>
        </section>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      repos: []
    }
  },
  methods: {
    // async singleRepo() {
    //   await fetch('https://api.github.com/repos/bolutej/altschool-exam')
    //     .then(res => res.json())
    //     .then(data => this.repos = data)
    //     .catch(err => console.log(err.message))
    // },
    async next () {
    const page = this.$route.query.page || 1;
    const nextPage = Number(page) + 1;
    await this.$router.push({path: '/', query: {page: `${nextPage}`} });
  },
  async previous () {
    const page = this.$route.query.page || 1;
    const previousPage = Number(page) - 1;
    await this.$router.push({path: '/', query: {page: `${previousPage}`} })
  },
  async fetchRepos (page) {
    await fetch(`https://api.github.com/users/bolutej/repos?per_page=10&page=${page}`)
    .then(res => res.json())
    .then(data => this.repos = data)
    .catch(err => console.log(err.message))
  }
},
watch: {
  '$route' () {
    const page = this.$route.query.page
    this.fetchRepos(page)
  }
},
mounted() {
  const page = this.$route.query.page || 1;
  this.fetchRepos(page);
  // this.singleRepo();
}


}

</script>

<style>

</style>
