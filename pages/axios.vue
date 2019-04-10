<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <input v-model="find">
    <button @click="findData">Click</button>
    <hr>
    <ul>
      <li>{{json_data}}</li>
    </ul>
    <hr>
    <ul v-for="(data,key) in json_data">
      <li>{{data.name}}({{data.age}})[{{key}}]</li>
    </ul>
    <router-link to="/">go to top</router-link>
  </section>
</template>

<script>
const axios = require('axios');
  let base_url = "https://nuxt-firebase-app-5b6cc.firebaseio.com/person.json";
  let query_url = "?orderBy=%22$key%22&equalTo=%22"
export default {
  data(){
    return {
      title: 'Axios',
      find: '',
      message: 'axios sample',
      json_data: {},
    };
  },
  asyncData: async function(){
    let result = await axios.get(base_url);
    return {json_data: result.data};
  },
  methods: {
      findData() {
      let find_url = base_url + query_url + this.find + '%22'
      axios.get(find_url).then((res) => {
        this.message = 'get ID=' + this.find
        this.json_data = res.data
      }).catch((e) => {
        this.message = 'Error!'
        this.json_data = {};
      })
    }
  }
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
