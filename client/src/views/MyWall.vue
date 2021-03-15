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
export default {
    data: ()=> ({
        newPost: {
            user: { }
        },
        posts: [
            {
                src: "https://www.irreverentgent.com/wp-content/uploads/2016/04/How-to-Workout-Plan-banner-new-1024x683.jpg",
                alt: "Placeholder image",
                caption: "No caption",
                time: Date(),
                user: {
                    name: "John Doe",
                    handle: "@johndoe",
                    pic: "https://randomuser.me/api/portraits/men/32.jpg",
                }
            },
            {
            src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/download-3-1585685825.jpeg",
                alt: "Placeholder image",
                caption: "Got my nails done :)",
                time: Date(),
                user: {
                    name: "Jane Doe",
                    handle: "@janedoe",
                    pic: "https://randomuser.me/api/portraits/women/67.jpg",
                }
            },
            {
            src: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440",
                alt: "Placeholder image",
                caption: "Look at my happy guy",
                time: Date(),
                user: {
                    name: "Jack Doe",
                    handle: "@jackdoe",
                    pic: "https://randomuser.me/api/portraits/men/1.jpg",
                }
            }
        ]
    }),
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