<template>
   <div>
        <h1>{{ repo.name }}</h1>
        <p>{{ repo.description }}</p>
      </div>
    
</template>

<script>

export default {
  data() {
    return {
      repo: []
    };
  },
  methods: {
    async fetchRepo() {
      await fetch(`https://api.github.com/repos/${this.$route.params.name}`)
        .then((res) => {
          this.repo = res.data;
        });
    },
    // mounted() {
    //   this.fetchRepo();
    // }
  }
}
</script>

  

