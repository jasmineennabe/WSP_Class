<template>
  <div class="my-wall">
    <div class="columns">
      <div class="column is-one-quarter">
          <FriendsShort />
      </div>
      <div class="column content-item">
          <ContentCreation :newPost="newPost" @add="addPost()" />
        <div class="content-item" v-for="(post, i) in posts" :key="i">
            <ContentCard :post="post" />
    </div>
      </div>
    </div>
    
    <div class="column is-one-quarter">
        <ContentCard :post="newPost" />
    </div>
  </div>
</template>

<script>
    import ContentCard from '../components/ContentCard'
    import ContentCreation from '../components/ContentCreation.vue'
    import FriendsShort from '../components/FriendsShort.vue'
    import { GetMyPosts } from "../models/Posts";

export default {
    data: ()=> ({
        newPost: {
            user: { }
        }
    }),
    async mounted() {
        this.posts = await GetMyPosts();
    },
    methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        }
    },
    components: {
        ContentCard,
        FriendsShort,
        ContentCreation,
    }
}
</script>

<style>
.content-item {
    margin-top: 20px;
    width: 50vw;
}
</style>