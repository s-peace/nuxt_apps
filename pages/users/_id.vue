<template>
  <div>
    <h3>User ID: {{user.id}}</h3>
    <img :src="user.profile_image_url" width="120" alt="">
    <p>{{user.description || 'No description'}}</p>
    <p>
      <nuxt-link to="/">
        <small>go to top</br></small>
      </nuxt-link>
    </p>
    <h3>{{user.id}}'s posts list</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h4>
          <span>{{item.title}}</span>
        </h4>
        <div>{{item.body.slice(0,130)}}....</div>
        <p><a target="_blank" :href="item.url">{{item.url}}</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({route,app}){
    const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
    const items = 
      await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.id}`)
    return {user,items}
  }
  // data(){
  //   return {
  //     userId: this.$route.params.id
  //   }
  // }
}
</script>
