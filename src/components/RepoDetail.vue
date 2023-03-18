<template>
  <section >
    <div class="content">
      <p class="ech">{{ repo?.default_branch}}</p>
      <p class="ech">
        <img alt="folder" src="@/assets/icons/people.png" width="20" height="20"/>
        {{ repo?.private ? "Private" : "Public"}}
      </p>
  

  <h1 class="ech">{{repo?.full_name}}</h1>
  
  <a :href="repo?.html_url" target="_blank" class="ech">{{ repo?.html_url }}</a>
    
    </div>
    </section>

</template>

<script>

export default {
  data() {
    return {
      repo: null
    };
  },
  methods: {
    async singleRepo(name) {
      await fetch(`https://api.github.com/repos/bolutej/${name}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.repo = data
        })
        .catch(err => console.log(err.message))
    }
  },
  mounted() {
    const name = this.$route.params.name;
    this.singleRepo(name);
  }
}
</script>

  

