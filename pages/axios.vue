<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <ul v-for="(data,key) in json_data">
      <li>{{data.name}}({{data.age}})[{{key}}]</li>
    </ul>
  </section>
</template>

<script>
const axios = require('axios');
  let url = "https://nuxt-firebase-app-5b6cc.firebaseio.com/person.json";
export default {
  data(){
    return {
      title: 'Axios',
      message: 'axios sample',
    };
  },
  asyncData: async function(){
    let result = await axios.get(url);
    return {json_data: result.data};
  },
}
</script>

<style>
ul {
  margin: 0 10px;
  background-color: aliceblue;
}
li {
  padding: 10px;
  font-size: 16px;
}
</style>
