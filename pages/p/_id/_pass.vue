<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p v-html="message">no-message</p>
    <hr>
    <div>
      <router-link to="/">go to top</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      title:'login',
    };
  },
  validate ({ params }) {
    if (params.id == undefined || params.pass == undefined){
      return false;
    } else {
      return true;
    }
  },
  computed:{
    message(){
      let id = this.$route.params.id != undefined ? this.$route.params.id : '*** no id ***';
      let pass = this.$route.params.pass != undefined ? this.$route.params.pass : '*** no pass ***';
      return 'ID:' + id + '<br>PASS: ' + pass;
    },
  },
}
</script>
