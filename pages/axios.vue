<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <input v-model="find">
    <button @click="findKeyData">search_key</button>
    <button @click="findAgeData">search_age</button>
    <hr>
    <table>
      <tr>
        <th>Email</th>
        <td><input v-model="email"></td>
      </tr>
      <tr>
        <th>Name</th>
        <td><input v-model="username"></td>
      </tr>
      <tr>
        <th>Age</th>
        <td><input type="number" v-model="age" min="0"></td>
      </tr>
      <tr>
        <th>Tel</th>
        <td><input v-model="tel"></td>
      </tr>
      <tr>
        <th></th>
        <td></td>
        <button @click="addData">Add data</button>
      </tr>
    </table>
    <ul>
      <li>{{json_data}}</li>
    </ul>
    <hr>
    <ul v-for="(data,key) in json_data">
      <!-- <li>{{data.name}}({{data.age}})[{{key}}]</li> -->
      <li>key: {{key}}<br> data: {{data}}</li>
    </ul>
    <router-link to="/">go to top</router-link>
  </section>
</template>

<script>
const axios = require('axios');
  let base_url = "https://nuxt-firebase-app-5b6cc.firebaseio.com/person";
  let query_key_url = ".json?orderBy=%22$key%22&equalTo=%22"
  let query_age_url = ".json?orderBy=%22age%22"

export default {
  data(){
    return {
      title: 'Axios',
      email: '',
      username: '',
      tel: '',
      age: 0,
      message: 'axios sample',
      find: '',
      json_data: {},
    };
  },
  asyncData: async function(){
    let result = await axios.get(base_url + '.json');
    return {json_data: result.data};
  },
  methods: {
    findKeyData() {
      let find_url = base_url + query_key_url + this.find + '%22'
      axios.get(find_url).then((res) => {
        this.message = 'get ID=' + this.find
        this.json_data = res.data
      }).catch((e) => {
        this.message = 'Error!'
        this.json_data = {};
      })
    },
    findAgeData(){
      let range = this.find.split(',')
      let age_url = base_url + query_age_url +"&startAt=" + range[0] + "&endAt=" + range[1]
      axios.get(age_url).then((res) => {
        this.message = 'get:' + range[0] + ' < age < ' + range[1]
        this.json_data = res.data
      }).catch((e) => {
        this.message = 'Error'
        this.json_data = {}
      })
    },
    addData() {
      let add_url = base_url + '/' + this.email + '.json'
      let data = {
        'name': this.username,
        'age' : Number(this.age),
        'tel' : this.tel
      };
      axios.put(add_url,data).then((res) => {
        this.email = ''
        this.username= ''
        this.age = 0
        this.tel = ''
        this.getAllData()
      });
    },
    getAllData(){
      axios.get(base_url + '.json').then((res) => {
        this.message = 'get all data'
        this.json_data = res.data
      }).catch((e) => {
        this.message = 'Error'
        this.json_data = {}
      })
    }
  },
  created() {
    this.getAllData()
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
