<template>
  <section class="container">
    <div class="login" @click="doLogin">[login as {{user_name}}]</div>
    <h1>{{title}}</h1>
    <p class="message">{{message}}</p>
    <div v-if="logined">
      <table>
        <th>Message</th>
        <td><input v-model="msg" size="50"></td>
        <td><button @click="add">add</button></td>
      </table>
      <hr>
      <ul v-for="(data,key) in json_data">
        <li>
          <div class="list1">{{data.msg}}</div>
          <div class="list2">{{data.user}}({{data.posted}})</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import firebase from "firebase"

const axios = require('axios')

let config = {
    apiKey: "AIzaSyCCHSPN89TWX8IYpd5zRzSAytRhRDueMP0",
    authDomain: "nuxt-firebase-app-5b6cc.firebaseapp.com",
    databaseURL: "https://nuxt-firebase-app-5b6cc.firebaseio.com",
    projectId: "nuxt-firebase-app-5b6cc",
    storageBucket: "nuxt-firebase-app-5b6cc.appspot.com",
    messagingSenderId: "836571126469"
}
firebase.initializeApp(config)

export default {
  data(){
    return {
      title: 'Board',
      message: 'show mini board',
      user_name: '',
      logined: true,
      msg: '',
      page: 0,
      num_per_page: 10,
      json_data: {},
    }
  },
  methods: {
    login(){
      let provider = new firebase.auth.GoogleAuthProvider()
      let self = this
      firebase.auth().signInWithPopup(provider).then(function(result){
        console.log(result.user)
        self.user = result.user
        self.user_name = result.user.displayName
        self.message = 'logined'
        let db = firebase.database()
        let ref = db.ref('board')
        ref.orderByKey()
            .limitToLast(self.num_per_page)
            .on('value',function(snapshot){
              if(firebase.auth().currentUser != null){
                let arr = []
                let data = snapshot.val()
                for(let item in data){
                  arr.unshift(data[item])
                }
                console.log(arr)
                self.json_data = arr
              } else {
                self.json_data = {}
              }
            })
      })
    },
    logout(){
      firebase.auth().signOut()
      this.user_name = ''
      this.json_data = {}
      this.message = 'logouted'
    },
    doLogin(){
      if(firebase.auth().currentUser == null){
        this.login()
      } else {
        this.logout()
      }
    },
    add(){
      if(firebase.auth().currentUser == null){
        alert('plz login')
        return
      }
      let db = firebase.database()
      let user = firebase.auth().currentUser
      console.log("user" + user)
      let ref = db.ref('board')
      let self = this
      let d = new Date()
      let dstr = d.getFullYear() + '-'
                + (d.getMonth() + 1) + '-'
                + d.getDate() + ' '
                + d.getHours() + ':'
                + d.getMinutes() + ':'
                + d.getSeconds()
      let id = d.getTime()
      let data = {
        msg: this.msg,
        user: user.displayName,
        posted: dstr,
      }
      firebase.database().ref('board/' + id).set(data)
      this.msg = ''
      this.message = 'posted'
    }
  },
  created(){
    if(firebase.auth().currentUser == null){
      this.login()
    }
    console.log("test" + firebase.auth().currentUser)
  }
}
</script>

<style>
.login {
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
}
.list1 {
  text-align: left;
  font-size: 16px;
}
.list2 {
  text-align: right;
  font-size: 10px;
}
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60px;
  color: orange;
}
p {
  padding-top: 5px;
  margin: 10px 0;
  font-size: 20px;
}
.message {
  font-size: 16px;
}
ul {
  margin: 0 10px;
  background-color: aliceblue;
}
li {
  padding: 10px;
  font-size: 10px;
}
tr th {
  width: 120px;
  background-color: darkblue;
  color: white;
  font-size: 16px;
}
tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-size: 14px;
}
hr {
  margin: 10px 0;
}
input {
  font-size: 14px;
}
button {
  font-size: 14px;
}
</style>

