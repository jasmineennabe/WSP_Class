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
    import { AddPost, GetMyPosts } from "../models/Posts";
    import Session from '../models/Session';
    

export default {
    data: ()=> ({
        newPost: {
            user: Session.user,
        },
        gallery: false,
    }),
    async mounted() {
        this.posts = await GetMyPosts();
    },
    methods: {
        async addPost(){
            const post = await AddPost(this.newPost)
            this.posts.unshift(post);
            this.newPost = { user: Session.user }
        },
        getImgUrl(value) {
        value += 50
        return `https://picsum.photos/id/10${value}/1230/500`
    },
        switchGallery(value) {
            this.gallery = value
            if (value) {
                return document.documentElement.classList.add('is-clipped')
            } else {
                return document.documentElement.classList.remove('is-clipped')
            }
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