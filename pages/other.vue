<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr>
    <router-link to="/">go to top</router-link>
  </section>
</template>

<script>
export default {
  data(){
    return {
      title: 'other',
      message: 'this is other page'
    };
  },
}
</script>

<style>
.container {
  padding: 5px 10px;
}
</style>

