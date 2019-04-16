<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{$store.state.message}}</p>
    <hr>
    <div class="link"
      @click="$store.commit('doit')"
    >
      <a @click.stop="$store.commit('reset')">
        clicked: {{$store.state.counter}}</a>
      </div>
    <hr>
    <p>{{$store.state.message}}</p>
    <router-link to="/other">go to other</router-link>
    <hr>
    <router-link to="/memo">go to memo</router-link>
    <hr>
    <router-link to="/axios">go to axios</router-link>
    <hr>
    <router-link to="/board">go to board</router-link>
    <hr>
    <router-link to="/users">go to users</router-link>
    <hr>
    <router-link to="/qiita_posts">go to qiita_posts</router-link>
  </section>
</template>

<script>

export default {
  data(){
    return {
      title: 'hi',
      message: 'this is message',
    }
  },
  async mounted(){
    console.log(
      JSON.stringify(await
        this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js',true,' '))
    )
  }
}
</script>

<style>
.container {
  padding: 5px 10px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

hr {
  margin: 10px 0;
}
</style>
